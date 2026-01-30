
import React from 'react';
import { PORTFOLIO_DATA } from './constants';
import Navbar from './components/Navbar';
import AIChat from './components/AIChat';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-200/50 blur-[120px] rounded-full -z-10 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-200/50 blur-[100px] rounded-full -z-10 -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-8 text-center md:text-left">
            <div className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-700 rounded-full text-sm font-bold border border-indigo-100">
              👋 K dispozícii pre nové projekty
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 leading-[1.1]">
              Ahoj, ja som <span className="text-indigo-600">{PORTFOLIO_DATA.name.split(' ')[0]}</span>.
              <br />
              <span className="text-slate-400">{PORTFOLIO_DATA.title}</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed mx-auto md:mx-0">
              {PORTFOLIO_DATA.bio}
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a href="#contact" className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold shadow-xl shadow-indigo-200 hover:bg-indigo-700 hover:-translate-y-1 transition-all">
                Pracujme spolu
              </a>
              <a href="#projects" className="px-8 py-4 bg-white border border-slate-200 text-slate-800 rounded-xl font-bold hover:bg-slate-50 transition-all">
                Prezrieť prácu
              </a>
            </div>
          </div>
          <div className="w-64 h-64 md:w-96 md:h-96 relative group">
            <div className="absolute inset-0 bg-indigo-600 rounded-[2.5rem] rotate-6 group-hover:rotate-12 transition-transform duration-500 opacity-20"></div>
            <img 
              src="https://picsum.photos/seed/profile/800/800" 
              alt="Profil" 
              className="w-full h-full object-cover rounded-[2.5rem] shadow-2xl relative z-10 border-4 border-white"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-white px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 mb-4">Technické Zručnosti</h2>
            <div className="h-1.5 w-20 bg-indigo-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={PORTFOLIO_DATA.skills.slice(0, 6)} layout="vertical">
                  <XAxis type="number" hide />
                  <YAxis dataKey="name" type="category" width={100} tick={{ fontSize: 14, fontWeight: 600 }} axisLine={false} tickLine={false} />
                  <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
                  <Bar dataKey="level" radius={[0, 10, 10, 0]}>
                    {PORTFOLIO_DATA.skills.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#4f46e5' : '#818cf8'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {PORTFOLIO_DATA.skills.map((skill, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-200 transition-colors">
                  <div className="text-slate-900 font-bold mb-1">{skill.name}</div>
                  <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">{skill.category}</div>
                  <div className="mt-3 h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-600 rounded-full" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-slate-50 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-black text-slate-900">Moje Projekty</h2>
              <p className="text-slate-500 mt-2">Výber projektov, na ktorých som pracoval.</p>
            </div>
            <a href={PORTFOLIO_DATA.github} className="text-indigo-600 font-bold hover:underline">Pozrieť všetky na GitHub →</a>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {PORTFOLIO_DATA.projects.map((project, idx) => (
              <div key={idx} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-200/60">
                <div className="aspect-video relative overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="px-3 py-1 bg-white/90 backdrop-blur-md text-[10px] font-black uppercase tracking-widest text-indigo-600 rounded-full shadow-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <a href={project.link} className="inline-flex items-center gap-2 text-indigo-600 font-bold group/link">
                    Zobraziť detail
                    <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 mb-4">Pracovné Skúsenosti</h2>
            <div className="h-1.5 w-20 bg-indigo-600 mx-auto rounded-full"></div>
          </div>
          <div className="space-y-12">
            {PORTFOLIO_DATA.experience.map((exp, idx) => (
              <div key={idx} className="relative pl-8 md:pl-0">
                <div className="md:grid md:grid-cols-[1fr_2px_2fr] gap-12 items-start">
                  <div className="md:text-right pb-4 md:pb-0">
                    <div className="text-lg font-black text-slate-900">{exp.company}</div>
                    <div className="text-indigo-600 font-bold">{exp.period}</div>
                  </div>
                  <div className="hidden md:block w-px h-full bg-slate-100 relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-indigo-600 rounded-full ring-4 ring-indigo-50"></div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                    <p className="text-slate-600 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-slate-900 text-white py-20 px-6 mt-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="text-4xl font-black tracking-tight">Máš zaujímavý projekt?<br/><span className="text-indigo-400">Povedz mi o ňom!</span></h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-md">
              Hľadám príležitosti k spolupráci na inovatívnych nápadoch. Napíš mi email alebo sa spojme na sociálnych sieťach.
            </p>
            <div className="flex gap-6">
              <a href={PORTFOLIO_DATA.github} className="p-3 bg-white/5 rounded-xl hover:bg-indigo-600 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href={PORTFOLIO_DATA.linkedin} className="p-3 bg-white/5 rounded-xl hover:bg-indigo-600 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Meno" className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" />
              <input type="email" placeholder="Email" className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" />
            </div>
            <textarea placeholder="Vaša správa..." rows={4} className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"></textarea>
            <button className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-black tracking-widest uppercase hover:bg-indigo-700 shadow-xl shadow-indigo-900/50 transition-all active:scale-95">
              Odoslať správu
            </button>
          </form>
        </div>
        <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-white/5 text-center text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} {PORTFOLIO_DATA.name}. Vytvorené s pomocou AI a lásky k technológiám.
        </div>
      </footer>

      <AIChat />
    </div>
  );
};

export default App;
