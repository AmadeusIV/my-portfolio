import React, { useEffect, useState } from 'react';
import { ExternalLink } from 'lucide-react';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects');
        if (!response.ok) {
          throw new Error('Không thể tải danh sách dự án');
        }
        const data = await response.json();
        setProjects(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Dự Án Nổi Bật
          </h2>
          <div className="h-1 w-20 bg-blue-600 rounded"></div>
        </div>

        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
          </div>
        )}

        {error && (
          <div className="p-4 bg-red-50 text-red-600 rounded-lg border border-red-100 flex justify-center">
            {error}
          </div>
        )}

        {!loading && !error && projects.length === 0 && (
          <div className="text-center text-slate-500 py-10">
            Chưa có dự án nào.
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-slate-50 rounded-2xl border border-slate-100 p-6 flex flex-col h-full hover:shadow-xl hover:border-slate-200 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-600 text-sm mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, idx) => (
                  <span 
                    key={idx} 
                    className="text-xs font-medium px-2.5 py-1 bg-white text-slate-600 rounded border border-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <a 
                href={project.link}
                className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 mt-auto"
              >
                Xem chi tiết
                <ExternalLink className="ml-1 w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
