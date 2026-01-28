"use client";

import React, { useState, useEffect, useRef } from 'react';

// Types
interface Project {
  id: string;
  index: string;
  name: string;
  subtitle: string;
  link: string;
  tags: string[];
}

interface ServiceItem {
  name: string;
  icon: string;
}

// Constants
const PROJECTS: Project[] = [
  {
    id: 'union',
    index: '01',
    name: 'Union',
    subtitle: 'Next-generation collaborative coding environment and real-time IDE',
    link: 'https://union-financial-dashboard-126122738880.us-west1.run.app',
    tags: ['Collaboration', 'IDE', 'Real-time'],
  },
  {
    id: 'modelguard',
    index: '02',
    name: 'ModelGuard',
    subtitle: 'AI-powered automation and governance platform',
    link: 'https://ai-change-governance-8n8-clone-tool-one.vercel.app',
    tags: ['AI', 'Automation', 'Governance'],
  },
  {
    id: 'biteplan',
    index: '03',
    name: 'BitePlan',
    subtitle: 'AI-enhanced meal planning and nutritional discovery',
    link: 'https://biteplan-ai-126122738880.us-west1.run.app',
    tags: ['AI', 'Meal Planning', 'Nutrition'],
  },
  {
    id: 'nextlink',
    index: '04',
    name: 'NextLink',
    subtitle: 'Enterprise-grade link management and analytics',
    link: 'https://nextlink-126122738880.us-west1.run.app',
    tags: ['Link Management', 'Analytics', 'Enterprise'],
  },
  {
    id: 'mathminds',
    index: '05',
    name: 'MathMinds Studio',
    subtitle: 'AI-powered mathematics learning and visualization platform',
    link: 'https://mathminds-studio-126122738880.us-west1.run.app',
    tags: ['AI', 'Education', 'Mathematics'],
  },
];

const SERVICES: ServiceItem[] = [
  { name: 'UI/UX Design', icon: '✦' },
  { name: 'Product Design', icon: '✦' },
  { name: 'Design Automation Systems', icon: '✦' },
  { name: 'AI/ML Integration', icon: '✦' },
  { name: 'Prototyping', icon: '✦' },
  { name: 'User Research', icon: '✦' }
];

// Liquid Background Component
const LiquidBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext('webgl');
    if (!gl) return;

    const vsSource = `
      attribute vec4 aVertexPosition;
      void main() {
        gl_Position = aVertexPosition;
      }
    `;

    const fsSource = `
      precision highp float;
      uniform float uTime;
      uniform vec2 uResolution;

      void main() {
        vec2 uv = gl_FragCoord.xy / uResolution.xy;
        float aspect = uResolution.x / uResolution.y;
        uv.x *= aspect;

        float t = uTime * 0.15;
        
        vec2 p = uv * 3.0 - vec2(1.5 * aspect, 1.5);
        for(int i=1; i<6; i++) {
          float fi = float(i);
          p.x += 0.4 / fi * sin(fi * 2.0 * p.y + t + fi * 0.8);
          p.y += 0.4 / fi * sin(fi * 2.0 * p.x + t + fi * 0.3);
        }
        
        float lines = sin(p.x * 8.0 + p.y * 8.0);
        lines = abs(lines);
        lines = 0.02 / lines;
        
        vec3 blue = vec3(0.0, 0.4, 1.0);
        vec3 pink = vec3(1.0, 0.0, 0.6);
        
        float colorMix = 0.5 + 0.5 * sin(p.x * 0.5 + t);
        vec3 baseColor = mix(blue, pink, colorMix);
        
        float dist = length(p);
        float glow = exp(-dist * 0.5);
        
        vec3 finalColor = baseColor * lines * 1.5;
        finalColor += baseColor * glow * 0.1;
        
        vec2 centeredUv = (gl_FragCoord.xy / uResolution.xy) - 0.5;
        float vignette = 1.0 - length(centeredUv) * 1.2;
        
        gl_FragColor = vec4(finalColor * max(vignette, 0.2), 1.0);
      }
    `;

    const initShader = (gl: WebGLRenderingContext, type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
        return null;
      }
      return shader;
    };

    const shaderProgram = gl.createProgram();
    const vs = initShader(gl, gl.VERTEX_SHADER, vsSource);
    const fs = initShader(gl, gl.FRAGMENT_SHADER, fsSource);
    if (!vs || !fs || !shaderProgram) return;
    gl.attachShader(shaderProgram, vs);
    gl.attachShader(shaderProgram, fs);
    gl.linkProgram(shaderProgram);
    gl.useProgram(shaderProgram);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    const positions = [-1.0, 1.0, 1.0, 1.0, -1.0, -1.0, 1.0, -1.0];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

    const positionAttributeLocation = gl.getAttribLocation(shaderProgram, "aVertexPosition");
    gl.enableVertexAttribArray(positionAttributeLocation);
    gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

    const timeLocation = gl.getUniformLocation(shaderProgram, "uTime");
    const resolutionLocation = gl.getUniformLocation(shaderProgram, "uResolution");

    let animationId: number;
    const render = (time: number) => {
      if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform1f(timeLocation, time * 0.001);
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationId = requestAnimationFrame(render);
    };

    animationId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full opacity-60" />;
};

