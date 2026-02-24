"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";

export default function About() {
    return (
        <section id="about" className="py-24 bg-slate-900 relative border-t border-slate-800">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="flex items-center space-x-4 mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-100">
                            <span className="text-cyan-500 font-mono text-xl md:text-2xl mr-2">01.</span>
                            About Me
                        </h2>
                        <div className="flex-grow h-px bg-slate-800"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12 bg-slate-950/50 p-8 rounded-2xl border border-slate-800 shadow-xl">
                        {/* Text Content */}
                        <div className="md:col-span-2 space-y-6 text-slate-300 leading-relaxed font-sans text-lg">
                            <p>
                                {portfolioData.about}
                            </p>
                            <p className="text-slate-400">
                                My approach to DevOps is rooted in automation and reliability. I believe that a solid, secure infrastructure is the foundation of any great software product. I'm constantly exploring new tools and methodologies to optimize deployment workflows and ensure high availability.
                            </p>
                        </div>

                        {/* Visual/Terminal Representation */}
                        <div className="hidden md:block">
                            <div className="h-full rounded-xl bg-slate-950 border border-slate-800 overflow-hidden shadow-2xl">
                                <div className="bg-slate-900 border-b border-slate-800 px-4 py-2 flex items-center space-x-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    <span className="ml-2 text-xs text-slate-500 font-mono">bash</span>
                                </div>
                                <div className="p-4 font-mono text-xs text-slate-400 space-y-2">
                                    <p><span className="text-green-400">foo@bar:~$</span> whoami</p>
                                    <p className="text-cyan-300">{portfolioData.personalInfo.name}</p>
                                    <p><span className="text-green-400">foo@bar:~$</span> cat focus.txt</p>
                                    <p className="pl-2">
                                        - Automation<br />
                                        - CI/CD Pipelines<br />
                                        - Cloud Security<br />
                                        - Scalability<br />
                                        - Observability
                                    </p>
                                    <p className="animate-pulse">_</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
