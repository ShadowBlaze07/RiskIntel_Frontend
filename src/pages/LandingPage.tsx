import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlertIcon } from 'lucide-react';
import { AnimatedBackground } from '../components/AnimatedBackground';
import { RepositoryInput } from '../components/RepositoryInput';
export function LandingPage() {
  return (
    <div className="min-h-screen w-full relative flex flex-col items-center justify-center px-4 overflow-hidden">
      <AnimatedBackground />

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center space-y-12">
        {/* Hero Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: -20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            ease: 'easeOut'
          }}
          className="space-y-6">
          
          <motion.div
            initial={{
              scale: 0.8,
              opacity: 0
            }}
            animate={{
              scale: 1,
              opacity: 1
            }}
            transition={{
              delay: 0.2,
              duration: 0.5
            }}
            className="inline-flex items-center space-x-2 glass-panel px-4 py-2 rounded-full border-neon-cyan/30 mb-4">
            
            <ShieldAlertIcon className="h-4 w-4 text-neon-cyan" />
            <span className="text-sm font-medium text-neon-cyan tracking-wide uppercase">
              System V2.0 Online
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter">
            AI Code Risk <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink">
              Intelligence
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-light">
            AI-generated code in production is an invisible risk. Detect,
            analyze, and auto-fix security vulnerabilities and quality issues in
            seconds.
          </p>
        </motion.div>

        {/* Input Panel */}
        <RepositoryInput />

        {/* Features / Stats Footer */}
        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            delay: 0.8,
            duration: 1
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 w-full max-w-3xl border-t border-white/10">
          
          <div className="flex flex-col items-center space-y-2">
            <span className="text-3xl font-display font-bold text-white">
              78%
            </span>
            <span className="text-sm text-white/50">AI Detection Accuracy</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <span className="text-3xl font-display font-bold text-white">
              &lt; 2s
            </span>
            <span className="text-sm text-white/50">Avg. Analysis Time</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <span className="text-3xl font-display font-bold text-white">
              100+
            </span>
            <span className="text-sm text-white/50">Auto-Fix Patterns</span>
          </div>
        </motion.div>
      </div>
    </div>);

}