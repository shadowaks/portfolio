"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { Briefcase } from "lucide-react";

export default function Experience() {
    return (
        <section id="experience" className="py-24 bg-slate-900 relative border-t border-slate-800">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center space-x-4 mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-100">
                            <span className="text-cyan-500 font-mono text-xl md:text-2xl mr-2">03.</span>
                            Experience
                        </h2>
                        <div className="flex-grow h-px bg-slate-800"></div>
                    </motion.div>

                    <div className="space-y-12">
                        {portfolioData.experience.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative pl-8 md:pl-0"
                            >
                                {/* Timeline Line (Desktop) */}
                                <div className="hidden md:block absolute left-[150px] top-2 bottom-[-48px] w-px bg-slate-800 last:bottom-0"></div>

                                <div className="md:flex gap-8 group">
                                    {/* Timeline Date (Desktop) */}
                                    <div className="hidden md:block w-[150px] flex-shrink-0 text-right pt-1">
                                        <span className="text-slate-400 font-mono text-sm">{exp.duration}</span>
                                    </div>

                                    {/* Timeline Dot */}
                                    <div className="absolute left-0 md:left-[145px] top-1.5 w-3 h-3 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(34,211,238,0.5)] group-hover:scale-150 transition-transform hidden md:block z-10"></div>

                                    {/* Timeline Icon (Mobile) */}
                                    <div className="md:hidden absolute left-0 top-1 text-cyan-500">
                                        <Briefcase size={20} />
                                    </div>

                                    {/* Content Card */}
                                    <div className="flex-grow bg-slate-950/50 p-6 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors">
                                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                                            <div>
                                                <h3 className="text-xl font-bold text-slate-200">
                                                    {exp.role} <span className="text-cyan-400">@ {exp.company}</span>
                                                </h3>
                                                {/* Timeline Date (Mobile) */}
                                                <div className="md:hidden mt-2 mb-4">
                                                    <span className="text-slate-400 font-mono text-sm">{exp.duration}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <p className="text-slate-400 mb-6 font-sans">
                                            {exp.description}
                                        </p>

                                        <ul className="space-y-3">
                                            {exp.achievements.map((item, i) => (
                                                <li key={i} className="flex space-x-3 text-slate-300 items-start">
                                                    <span className="text-cyan-500 mt-1.5">▹</span>
                                                    <span className="font-sans leading-relaxed">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
