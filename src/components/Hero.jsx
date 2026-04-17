import React from 'react';
import { ArrowRight, FileText } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative px-6 py-24 md:py-32 overflow-hidden flex items-center justify-center">
      {/* Subtle Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50 rounded-full blur-3xl opacity-50 -z-10"></div>
      
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-sm font-semibold tracking-wider text-blue-600 uppercase mb-4">
          Xin chào, tôi là
        </h2>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
          Hoàng Mạnh Quân
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Sinh viên năm 2 chuyên ngành Kỹ thuật Phần mềm. Định hướng phát triển Web/Backend với hệ sinh thái Node.js.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#projects" className="btn-primary w-full sm:w-auto">
            Xem dự án
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
          <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full bg-blue-50 text-blue-700 font-medium hover:bg-blue-100 transition-all duration-200 shadow-sm w-full sm:w-auto inline-flex items-center justify-center border border-blue-100">
            <FileText className="mr-2 w-5 h-5" />
            Xem CV
          </a>
          <a href="#contact" className="px-6 py-3 rounded-full bg-white text-slate-700 font-medium hover:text-slate-900 border border-slate-200 hover:border-slate-300 transition-all duration-200 shadow-sm w-full sm:w-auto inline-flex items-center justify-center">
            Liên hệ
          </a>
        </div>
      </div>
    </section>
  );
}
