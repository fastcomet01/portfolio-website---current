
import React from 'react';
import { Link } from 'react-router-dom';
import { FAQ_ITEMS, SERVICES, TECHNICAL_SKILLS } from '../constants';

const About: React.FC = () => {
  return (
    <div className="bg-bg-dark w-full h-full overflow-y-auto overflow-x-hidden text-white pt-24 md:pt-32 pb-12 md:pb-20 relative">
      {/* Background Mask for Fixed Back Button Area */}
      <div className="fixed top-0 left-0 w-full h-24 bg-gradient-to-b from-black via-black/80 to-transparent z-40 pointer-events-none"></div>

      {/* Enhanced Futuristic HUD Back Button */}
      <Link 
        to="/" 
        className="fixed top-4 left-4 md:top-8 md:left-12 flex items-center gap-4 md:gap-6 group z-50 transition-all pointer-events-auto"
        aria-label="Back to Portfolio"
      >
        <div className="relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
          <div className="absolute -inset-1 border border-white/5 opacity-40 group-hover:opacity-100 transition-opacity pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 md:w-4 h-[1px] bg-white/20 group-hover:bg-neon-cyan"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 md:w-4 h-[1px] bg-white/20 group-hover:bg-neon-cyan"></div>
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-3 md:h-4 bg-white/20 group-hover:bg-neon-pink"></div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-3 md:h-4 bg-white/20 group-hover:bg-neon-pink"></div>
          </div>

          <div className="absolute top-1 left-1 w-1 h-1 bg-neon-cyan/40 opacity-0 group-hover:opacity-100"></div>
          <div className="absolute bottom-1 right-1 w-1 h-1 bg-neon-pink/40 opacity-0 group-hover:opacity-100"></div>

          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10 w-5 h-5 md:w-6 md:h-6 transform group-hover:-translate-x-2 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
            <path d="M11 17L6 12L11 7" stroke="currentColor" strokeWidth="2" strokeLinecap="square" className="text-white group-hover:text-neon-cyan transition-colors"/>
            <path d="M6 12L18 12" stroke="currentColor" strokeWidth="2" className="text-white/40 group-hover:text-neon-cyan transition-colors"/>
          </svg>
        </div>
        
        <div className="flex flex-col hidden sm:flex">
          <div className="flex items-center gap-2">
            <span className="text-[8px] md:text-[10px] uppercase tracking-[0.6em] font-bold text-white/30 group-hover:text-white transition-colors">TERMINATE_SESSION</span>
          </div>
          <span className="text-[6px] md:text-[7px] font-mono text-white/10 group-hover:text-neon-cyan/40 transition-colors uppercase tracking-[0.3em] mt-0.5">AUTH_LEVEL: CORE_ADMIN</span>
        </div>
      </Link>

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="mb-20 md:mb-32 relative pt-8 md:pt-0">
          <div className="absolute -top-6 md:-top-10 left-0 text-neon-cyan text-[8px] md:text-[10px] font-mono tracking-[0.5em] uppercase">SYSTEM.Lx7 // PROFILE</div>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif font-light text-white leading-none max-w-5xl tracking-tighter">
            Digital experiences that <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-white to-neon-pink uppercase">impact reality</span>
          </h1>
          <div className="w-24 md:w-40 h-[1px] bg-gradient-to-r from-neon-cyan to-transparent mt-8 md:mt-12"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-4 space-y-12">
            <div className="p-6 md:p-10 border border-hairline bg-surface-dark/50 space-y-6 md:space-y-8 relative overflow-hidden">
              <div>
                <p className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-secondary-text mb-3">Location</p>
                <p className="text-xl md:text-2xl font-serif text-white">London, UK</p>
              </div>
              <div className="pt-6 border-t border-white/5 flex items-center gap-3">
                <span className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse"></span>
                <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] text-white">READY FOR INPUT</p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-[9px] md:text-[10px] uppercase tracking-[0.5em] text-secondary-text font-bold">Channels</h3>
              <div className="grid gap-2">
                {[
                  { label: 'EMAIL', val: 'nme3015@gmail.com', link: 'mailto:nme3015@gmail.com' },
                  { label: 'LINKEDIN', val: 'ivansmirnov', link: 'https://linkedin.com/in/ivansmirnov' },
                  { label: 'GITHUB', val: 'fastcomet01', link: 'https://github.com/fastcomet01' }
                ].map((item) => (
                  <a key={item.label} href={item.link} className="flex items-center justify-between p-5 bg-surface-dark border border-hairline hover:border-white transition-all group">
                    <div>
                      <span className="text-[8px] uppercase tracking-widest text-secondary-text block mb-1">{item.label}</span>
                      <span className="text-sm text-white font-medium group-hover:text-neon-cyan transition-colors">{item.val}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-32">
            <section className="space-y-8 text-lg md:text-xl text-secondary-text leading-relaxed font-light">
              <p className="border-l-2 border-neon-cyan/20 pl-6 md:pl-8">
                I'm currently a university student pursuing <span className="text-white font-medium">Computer Systems Engineering</span>, focusing on the intersection of deep logic and fluid aesthetics.
              </p>
              <p className="border-l-2 border-neon-pink/20 pl-6 md:pl-8">
                My methodology is rooted in the belief that high performance and visual excellence are not mutually exclusive—they are the two hemispheres of successful product synthesis.
              </p>
            </section>

            {/* Technical Matrix with Requested Categories */}
            <section className="space-y-16">
              <div className="flex items-center gap-6">
                <h3 className="text-2xl md:text-3xl font-serif text-white">Technical_Matrix</h3>
                <div className="h-[1px] flex-grow bg-gradient-to-r from-hairline to-transparent"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                 <SkillSection title="Programming Languages" skills={['Python', 'JavaScript', 'TypeScript', 'SQL', 'Bash']} />
                 <SkillSection title="Frontend & Frameworks" skills={['React', 'Vue', 'Node.js']} />
                 <SkillSection title="Machine Learning & AI" skills={['PyTorch', 'TensorFlow', 'Hugging Face Transformers', 'n8n', 'LangChain', 'Claude Code']} />
                 <SkillSection title="Data & Storage" skills={['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Amazon S3']} />
                 <SkillSection title="MLOps & DevOps" skills={['Docker', 'Kubernetes', 'GitLab CI']} />
                 <SkillSection title="Cloud Platforms" skills={['AWS', 'Google Cloud Platform', 'Microsoft Azure']} />
                 <SkillSection title="Integration & APIs" skills={['REST APIs', 'gRPC', 'WebSockets']} />
              </div>
            </section>

            <section className="space-y-12">
               <div className="flex items-center gap-6">
                <h3 className="text-2xl md:text-3xl font-serif text-white">Capabilities</h3>
                <div className="h-[1px] flex-grow bg-gradient-to-r from-hairline to-transparent"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {SERVICES.map((s) => (
                  <div key={s.name} className="p-8 border border-hairline hover:bg-white/5 transition-all flex items-center gap-6 group">
                    <span className="text-neon-pink text-xl font-bold">{s.icon}</span>
                    <span className="text-white font-bold tracking-[0.2em] uppercase text-[10px]">{s.name}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

const SkillSection: React.FC<{title: string, skills: string[]}> = ({title, skills}) => (
  <div className="space-y-6">
    <h4 className="text-[10px] font-mono text-neon-cyan uppercase tracking-[0.4em] border-b border-white/5 pb-3">{title}</h4>
    <div className="flex flex-wrap gap-2">
      {skills.map(skill => (
        <span key={skill} className="px-3 py-1.5 border border-white/10 text-white/60 text-[10px] font-light hover:text-white hover:border-white/30 transition-all bg-white/[0.02]">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default About;
