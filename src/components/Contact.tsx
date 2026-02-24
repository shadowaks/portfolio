"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";

export default function Contact() {
    return (
        <section id="contact" className="py-32 bg-slate-900 border-t border-slate-800 text-center">
            <div className="container mx-auto px-6 max-w-2xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex justify-center items-center space-x-4 mb-6">
                        <span className="text-cyan-500 font-mono text-xl mr-2">05.</span>
                        <h2 className="text-4xl font-bold text-slate-100">Get In Touch</h2>
                    </div>

                    <p className="text-lg text-slate-400 mb-10 font-sans leading-relaxed">
                        I'm currently looking for new opportunities to build and scale cloud infrastructure.
                        Whether you have a role available, a question, or just want to say hi,
                        my inbox is always open.
                    </p>

                    <a
                        href={`mailto:${portfolioData.personalInfo.email}`}
                        className="inline-block border border-cyan-500 text-cyan-400 font-mono px-8 py-4 rounded-lg hover:bg-cyan-500 hover:text-slate-900 transition-all shadow-[0_0_15px_rgba(34,211,238,0.2)] hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] relative overflow-hidden group"
                    >
                        <span className="relative z-10">Say Hello &rarr;</span>
                        {/* Subty highlight effect */}
                        <div className="absolute inset-0 h-full w-full opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-cyan-400 to-blue-500 -z-10 blur-md"></div>
                    </a>
                </motion.div>
            </div>

            {/* Footer minimal signature */}
            <footer className="mt-32 pt-8 border-t border-slate-800/50">
                <p className="text-slate-500 font-mono text-sm leading-6">
                    Designed & Built by {portfolioData.personalInfo.name}<br />
                    <span className="text-xs text-slate-600">&copy; {new Date().getFullYear()} All Rights Reserved.</span>
                </p>
            </footer>
        </section>
    );
}
