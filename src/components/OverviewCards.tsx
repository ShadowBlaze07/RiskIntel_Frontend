import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { FilesIcon, BrainCircuitIcon, ShieldAlertIcon } from 'lucide-react';
const aiData = [
{
  name: 'AI Generated',
  value: 89,
  color: '#00F5FF'
},
{
  name: 'Human Written',
  value: 158,
  color: '#1F2937'
}];

const riskData = [
{
  name: 'Score',
  value: 7.5,
  color: '#FF6B35'
},
{
  name: 'Remaining',
  value: 2.5,
  color: '#1F2937'
}];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0
  }
};
export function OverviewCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Total Files Card */}
      <motion.div
        variants={cardVariants}
        className="glass-panel rounded-2xl p-6 relative overflow-hidden group">
        
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-10 -mt-10 transition-all group-hover:bg-white/10" />
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-sm text-white/50 font-medium mb-1">
              Total Files Scanned
            </p>
            <h3 className="text-4xl font-display font-bold text-white">247</h3>
          </div>
          <div className="p-3 bg-white/5 rounded-xl border border-white/10">
            <FilesIcon className="h-6 w-6 text-white/70" />
          </div>
        </div>
        <div className="flex items-center text-sm">
          <span className="text-neon-cyan bg-neon-cyan/10 px-2 py-0.5 rounded text-xs font-medium mr-2">
            +12%
          </span>
          <span className="text-white/40">vs last scan</span>
        </div>
      </motion.div>

      {/* AI Percentage Card */}
      <motion.div
        variants={cardVariants}
        className="glass-panel rounded-2xl p-6 relative flex items-center justify-between group">
        
        <div className="absolute top-0 right-0 w-32 h-32 bg-neon-cyan/10 rounded-full blur-3xl -mr-10 -mt-10 transition-all group-hover:bg-neon-cyan/20" />
        <div className="z-10">
          <p className="text-sm text-white/50 font-medium mb-1">
            AI-Generated Code
          </p>
          <div className="flex items-baseline space-x-2">
            <h3 className="text-4xl font-display font-bold text-white">
              36<span className="text-2xl text-white/50">%</span>
            </h3>
          </div>
          <p className="text-sm text-white/40 mt-2">89 files detected</p>
        </div>
        <div className="h-24 w-24 relative z-10">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={aiData}
                cx="50%"
                cy="50%"
                innerRadius={30}
                outerRadius={40}
                stroke="none"
                dataKey="value"
                startAngle={90}
                endAngle={-270}>
                
                {aiData.map((entry, index) =>
                <Cell key={`cell-${index}`} fill={entry.color} />
                )}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: '#0A0E1A',
                  borderColor: 'rgba(255,255,255,0.1)',
                  borderRadius: '8px'
                }}
                itemStyle={{
                  color: '#fff'
                }} />
              
            </PieChart>
          </ResponsiveContainer>
          <BrainCircuitIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-5 w-5 text-neon-cyan" />
        </div>
      </motion.div>

      {/* Risk Score Card */}
      <motion.div
        variants={cardVariants}
        className="glass-panel rounded-2xl p-6 relative flex items-center justify-between group border-neon-orange/20">
        
        <div className="absolute top-0 right-0 w-32 h-32 bg-neon-orange/10 rounded-full blur-3xl -mr-10 -mt-10 transition-all group-hover:bg-neon-orange/20" />
        <div className="z-10">
          <p className="text-sm text-white/50 font-medium mb-1">
            Overall Risk Score
          </p>
          <div className="flex items-baseline space-x-2">
            <h3 className="text-4xl font-display font-bold text-neon-orange text-glow-orange">
              7.5
            </h3>
            <span className="text-xl text-white/30">/10</span>
          </div>
          <p className="text-sm text-neon-orange mt-2 font-medium">
            High Risk Level
          </p>
        </div>
        <div className="h-24 w-24 relative z-10">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={riskData}
                cx="50%"
                cy="50%"
                innerRadius={30}
                outerRadius={40}
                stroke="none"
                dataKey="value"
                startAngle={180}
                endAngle={0}>
                
                {riskData.map((entry, index) =>
                <Cell key={`cell-${index}`} fill={entry.color} />
                )}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <ShieldAlertIcon className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 h-6 w-6 text-neon-orange" />
        </div>
      </motion.div>
    </div>);

}