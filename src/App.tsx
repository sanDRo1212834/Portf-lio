/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Github, Linkedin, Mail, Smartphone, ExternalLink, Code2, X } from "lucide-react";
import { TechCarousel } from "./components/TechCarousel";

const projects = [
  {
    title: "Sistema de Almoxarifado",
    description: "Um painel completo para gestão de estoque, controle de notas fiscais, acompanhamento de histórico e gerenciamento de funcionários da equipe. Desenvolvido para facilitar a operação diária e otimizar processos.",
    tags: ["React", "HTML", "CSS", "Vite", "Supabase", "Tailwind CSS"],
    githubUrl: "https://github.com/sanDRo1212834/Almoxarifado-",
    liveUrl: "",
    imageUrl: "/Capa.png"
  },
  {
    title: "Portfólio Pessoal",
    description: "Este próprio portfólio que você está acessando. Construído para demonstrar minhas habilidades com ferramentas modernas de front-end. O projeto integra animações fluidas e design responsivo.",
    tags: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/sanDRo1212834/Portf-lio", 
    liveUrl: "#",
    imageUrl: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1000&auto=format&fit=crop" 
  }
];

export default function App() {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen selection:bg-cyan-500/30 selection:text-cyan-200">
      <AnimatePresence>
        {expandedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setExpandedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-12 cursor-zoom-out"
          >
            <button 
              onClick={() => setExpandedImage(null)}
              className="absolute top-6 right-6 p-2 bg-stone-900/50 rounded-full hover:bg-stone-800 text-stone-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              src={expandedImage}
              alt="Projeto Expandido"
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl m-auto"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-stone-950/80 backdrop-blur-md border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-mono font-semibold text-lg text-stone-200">
            &lt;Sandro /&gt;
          </span>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-stone-400">
            <a href="#about" className="hover:text-cyan-400 transition-colors">Sobre</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Habilidades</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projetos</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contato</a>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-stone-800/40 via-stone-950 to-stone-950 -z-10"></div>
          
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-cyan-400 font-mono tracking-wider text-sm md:text-base mb-4">
                Olá, eu sou
              </h2>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-br from-white to-stone-400 bg-clip-text text-transparent">
                Francisco Sandro
              </h1>
              <p className="text-lg md:text-xl text-stone-400 mb-10 leading-relaxed max-w-2xl mx-auto">
                Desenvolvedor, entusiasta de tecnologia e formado em Análise e Desenvolvimento de Sistemas.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#contact" className="bg-cyan-500 hover:bg-cyan-400 text-stone-950 font-semibold px-8 py-3 rounded-full transition-all hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]">
                  Entrar em Contato
                </a>
                <a href="#projects" className="bg-stone-800 hover:bg-stone-700 text-stone-100 font-semibold px-8 py-3 rounded-full transition-all border border-stone-700 hover:border-stone-600">
                  Ver Projetos
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-stone-100">Sobre Mim</h2>
              <div className="space-y-4 text-stone-400 leading-relaxed">
                <p>
                  Sou formado em <strong className="text-stone-200">Análise e Desenvolvimento de Sistemas</strong> pela faculdade <strong className="text-stone-200">Uniasselvi</strong>.
                </p>
                <p>
                  Atualmente, estou aprofundando meus conhecimentos na <strong className="text-stone-200">Hashtag Treinamento</strong>, com foco em tecnologias web modernas.
                </p>
                <p>
                  Meu objetivo é construir aplicações robustas, bonitas e escaláveis, unindo a criatividade do front-end com a eficiência do back-end, sempre aberto a integrar novas tecnologias.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-stone-900 border border-stone-800 rounded-2xl p-8 shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl rounded-full"></div>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-stone-200">
                <Code2 className="w-5 h-5 text-cyan-400" />
                Foco de Estudo Atual
              </h3>
              <ul className="space-y-3 font-mono text-sm text-stone-400">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div> HTML, CSS & JavaScript
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div> Ecossistema React & Vite
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div> Node.js & Express
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div> Firebase & Supabase
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div> Agente de IA Gemini
                </li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16">
          <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
            <h2 className="text-3xl font-bold text-stone-100">Minhas Habilidades</h2>
            <p className="text-stone-400 mt-2">Tecnologias que utilizo no meu dia a dia</p>
          </div>
          <TechCarousel />
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 px-6 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-stone-100 text-center">Projetos Recentes</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-2xl border border-stone-800 bg-stone-900/50 overflow-hidden hover:border-cyan-500/30 transition-all hover:bg-stone-900 flex flex-col"
              >
                {/* Imagem do Projeto */}
                <div 
                  className="h-48 overflow-hidden relative cursor-zoom-in flex items-center justify-center bg-stone-950"
                  onClick={() => setExpandedImage(project.imageUrl)}
                >
                  <div className="absolute inset-0 bg-stone-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img 
                    src={project.imageUrl} 
                    alt={`Capa do projeto ${project.title}`} 
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-stone-100 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                       {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noreferrer" className="p-2 bg-stone-800 rounded-full hover:bg-stone-700 hover:text-cyan-400 transition-colors" title="Código no GitHub">
                          <Github className="w-4 h-4 text-stone-300" />
                        </a>
                      )}
                      {project.liveUrl && project.liveUrl !== "#" && (
                        <a href={project.liveUrl} target="_blank" rel="noreferrer" className="p-2 bg-stone-800 rounded-full hover:bg-stone-700 hover:text-cyan-400 transition-colors" title="Acessar projeto ao vivo">
                          <ExternalLink className="w-4 h-4 text-stone-300" />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-stone-400 mb-6 text-sm leading-relaxed flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs font-medium rounded-full border border-cyan-500/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-stone-900/40 -z-10 border-t border-stone-800"></div>
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6 text-stone-100">Vamos Conversar?</h2>
            <p className="text-stone-400 mb-12 max-w-xl mx-auto">
              Estou sempre aberto a novas oportunidades e desafios. Sinta-se à vontade para me contatar através de qualquer um dos canais abaixo.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <a href="mailto:sousasandro419@gmail.com" className="flex items-center gap-3 bg-stone-800 border border-stone-700 px-6 py-4 rounded-xl hover:bg-stone-700 transition-colors">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span className="text-stone-200 font-medium">E-mail</span>
              </a>
              <a href="https://wa.me/5598982467473" target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-stone-800 border border-stone-700 px-6 py-4 rounded-xl hover:bg-stone-700 transition-colors">
                <Smartphone className="w-5 h-5 text-cyan-400" />
                <span className="text-stone-200 font-medium">WhatsApp</span>
              </a>
              <a href="https://www.linkedin.com/in/sandroff" target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-stone-800 border border-stone-700 px-6 py-4 rounded-xl hover:bg-stone-700 transition-colors">
                <Linkedin className="w-5 h-5 text-cyan-400" />
                <span className="text-stone-200 font-medium">LinkedIn</span>
              </a>
              <a href="https://github.com/sanDRo1212834" target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-stone-800 border border-stone-700 px-6 py-4 rounded-xl hover:bg-stone-700 transition-colors">
                <Github className="w-5 h-5 text-cyan-400" />
                <span className="text-stone-200 font-medium">GitHub</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 text-center border-t border-stone-800 text-stone-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Francisco Sandro. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
