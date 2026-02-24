"use client";

import { motion } from "framer-motion";
import { Terminal, Download, ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid-pattern pt-20 pb-16">
            {/* Subtle Background Glows */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-900/20 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Terminal Style Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center space-x-2 text-cyan-400 mb-6 font-mono text-sm sm:text-base bg-slate-900/50 w-fit px-4 py-2 rounded-full border border-slate-800"
                    >
                        <Terminal size={16} />
                        <span>~/{portfolioData.personalInfo.name.toLowerCase().replace(" ", "_")} --status "online"</span>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold text-slate-100 mb-6 tracking-tight leading-tight"
                    >
                        Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">{portfolioData.personalInfo.name}</span>
                        <br />
                        <span className="text-3xl md:text-5xl text-slate-400 mt-2 block font-medium">
                            {portfolioData.personalInfo.title}
                        </span>
                    </motion.h1>

                    {/* Short Bio */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed font-sans"
                    >
                        {portfolioData.personalInfo.shortBio}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-wrap gap-4"
                    >
                        <Link
                            href="#projects"
                            className="group flex items-center space-x-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-6 py-3 rounded-lg font-semibold transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]"
                        >
                            <span>View Projects</span>
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 hover:border-slate-600 px-6 py-3 rounded-lg font-medium transition-all"
                        >
                            <Download size={18} />
                            <span>Download Resume</span>
                        </a>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="mt-12 flex items-center space-x-6 text-slate-400"
                    >
                        <a href={portfolioData.personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                            <Github size={24} />
                            <span className="sr-only">GitHub</span>
                        </a>
                        <a href={portfolioData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                            <Linkedin size={24} />
                            <span className="sr-only">LinkedIn</span>
                        </a>
                        <a href={`mailto:${portfolioData.personalInfo.email}`} className="hover:text-cyan-400 transition-colors">
                            <Mail size={24} />
                            <span className="sr-only">Email</span>
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
            >
                <div className="w-[30px] h-[50px] rounded-full border-2 border-slate-600 flex justify-center p-2">
                    <motion.div
                        animate={{ y: [0, 15, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1.5 h-3 bg-cyan-500 rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
}
