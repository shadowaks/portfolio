"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { Cloud, Server, Shield, Activity, Database, Code } from "lucide-react";

const skillIcons: Record<keyof typeof portfolioData.skills, React.ReactNode> = {
    cloud: <Cloud className="text-cyan-400 w-8 h-8 mb-4" />,
    devops: <Server className="text-blue-400 w-8 h-8 mb-4" />,
    security: <Shield className="text-emerald-400 w-8 h-8 mb-4" />,
    monitoring: <Activity className="text-purple-400 w-8 h-8 mb-4" />,
    databases: <Database className="text-yellow-400 w-8 h-8 mb-4" />,
    languages: <Code className="text-orange-400 w-8 h-8 mb-4" />
};

export default function Skills() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <section id="skills" className="py-24 bg-slate-950 relative">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center space-x-4 mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-100">
                            <span className="text-cyan-500 font-mono text-xl md:text-2xl mr-2">02.</span>
                            Technical Arsenal
                        </h2>
                        <div className="flex-grow h-px bg-slate-800"></div>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {(Object.entries(portfolioData.skills) as [keyof typeof portfolioData.skills, string[]][]).map(([category, skills]) => (
                            <motion.div
                                key={category}
                                variants={itemVariants}
                                className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] transition-all group"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    {skillIcons[category]}
                                    <span className="text-xs font-mono text-slate-500 uppercase tracking-wider group-hover:text-cyan-500 transition-colors">
                                        {category}
                                    </span>
                                </div>

                                <h3 className="text-xl font-semibold text-slate-200 capitalize mb-4 group-hover:text-white transition-colors">
                                    {category}
                                </h3>

                                <div className="flex flex-wrap gap-2">
                                    {skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1 bg-slate-950 text-slate-300 text-sm rounded-md border border-slate-800"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
