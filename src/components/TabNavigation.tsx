import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ActivityIcon, BrainCircuitIcon, WrenchIcon } from 'lucide-react';
interface Tab {
  id: string;
  label: string;
  icon: React.ElementType;
  color: string;
}
const tabs: Tab[] = [
{
  id: 'risk-analysis',
  label: 'Risk Analysis',
  icon: ActivityIcon,
  color: 'neon-orange'
},
{
  id: 'ai-detection',
  label: 'AI/Human Detection',
  icon: BrainCircuitIcon,
  color: 'neon-cyan'
},
{
  id: 'autofix',
  label: 'AutoFix',
  icon: WrenchIcon,
  color: 'neon-pink'
}];

interface TabNavigationProps {
  children: (activeTab: string) => React.ReactNode;
}
export function TabNavigation({ children }: TabNavigationProps) {
  const [activeTab, setActiveTab] = useState('risk-analysis');
  return (
    <div className="space-y-6">
      {/* Tab Buttons */}
      <div className="glass-panel rounded-2xl p-2 flex space-x-2">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-300
                ${isActive ? 'text-white' : 'text-white/50 hover:text-white/80'}`}>
              
              {isActive &&
              <motion.div
                layoutId="activeTab"
                className={`absolute inset-0 bg-${tab.color}/10 border border-${tab.color}/30 rounded-xl`}
                style={{
                  boxShadow: `0 0 20px rgba(${tab.color === 'neon-orange' ? '255, 107, 53' : tab.color === 'neon-cyan' ? '0, 245, 255' : '255, 45, 120'}, 0.15)`
                }}
                transition={{
                  type: 'spring',
                  stiffness: 500,
                  damping: 30
                }} />

              }
              <Icon
                className={`h-4 w-4 relative z-10 ${isActive ? `text-${tab.color}` : ''}`} />
              
              <span className="relative z-10">{tab.label}</span>
            </button>);

        })}
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{
            opacity: 0,
            y: 10
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            y: -10
          }}
          transition={{
            duration: 0.3
          }}>
          
          {children(activeTab)}
        </motion.div>
      </AnimatePresence>
    </div>);

}