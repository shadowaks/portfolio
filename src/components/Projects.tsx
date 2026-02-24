"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { FolderGit2, ExternalLink } from "lucide-react";

export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-slate-950 relative border-t border-slate-800">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-grid-pattern opacity-50"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center space-x-4 mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-100">
                            <span className="text-cyan-500 font-mono text-xl md:text-2xl mr-2">04.</span>
                            Featured Infrastructure Projects
                        </h2>
                        <div className="flex-grow h-px bg-slate-800"></div>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {portfolioData.projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-slate-900 rounded-xl p-8 border border-slate-800 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all group relative flex flex-col h-full"
                            >
                                {/* Visual accent top line */}
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                <div className="flex justify-between items-center mb-6 text-slate-300">
                                    <FolderGit2 size={36} className="text-cyan-400" />
                                    <a href="#" className="hover:text-cyan-400 transition-colors">
                                        <ExternalLink size={24} />
                                    </a>
                                </div>

                                <h3 className="text-2xl font-bold text-slate-100 mb-4 group-hover:text-cyan-400 transition-colors">
                                    {project.title}
                                </h3>

                                <div className="text-slate-400 font-sans mb-6 flex-grow space-y-4">
                                    <p>{project.description}</p>
                                    <div>
                                        <strong className="text-slate-300">Challenge:</strong> {project.challenges}
                                    </div>
                                    <div>
                                        <strong className="text-slate-300">Impact:</strong> {project.impact}
                                    </div>
                                </div>

                                <ul className="flex flex-wrap text-sm font-mono text-slate-500 gap-3 mt-auto pt-6">
                                    {project.techStack.map((tech, i) => (
                                        <li key={i}>{tech}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
