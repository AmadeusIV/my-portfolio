import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// API: Get generic projects list
app.get('/api/projects', (req, res) => {
    try {
        const filePath = path.join(__dirname, 'data', 'projects.json');
        const rawData = fs.readFileSync(filePath);
        const projects = JSON.parse(rawData);
        res.json(projects);
    } catch (error) {
        console.error("Error reading projects:", error);
        res.status(500).json({ message: "Server error" });
    }
});

// API: Submit contact form
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;
    
    // Validate simple required fields here
    if(!name || !email || !message) {
        return res.status(400).json({ success: false, message: 'Vui lòng cung cấp đủ tên, email và tin nhắn.' });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'quanhm0412@gmail.com', // Thay bằng email nhận
                pass: process.env.EMAIL_PASS // Mật khẩu ứng dụng từ biến môi trường
            }
        });

        const mailOptions = {
            from: 'quanhm0412@gmail.com',
            to: 'quanhm0412@gmail.com', // Gửi về chính email của bạn
            subject: `[Portfolio] Tin nhắn mới từ: ${name}`,
            text: `Bạn có tin nhắn mới từ Contact Form ở Portfolio:
            
Họ tên: ${name}
Email liên hệ lại: ${email}
Nội dung:
${message}`
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: 'Đã gửi liên hệ thành công!' });
    } catch (error) {
        console.error("Gửi email thất bại:", error);
        res.status(500).json({ success: false, message: 'Lỗi server khi gửi email. Bạn có thể thử lại sau.' });
    }
});

// --- Serve Frontend Static Files in Production ---
const distPath = path.join(__dirname, '..', 'dist');
app.use(express.static(distPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
});
app.listen(PORT, () => {
    console.log(`Backend Server is running on http://localhost:${PORT}`);
});
