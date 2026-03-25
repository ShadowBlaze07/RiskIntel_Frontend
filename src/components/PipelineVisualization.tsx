import React, { Fragment } from 'react';
import { motion } from 'framer-motion';
import {
  SearchIcon,
  ActivityIcon,
  WrenchIcon,
  ArrowRightIcon } from
'lucide-react';
const stages = [
{
  id: 'detect',
  title: 'Detect',
  desc: 'AI Probability: 78%',
  icon: SearchIcon,
  color: 'text-neon-cyan',
  bg: 'bg-neon-cyan/10',
  border: 'border-neon-cyan/30',
  glow: 'shadow-[0_0_15px_rgba(0,245,255,0.2)]'
},
{
  id: 'analyze',
  title: 'Analyze',
  desc: 'Risk Score: 7.5/10',
  icon: ActivityIcon,
  color: 'text-neon-orange',
  bg: 'bg-neon-orange/10',
  border: 'border-neon-orange/30',
  glow: 'shadow-[0_0_15px_rgba(255,107,53,0.2)]'
},
{
  id: 'suggest',
  title: 'Suggest Fix',
  desc: 'Auto-fixes ready',
  icon: WrenchIcon,
  color: 'text-neon-pink',
  bg: 'bg-neon-pink/10',
  border: 'border-neon-pink/30',
  glow: 'shadow-[0_0_15px_rgba(255,45,120,0.2)]'
}];

export function PipelineVisualization() {
  return (
    <div className="glass-panel rounded-2xl p-6">
      <h3 className="text-lg font-display font-semibold mb-6 flex items-center">
        <span className="w-2 h-2 rounded-full bg-neon-purple mr-2 animate-pulse" />
        Live Analysis Pipeline
      </h3>

      <div className="flex flex-col md:flex-row items-center justify-between w-full relative">
        {/* Connecting Lines (Desktop) */}
        <div className="hidden md:block absolute top-1/2 left-10 right-10 h-0.5 bg-white/10 -translate-y-1/2 z-0" />

        {stages.map((stage, index) =>
        <Fragment key={stage.id}>
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
              delay: index * 0.2
            }}
            className={`relative z-10 flex flex-col items-center p-4 rounded-xl glass-panel-hover border ${stage.border} ${stage.bg} ${stage.glow} w-full md:w-1/3 mx-2 my-2 md:my-0`}>
            
              <div
              className={`p-3 rounded-full bg-navy border ${stage.border} mb-3`}>
              
                <stage.icon className={`h-6 w-6 ${stage.color}`} />
              </div>
              <h4 className="font-display font-semibold text-white mb-1">
                {stage.title}
              </h4>
              <p className="text-xs text-white/60">{stage.desc}</p>
            </motion.div>

            {index < stages.length - 1 &&
          <motion.div
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            transition={{
              delay: index * 0.2 + 0.1
            }}
            className="hidden md:flex z-10 items-center justify-center text-white/30">
            
                <motion.div
              animate={{
                x: [0, 10, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut'
              }}>
              
                  <ArrowRightIcon className="h-6 w-6" />
                </motion.div>
              </motion.div>
          }
          </Fragment>
        )}
      </div>
    </div>);

}