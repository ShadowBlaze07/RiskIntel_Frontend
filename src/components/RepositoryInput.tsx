import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GithubIcon,
  KeyIcon,
  ArrowRightIcon,
  CheckCircle2Icon,
  Loader2Icon } from
'lucide-react';
import { useNavigate } from 'react-router-dom';
const STAGES = [
{
  id: 'detect',
  label: 'Detecting AI Code',
  color: 'bg-neon-cyan',
  textGlow: 'text-glow-cyan'
},
{
  id: 'analyze',
  label: 'Analyzing Risk',
  color: 'bg-neon-orange',
  textGlow: 'text-glow-orange'
},
{
  id: 'suggest',
  label: 'Generating Fixes',
  color: 'bg-neon-pink',
  textGlow: 'text-glow-pink'
}];

export function RepositoryInput() {
  const [url, setUrl] = useState('');
  const [token, setToken] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [currentStage, setCurrentStage] = useState(-1);
  const navigate = useNavigate();
  const handleScan = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;
    setIsScanning(true);
    // Simulate pipeline stages
    for (let i = 0; i < STAGES.length; i++) {
      setCurrentStage(i);
      await new Promise((resolve) => setTimeout(resolve, 1500));
    }
    // Complete and navigate
    setCurrentStage(STAGES.length);
    setTimeout(() => {
      navigate('/dashboard');
    }, 800);
  };
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      transition={{
        duration: 0.6,
        delay: 0.2
      }}
      className="w-full max-w-2xl mx-auto glass-panel rounded-2xl p-8 relative overflow-hidden">
      
      {/* Top glowing edge */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-50" />

      <AnimatePresence mode="wait">
        {!isScanning ?
        <motion.form
          key="form"
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          exit={{
            opacity: 0,
            y: -20
          }}
          onSubmit={handleScan}
          className="space-y-6">
          
            <div className="space-y-4">
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <GithubIcon className="h-5 w-5 text-white/40 group-focus-within:text-neon-cyan transition-colors" />
                </div>
                <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://github.com/organization/repository"
                className="w-full bg-navy/50 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-white/30 focus:outline-none focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/50 transition-all"
                required />
              
              </div>

              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <KeyIcon className="h-5 w-5 text-white/40 group-focus-within:text-neon-purple transition-colors" />
                </div>
                <input
                type="password"
                value={token}
                onChange={(e) => setToken(e.target.value)}
                placeholder="GitHub Personal Access Token (Optional)"
                className="w-full bg-navy/50 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-white/30 focus:outline-none focus:border-neon-purple/50 focus:ring-1 focus:ring-neon-purple/50 transition-all" />
              
              </div>
            </div>

            <button
            type="submit"
            disabled={!url}
            className="w-full relative group overflow-hidden rounded-xl bg-white/5 border border-white/10 p-4 transition-all hover:bg-white/10 hover:border-neon-cyan/50 disabled:opacity-50 disabled:cursor-not-allowed">
            
              <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/0 via-neon-cyan/10 to-neon-cyan/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <div className="flex items-center justify-center space-x-2">
                <span className="font-display font-semibold text-lg tracking-wide group-hover:text-glow-cyan transition-all">
                  Analyze Repository
                </span>
                <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </motion.form> :

        <motion.div
          key="progress"
          initial={{
            opacity: 0,
            scale: 0.95
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          className="py-8 space-y-8">
          
            <div className="text-center space-y-2">
              <h3 className="font-display text-2xl font-semibold">
                {currentStage < STAGES.length ?
              'Analyzing Codebase...' :
              'Analysis Complete'}
              </h3>
              <p className="text-white/50 text-sm">
                Please wait while our AI engines process the repository.
              </p>
            </div>

            <div className="relative pt-4">
              {/* Progress Track */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-white/10 -translate-y-1/2 rounded-full overflow-hidden">
                <motion.div
                className="h-full bg-gradient-to-r from-neon-cyan via-neon-orange to-neon-pink"
                initial={{
                  width: '0%'
                }}
                animate={{
                  width: `${Math.min(100, (currentStage + 1) / STAGES.length * 100)}%`
                }}
                transition={{
                  duration: 0.5
                }} />
              
              </div>

              {/* Stage Nodes */}
              <div className="relative flex justify-between">
                {STAGES.map((stage, idx) => {
                const isCompleted = currentStage > idx;
                const isActive = currentStage === idx;
                const isPending = currentStage < idx;
                return (
                  <div
                    key={stage.id}
                    className="flex flex-col items-center relative z-10">
                    
                      <motion.div
                      className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors duration-300
                          ${isCompleted ? `${stage.color} border-transparent` : isActive ? `bg-navy border-${stage.color.split('-')[1]}` : 'bg-navy border-white/20'}`}
                      animate={
                      isActive ?
                      {
                        scale: [1, 1.1, 1],
                        boxShadow: `0 0 20px var(--tw-colors-${stage.color.split('-')[1]})`
                      } :
                      {}
                      }
                      transition={{
                        duration: 1.5,
                        repeat: Infinity
                      }}>
                      
                        {isCompleted ?
                      <CheckCircle2Icon className="h-5 w-5 text-navy" /> :
                      isActive ?
                      <Loader2Icon
                        className={`h-5 w-5 animate-spin text-${stage.color.split('-')[1]}`} /> :


                      <div className="w-2 h-2 rounded-full bg-white/20" />
                      }
                      </motion.div>
                      <span
                      className={`absolute top-12 text-xs font-medium whitespace-nowrap transition-colors duration-300
                        ${isActive ? `text-white ${stage.textGlow}` : isCompleted ? 'text-white/80' : 'text-white/40'}`}>
                      
                        {stage.label}
                      </span>
                    </div>);

              })}
              </div>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </motion.div>);

}