// Skill Group Component
const SkillGroup: React.FC<{title: string, skills: string[]}> = ({title, skills}) => (
  <div className="space-y-6 group">
    <h4 className="text-[9px] font-mono text-white/30 uppercase tracking-[0.3em] group-hover:text-cyan-400 transition-colors">{title}</h4>
    <div className="flex flex-col gap-3">
      {skills.map(skill => (
        <div key={skill} className="flex items-center gap-3">
          <div className="w-1 h-1 rounded-full bg-white/10 group-hover:bg-cyan-400/50 transition-colors"></div>
          <span className="text-xs text-white/70 font-light group-hover:text-white transition-colors">{skill}</span>
        </div>
      ))}
    </div>
  </div>
);

export default function Home() {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-black selection:bg-pink-500 selection:text-white">
      <LiquidBackground />

      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-40 flex flex-col pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-transparent h-32 md:h-52 -z-10 pointer-events-none"></div>
        
        <div className="p-4 md:p-10 flex justify-between items-start w-full gap-2">
          <div className="flex flex-col pointer-events-auto group min-w-0">
            <div className="flex items-center gap-4 md:gap-6">
              <div className="relative w-10 h-10 md:w-14 md:h-14 flex-shrink-0 flex items-center justify-center">
                <div className="absolute inset-0 border border-white/10 group-hover:border-cyan-400/50 transition-colors duration-500"></div>
                <div className="absolute top-0 left-0 w-full h-[1px] bg-cyan-400/50 animate-pulse"></div>
                <span className="relative z-10 text-[11px] md:text-[14px] font-sans font-light tracking-tighter text-white">IS</span>
              </div>
               
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-2 md:gap-3">
                  <h1 className="text-sm md:text-xl font-sans font-extralight tracking-[0.15em] md:tracking-[0.4em] text-white uppercase group-hover:tracking-[0.2em] md:group-hover:tracking-[0.45em] transition-all duration-700 truncate">
                    Ivan Smirnov
                  </h1>
                  <div className="w-1 h-1 flex-shrink-0 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(0,245,212,0.8)]"></div>
                </div>
                <div className="flex items-center gap-3 mt-1 opacity-60 md:opacity-100">
                  <span className="text-[5px] md:text-[6px] font-mono tracking-[0.3em] md:tracking-[0.5em] text-cyan-400 uppercase whitespace-nowrap">STATUS: ACTIVE</span>
                  <span className="text-[5px] md:text-[6px] font-mono tracking-[0.3em] md:tracking-[0.5em] text-white/20 uppercase whitespace-nowrap hidden sm:inline">LOC: LON_GMT</span>
                </div>
              </div>
            </div>
          </div>

          <nav className="flex flex-shrink-0 pointer-events-auto items-center pt-2 md:pt-3">
            <button 
              onClick={() => setShowAbout(!showAbout)}
              className={`group relative px-4 md:px-10 py-2.5 md:py-4 overflow-hidden transition-all ${showAbout ? 'text-pink-500' : 'text-white/60 hover:text-white'}`}
            >
              <span className="relative z-10 text-[11px] md:text-[14px] tracking-[0.1em] md:tracking-[0.5em] font-semibold uppercase whitespace-nowrap">
                {showAbout ? '[ CLOSE ]' : '[ ABOUT ]'}
              </span>
              <div className={`absolute bottom-0 left-0 h-[2px] bg-current transition-all duration-500 ${showAbout ? 'w-full' : 'w-0 group-hover:w-full'}`}></div>
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className={`relative z-20 pt-44 pb-24 px-4 md:px-12 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] max-w-7xl mx-auto ${showAbout ? 'opacity-0 scale-95 blur-2xl pointer-events-none' : 'opacity-100 scale-100 blur-0'}`}>
        
        {/* Project Registry Header */}
        <div className="flex items-end justify-between mb-12 md:mb-16 border-b border-white/5 pb-8">
          <div className="flex flex-col">
            <span className="text-[10px] tracking-[0.8em] text-pink-500 font-bold uppercase mb-2">Project Registry</span>
          </div>
          <div className="hidden md:flex flex-col items-end opacity-20 font-mono text-[8px] tracking-widest text-white">
            <span>0x1 // ARCHIVE_INIT</span>
            <span>INDEXED_BY_RELEVANCE</span>
          </div>
        </div>

        {/* Project Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block bg-zinc-950 border border-white/5 hover:border-white/20 transition-all duration-700 overflow-hidden rounded-none shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/10 group-hover:border-cyan-400 transition-colors"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-white/10 group-hover:border-pink-500 transition-colors"></div>

              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

              <div className="relative p-8 md:p-12 h-full flex flex-col justify-between z-10 min-h-[360px]">
                <div>
                  <div className="flex justify-between items-start mb-16">
                    <div className="flex flex-col">
                      <span className="text-[9px] font-mono text-white/20 tracking-[0.4em] mb-1">DATA_STREAM</span>
                      <span className="text-[10px] font-mono text-cyan-400 tracking-widest">
                        #{project.index}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-[1px] w-8 bg-white/10 group-hover:w-12 group-hover:bg-cyan-400 transition-all duration-700"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-cyan-400 transition-colors"></div>
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

              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 group-hover:w-full transition-all duration-700 ease-out"></div>
            </a>
          ))}
          
          {/* Contact Card */}
          <div className="group relative block bg-zinc-900/40 border border-white/5 p-8 md:p-12 h-full flex flex-col justify-center items-center text-center min-h-[360px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,46,110,0.05)_0%,transparent_70%)]"></div>
            <span className="relative z-10 text-[10px] tracking-[0.6em] text-pink-500 font-bold uppercase mb-6">Inquiry_Port</span>
            <h3 className="relative z-10 text-xl md:text-2xl font-serif font-light text-white/80 mb-8 uppercase tracking-widest leading-snug">Available for next-gen collaborations</h3>
            <button 
              onClick={() => setShowAbout(true)}
              className="relative z-10 px-8 md:px-10 py-4 bg-white text-black font-bold text-[10px] tracking-[0.4em] uppercase hover:bg-cyan-400 hover:text-black transition-all hover:scale-105"
            >
              ESTABLISH_LINK
            </button>
          </div>
        </section>
      </main>

      {/* About Overlay */}
      {showAbout && (
        <div className="fixed inset-0 z-50 flex items-start md:items-center justify-center bg-black/95 backdrop-blur-3xl overflow-y-auto p-4 md:p-8 animate-in fade-in duration-300">
          <div className="max-w-6xl w-full relative overflow-hidden bg-black/80 rounded-none border border-white/10 flex flex-col h-auto max-h-[90vh]">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-cyan-400 via-white to-pink-500"></div>
             
            <div className="sticky top-0 z-50 bg-black/60 backdrop-blur-xl p-6 md:px-12 md:py-8 border-b border-white/5 flex justify-between items-center">
              <button 
                onClick={() => setShowAbout(false)}
                className="flex items-center gap-4 group text-white hover:text-cyan-400 transition-all"
              >
                <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                  <div className="absolute -inset-1 border border-white/10 group-hover:border-cyan-400/50 transition-colors"></div>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="relative z-10 w-5 h-5 md:w-6 md:h-6 transform group-hover:-translate-x-1 transition-transform">
                    <path d="M20 12H4M4 12L10 18M4 12L10 6" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </div>
                <span className="text-[10px] uppercase tracking-[0.5em] font-bold">Return</span>
              </button>
              <div className="hidden sm:flex flex-col items-end font-mono">
                <h2 className="text-lg font-bold text-white uppercase tracking-widest">Profile_0x1</h2>
                <p className="text-pink-500 text-[8px] tracking-[0.4em] uppercase">SYSTEM_ACCESS: GRANTED</p>
              </div>
            </div>

            <div className="p-6 md:p-16 overflow-y-auto space-y-24 scroll-smooth">
              {/* Intro Section */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                {/* Contact Nodes */}
                <div className="lg:col-span-5 order-1 space-y-12">
                  <section className="space-y-6">
                    <h3 className="text-[10px] uppercase tracking-[0.6em] text-cyan-400 font-bold border-b border-white/5 pb-4">Contact_Nodes</h3>
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

                {/* Bio Description */}
                <div className="lg:col-span-7 order-2 space-y-10">
                  <div className="text-lg md:text-xl text-white/60 leading-relaxed font-light space-y-8">
                    <p className="border-l border-cyan-400/40 pl-6 md:pl-8 py-2">
                      I&apos;m a <span className="text-white font-medium">Computer Systems Engineering</span> student mainly focusing on AI Engineering and Product Development. I have a strong academic background in algorithms and systems design with a practical interest for clean UI/UX design.
                    </p>
                    <p className="border-l border-pink-500/40 pl-6 md:pl-8 py-2">
                      Driven by an <span className="text-white">entrepreneurial mindset</span>, I aim to bridge the gap between technical innovation and market needs, including using AI-driven solutions that are not only mathematically robust but also commercially viable and delightful to use.
                    </p>
                  </div>
                </div>
              </div>

              {/* Technical Skills Matrix */}
              <section className="space-y-12">
                <div className="flex items-center gap-6">
                  <h3 className="text-[10px] uppercase tracking-[0.6em] text-pink-500 font-bold border-b border-white/5 pb-4 flex-grow">Technical_Stack_Inventory</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
                  <SkillGroup title="Languages" skills={['Python', 'JavaScript', 'TypeScript', 'SQL', 'Bash']} />
                  <SkillGroup title="Frameworks" skills={['React', 'Vue', 'Node.js']} />
                  <SkillGroup title="ML & AI" skills={['PyTorch', 'TensorFlow', 'n8n', 'LangChain', 'Claude Code']} />
                  <SkillGroup title="Data & Infrastructure" skills={['PostgreSQL', 'Docker', 'AWS', 'GCP']} />
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

      {/* Footer */}
      <footer className="relative z-20 px-6 md:px-12 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-6">
          <span className="text-[8px] font-mono text-white/20 uppercase tracking-[0.5em]">System_Status: Optimal</span>
          <div className="flex gap-1.5">
            {[...Array(3)].map((_, i) => (
              <div key={i} className={`w-1 h-1 rounded-full ${i === 0 ? 'bg-cyan-400' : 'bg-white/10'}`}></div>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-8 md:gap-12 text-[8px] font-mono text-white/20 uppercase tracking-[0.1em] md:tracking-[0.4em]">
          <span className="hover:text-white transition-colors cursor-default">Privacy_Encrypted</span>
          <span className="hover:text-white transition-colors cursor-default hidden sm:inline">Terms_Verified</span>
          <span className="text-white/40">© 2025_FC_STD</span>
        </div>
      </footer>
    </div>
  );
}
