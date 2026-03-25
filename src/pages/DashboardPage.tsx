import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { ShieldAlertIcon, LogOutIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AnimatedBackground } from '../components/AnimatedBackground';
import { OverviewCards } from '../components/OverviewCards';
import { PipelineVisualization } from '../components/PipelineVisualization';
import { NotificationFeed } from '../components/NotificationFeed';
import { TabNavigation } from '../components/TabNavigation';
import { RiskAnalysisTab } from '../components/tabs/RiskAnalysisTab';
import { AIDetectionTab } from '../components/tabs/AIDetectionTab';
import { AutoFixTab } from '../components/tabs/AutoFixTab';
export function DashboardPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen w-full relative bg-navy overflow-x-hidden pb-12">
      <AnimatedBackground />

      {/* Top Navigation */}
      <nav className="relative z-20 border-b border-white/10 bg-navy/50 backdrop-blur-md sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ShieldAlertIcon className="h-6 w-6 text-neon-cyan" />
            <span className="font-display font-bold text-lg tracking-wide">
              Risk<span className="text-neon-cyan">Intel</span>
            </span>
            <span className="ml-4 px-2.5 py-0.5 rounded-full bg-white/10 text-xs font-medium text-white/60 border border-white/10">
              organization/repository
            </span>
          </div>

          <button
            onClick={() => navigate('/')}
            className="text-white/50 hover:text-white transition-colors flex items-center text-sm font-medium">
            
            <LogOutIcon className="h-4 w-4 mr-2" />
            Exit
          </button>
        </div>
      </nav>

      {/* Main Dashboard Layout */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              opacity: 0
            },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="space-y-6">
          
          {/* Top Row: Overview Cards */}
          <OverviewCards />

          {/* Middle Row: Pipeline & Notifications */}
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-8">
              <PipelineVisualization />
            </div>
            <div className="col-span-12 lg:col-span-4">
              <NotificationFeed />
            </div>
          </div>

          {/* Tabbed Content */}
          <TabNavigation>
            {(activeTab) => {
              switch (activeTab) {
                case 'risk-analysis':
                  return <RiskAnalysisTab />;
                case 'ai-detection':
                  return <AIDetectionTab />;
                case 'autofix':
                  return <AutoFixTab />;
                default:
                  return <RiskAnalysisTab />;
              }
            }}
          </TabNavigation>
        </motion.div>
      </main>
    </div>);

}