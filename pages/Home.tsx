
import React, { useState } from 'react';
import { PROJECTS, FAQ_ITEMS, SERVICES, TECHNICAL_SKILLS } from '../constants';
import LiquidBackground from '../components/LiquidBackground';

const Home: React.FC = () => {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <div className="relative w-full h-full overflow-y-auto overflow-x-hidden bg-black selection:bg-neon-pink selection:text-white">
      <div className="fixed inset-0 pointer-events-none z-0">
        <LiquidBackground />
      </div>

      {/* Futuristic & Elegant Header / Brand Identity with Background Shield */}
      <header className="fixed top-0 left-0 w-full z-40 flex flex-col pointer-events-none">
        {/* The Background Shield: Prevents content clashing while keeping the HUD feel */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-transparent h-40 md:h-52 -z-10 pointer-events-none opacity-95"></div>
        
        <div className="p-6 md:p-10 flex justify-between items-start w-full">
          <div className="flex flex-col pointer-events-auto group">
            <div className="flex items-center gap-5">
               {/* Logo / HUD Marker */}
               <div className="relative w-8 h-8 flex items-center justify-center">
                  <div className="absolute inset-0 border border-white/10 group-hover:border-neon-cyan/50 transition-colors duration-500"></div>
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-neon-cyan/50 animate-[scan_2s_linear_infinite]"></div>
                  <span className="relative z-10 text-[9px] font-sans font-light tracking-tighter text-white">IS</span>
               </div>
               
               <div className="flex flex-col">
                  <div className="flex items-center gap-3">
                    <h1 className="text-lg md:text-xl font-sans font-extralight tracking-[0.4em] text-white uppercase group-hover:tracking-[0.45em] transition-all duration-700">
                      Ivan Smirnov
                    </h1>
                    <div className="w-1 h-1 rounded-full bg-neon-cyan animate-pulse shadow-[0_0_8px_rgba(0,245,212,0.8)]"></div>
                  </div>
                  <div className="flex items-center gap-3 mt-1.5">
                     <span className="text-[6px] font-mono tracking-[0.5em] text-neon-cyan uppercase">STATUS: ACTIVE</span>
                     <span className="text-[6px] font-mono tracking-[0.5em] text-white/20 uppercase">LOC: LON_GMT // v2.0.5</span>
                  </div>
               </div>
            </div>
          </div>

          <nav className="flex gap-4 md:gap-8 pointer-events-auto items-center pt-2">
            <button 
              onClick={() => setShowAbout(!showAbout)}
              className={`group relative px-6 py-2 overflow-hidden transition-all ${showAbout ? 'text-neon-pink' : 'text-white/60 hover:text-white'}`}
            >
              <span className="relative z-10 text-[9px] md:text-[10px] tracking-[0.6em] font-light uppercase">
                {showAbout ? '[ CLOSE ]' : '[ ABOUT ]'}
              </span>
              <div className={`absolute bottom-0 left-0 h-[1px] bg-current transition-all duration-500 ${showAbout ? 'w-full' : 'w-0 group-hover:w-full'}`}></div>
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className={`relative z-20 pt-44 pb-24 px-4 md:px-12 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] max-w-7xl mx-auto ${showAbout ? 'opacity-0 scale-95 blur-2xl pointer-events-none' : 'opacity-100 scale-100 blur-0'}`}>
        
        {/* Project Registry Header */}
        <div className="flex items-end justify-between mb-12 md:mb-16 border-b border-white/5 pb-8">
           <div className="flex flex-col">
              <span className="text-[10px] tracking-[0.8em] text-neon-pink font-bold uppercase mb-2">Project Registry</span>
           </div>
           <div className="hidden md:flex flex-col items-end opacity-20 font-mono text-[8px] tracking-widest text-white">
              <span>0x1 // ARCHIVE_INIT</span>
              <span>INDEXED_BY_RELEVANCE</span>
           </div>
        </div>

        {/* Project Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, idx) => (
            <a
              key={project.id}
              href={project.link}
              target={project.link.startsWith('http') ? "_blank" : "_self"}
              className="group relative block bg-zinc-950 border border-white/5 hover:border-white/20 transition-all duration-700 overflow-hidden rounded-none shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/10 group-hover:border-neon-cyan transition-colors"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-white/10 group-hover:border-neon-pink transition-colors"></div>

              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

              <div className="relative p-8 md:p-12 h-full flex flex-col justify-between z-10 min-h-[360px]">
                <div>
                  <div className="flex justify-between items-start mb-16">
                    <div className="flex flex-col">
                       <span className="text-[9px] font-mono text-white/20 tracking-[0.4em] mb-1">DATA_STREAM</span>
                       <span className="text-[10px] font-mono text-neon-cyan tracking-widest">
                        #{project.index}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                       <div className="h-[1px] w-8 bg-white/10 group-hover:w-12 group-hover:bg-neon-cyan transition-all duration-700"></div>
                       <div className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-neon-cyan transition-colors"></div>
                    </div>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-serif font-light text-white mb-4 uppercase tracking-tighter group-hover:text-white transition-all duration-500">
                    {project.name}
                  </h3>
                  <p className="text-[12px] text-white/40 leading-relaxed font-light mb-12 group-hover:text-white/60 transition-colors">
                    {project.subtitle}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[8px] uppercase tracking-[0.3em] font-mono text-white/20 border border-white/5 px-3 py-1.5 hover:bg-white/5 transition-all">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-neon-cyan group-hover:w-full transition-all duration-700 ease-out"></div>
            </a>
          ))}
          
          <div className="group relative block bg-zinc-900/40 border border-white/5 p-8 md:p-12 h-full flex flex-col justify-center items-center text-center min-h-[360px]">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,46,110,0.05)_0%,transparent_70%)]"></div>
             <span className="relative z-10 text-[10px] tracking-[0.6em] text-neon-pink font-bold uppercase mb-6">Inquiry_Port</span>
             <h3 className="relative z-10 text-2xl font-serif font-light text-white/80 mb-8 uppercase tracking-widest leading-snug">Available for next-gen collaborations</h3>
             <button 
                onClick={() => setShowAbout(true)}
                className="relative z-10 px-10 py-4 bg-white text-black font-bold text-[10px] tracking-[0.4em] uppercase hover:bg-neon-cyan hover:text-black transition-all hover:scale-105"
             >
                ESTABLISH_LINK
             </button>
          </div>
        </section>
      </main>

      {/* About Overlay */}
      {showAbout && (
        <div className="fixed inset-0 z-50 flex items-start md:items-center justify-center bg-black/95 backdrop-blur-3xl animate-fade-in overflow-y-auto p-4 md:p-8">
          <div className="max-w-6xl w-full glass-panel relative overflow-hidden bg-black/80 rounded-none border border-white/10 flex flex-col h-auto max-h-[90vh]">
             <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-neon-cyan via-white to-neon-pink"></div>
             
             <div className="sticky top-0 z-50 bg-black/60 backdrop-blur-xl p-6 md:px-12 md:py-8 border-b border-white/5 flex justify-between items-center">
                <button 
                  onClick={() => setShowAbout(false)}
                  className="flex items-center gap-4 group text-white hover:text-neon-cyan transition-all"
                >
                  <div className="relative w-12 h-12 flex items-center justify-center">
                    <div className="absolute -inset-1 border border-white/10 group-hover:border-neon-cyan/50 transition-colors"></div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="relative z-10 w-6 h-6 transform group-hover:-translate-x-1 transition-transform">
                      <path d="M20 12H4M4 12L10 18M4 12L10 6" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.5em] font-bold">Return</span>
                </button>
                <div className="hidden sm:flex flex-col items-end font-mono">
                  <h2 className="text-lg font-bold text-white uppercase tracking-widest">Profile_0x1</h2>
                  <p className="text-neon-pink text-[8px] tracking-[0.4em] uppercase">SYSTEM_ACCESS: GRANTED</p>
                </div>
             </div>

             <div className="p-6 md:p-16 overflow-y-auto space-y-24 scroll-smooth">
                {/* Intro Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                  <div className="lg:col-span-5 order-2 lg:order-1 space-y-12">
                     <section className="space-y-6">
                      <h3 className="text-[10px] uppercase tracking-[0.6em] text-neon-cyan font-bold border-b border-white/5 pb-4">Contact_Nodes</h3>
                      <div className="grid gap-2">
                        {[
                          { label: 'E-MAIL', val: 'nme3015@gmail.com', link: 'mailto:nme3015@gmail.com' },
                          { label: 'TEL', val: '+44 7311 609905', link: 'tel:+447311609905' },
                          { label: 'LINKEDIN', val: 'ivansmirnov', link: 'https://linkedin.com/in/ivansmirnov' },
                          { label: 'GITHUB', val: 'fastcomet01', link: 'https://github.com/fastcomet01' }
                        ].map((item) => (
                          <a key={item.label} href={item.link} target="_blank" rel="noopener noreferrer" className="block p-5 bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all group relative">
                            <span className="text-[8px] uppercase tracking-[0.3em] text-white/30 block mb-1 font-mono">{item.label}</span>
                            <span className="text-sm text-white font-medium block truncate group-hover:text-white group-hover:translate-x-1 transition-all">{item.val}</span>
                          </a>
                        ))}
                      </div>
                    </section>
                  </div>

                  <div className="lg:col-span-7 order-1 lg:order-2 space-y-10">
                    <div className="text-lg md:text-xl text-white/60 leading-relaxed font-light space-y-8">
                      <p className="border-l border-neon-cyan/40 pl-8 py-2">
                        I'm currently a university student pursuing <span className="text-white font-medium">Computer Systems Engineering</span>, where my journey began with coding in Python, focusing on algorithms and data structures.
                      </p>
                      <p className="border-l border-neon-pink/40 pl-8 py-2">
                        During my internships I picked up practical knowledge of system design, cloud architecture, and building <span className="text-white">scalable solutions</span>.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Updated Detailed Technical Skills Matrix */}
                <section className="space-y-12">
                   <div className="flex items-center gap-6">
                      <h3 className="text-[10px] uppercase tracking-[0.6em] text-neon-pink font-bold border-b border-white/5 pb-4 flex-grow">Technical_Stack_Inventory</h3>
                   </div>
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
                      <SkillGroup title="Programming Languages" skills={['Python', 'JavaScript', 'TypeScript', 'SQL', 'Bash']} />
                      <SkillGroup title="Frontend & Frameworks" skills={['React', 'Vue', 'Node.js']} />
                      <SkillGroup title="ML & AI" skills={['PyTorch', 'TensorFlow', 'Hugging Face Transformers', 'n8n', 'LangChain', 'Claude Code']} />
                      <SkillGroup title="Data & Storage" skills={['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Amazon S3']} />
                      <SkillGroup title="MLOps & DevOps" skills={['Docker', 'Kubernetes', 'GitLab CI']} />
                      <SkillGroup title="Cloud Platforms" skills={['AWS', 'Google Cloud Platform', 'Microsoft Azure']} />
                      <SkillGroup title="Integration & APIs" skills={['REST APIs', 'gRPC', 'WebSockets']} />
                   </div>
                </section>

                {/* FAQ */}
                <section className="space-y-12">
                  <h3 className="text-[10px] uppercase tracking-[0.6em] text-white/20 font-bold border-b border-white/5 pb-4">Knowledge_Base</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {FAQ_ITEMS.map((item, idx) => (
                      <div key={idx} className="space-y-4">
                        <h4 className="text-white font-bold tracking-tight text-xl">{item.question}</h4>
                        <p className="text-sm text-white/40 leading-relaxed font-light">
                          {item.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                <div className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 pb-4 opacity-30">
                  <div className="flex gap-8 text-[9px] font-mono uppercase tracking-[0.4em]">
                    <span>LOC // LONDON</span>
                    <span>51.5074° N, 0.1278° W</span>
                  </div>
                  <span className="text-[9px] font-mono uppercase tracking-[0.2em] italic">
                    FC_CORE_SYSTEM // 2025
                  </span>
                </div>
             </div>
          </div>
        </div>
      )}

      {/* Bottom Interface Bar */}
      <footer className="relative z-20 px-6 md:px-12 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-6">
           <span className="text-[8px] font-mono text-white/20 uppercase tracking-[0.5em]">System_Status: Optimal</span>
           <div className="flex gap-1.5">
             {[...Array(3)].map((_, i) => (
               <div key={i} className={`w-1 h-1 rounded-full ${i === 0 ? 'bg-neon-cyan' : 'bg-white/10'}`}></div>
             ))}
           </div>
        </div>
        <div className="flex items-center gap-12 text-[8px] font-mono text-white/20 uppercase tracking-[0.4em]">
           <span className="hover:text-white transition-colors cursor-default">Privacy_Encrypted</span>
           <span className="hover:text-white transition-colors cursor-default">Terms_Verified</span>
           <span className="text-white/40">© 2025_FC_STD</span>
        </div>
      </footer>
      
      <style>{`
        @keyframes scan {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(400%); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

const SkillGroup: React.FC<{title: string, skills: string[]}> = ({title, skills}) => (
  <div className="space-y-6 group">
     <h4 className="text-[9px] font-mono text-white/30 uppercase tracking-[0.3em] group-hover:text-neon-cyan transition-colors">{title}</h4>
     <div className="flex flex-col gap-3">
        {skills.map(skill => (
           <div key={skill} className="flex items-center gap-3">
              <div className="w-1 h-1 rounded-full bg-white/10 group-hover:bg-neon-cyan/50 transition-colors"></div>
              <span className="text-xs text-white/70 font-light group-hover:text-white transition-colors">{skill}</span>
           </div>
        ))}
     </div>
  </div>
);

export default Home;
