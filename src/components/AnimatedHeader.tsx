import { motion } from "motion/react";



export default function AnimatedHeader() {
    

    return (
        <>
        <header>
            <motion.div 
                initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 5,
                        ease: "easeInOut",
                        delay: 1
                    }}
                    className="absolute w-full  top-0 text-center mb-4 backdrop-blur-lg animate-fade-in">
                        <nav className="p-4">
                            <ul className="flex justify-end space-x-6 text-slate-400 font-mono">
                                <li><a href="/" className="hover:text-slate-400 transition-colors">Home</a></li>
                                <li><a href="/about" className="hover:text-slate-400 transition-colors">About</a></li>
                                <li><a href="/contact" className="hover:text-slate-400 transition-colors">Contact</a></li>
                            </ul>
                        </nav>
            </motion.div>
        </header>
        </>
    )
}