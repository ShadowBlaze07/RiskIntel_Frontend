import React from 'react';
import { motion } from 'framer-motion';
import { FileCode2Icon, AlertTriangleIcon, ShieldCheckIcon } from 'lucide-react';
const mockFiles = [
{
  id: 1,
  name: 'src/auth/login.ts',
  aiProb: 92,
  security: 6,
  quality: 7,
  risk: 'High'
},
{
  id: 2,
  name: 'components/Dashboard.tsx',
  aiProb: 15,
  security: 9,
  quality: 8,
  risk: 'Low'
},
{
  id: 3,
  name: 'utils/crypto-helpers.js',
  aiProb: 88,
  security: 3,
  quality: 5,
  risk: 'Critical'
},
{
  id: 4,
  name: 'api/routes/users.ts',
  aiProb: 65,
  security: 7,
  quality: 6,
  risk: 'Medium'
},
{
  id: 5,
  name: 'styles/globals.css',
  aiProb: 5,
  security: 10,
  quality: 9,
  risk: 'Low'
}];

const getRiskBadge = (risk: string) => {
  switch (risk) {
    case 'Critical':
      return 'bg-neon-pink/20 text-neon-pink border-neon-pink/50 shadow-[0_0_10px_rgba(255,45,120,0.3)]';
    case 'High':
      return 'bg-neon-orange/20 text-neon-orange border-neon-orange/50 shadow-[0_0_10px_rgba(255,107,53,0.3)]';
    case 'Medium':
      return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50';
    case 'Low':
      return 'bg-neon-cyan/20 text-neon-cyan border-neon-cyan/50';
    default:
      return 'bg-white/10 text-white border-white/20';
  }
};
export function FileRiskTable() {
  return (
    <div className="glass-panel rounded-2xl overflow-hidden flex flex-col h-full">
      <div className="p-6 border-b border-white/10 flex justify-between items-center">
        <h3 className="text-lg font-display font-semibold">
          File Risk Analysis
        </h3>
        <button className="text-xs text-neon-cyan hover:text-white transition-colors">
          View All
        </button>
      </div>

      <div className="overflow-x-auto flex-1">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-white/[0.02] border-b border-white/10 text-xs uppercase tracking-wider text-white/50">
              <th className="p-4 font-medium">Filename</th>
              <th className="p-4 font-medium text-center">AI Prob.</th>
              <th className="p-4 font-medium text-center">Security</th>
              <th className="p-4 font-medium text-center">Quality</th>
              <th className="p-4 font-medium text-right">Risk Level</th>
            </tr>
          </thead>
          <tbody>
            {mockFiles.map((file, idx) =>
            <motion.tr
              key={file.id}
              initial={{
                opacity: 0,
                x: -20
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              transition={{
                delay: idx * 0.1
              }}
              className="border-b border-white/5 hover:bg-white/[0.04] transition-colors group cursor-pointer">
              
                <td className="p-4">
                  <div className="flex items-center space-x-3">
                    <FileCode2Icon className="h-4 w-4 text-white/40 group-hover:text-neon-cyan transition-colors" />
                    <span className="text-sm font-medium text-white/90">
                      {file.name}
                    </span>
                  </div>
                </td>
                <td className="p-4 text-center">
                  <span
                  className={`text-sm font-display ${file.aiProb > 70 ? 'text-neon-orange' : 'text-white/70'}`}>
                  
                    {file.aiProb}%
                  </span>
                </td>
                <td className="p-4 text-center">
                  <div className="flex items-center justify-center space-x-1">
                    {file.security < 7 ?
                  <AlertTriangleIcon className="h-3 w-3 text-neon-pink" /> :

                  <ShieldCheckIcon className="h-3 w-3 text-neon-cyan" />
                  }
                    <span className="text-sm text-white/70">
                      {file.security}/10
                    </span>
                  </div>
                </td>
                <td className="p-4 text-center">
                  <span className="text-sm text-white/70">
                    {file.quality}/10
                  </span>
                </td>
                <td className="p-4 text-right">
                  <span
                  className={`inline-block px-3 py-1 text-xs font-semibold rounded-full border ${getRiskBadge(file.risk)}`}>
                  
                    {file.risk}
                  </span>
                </td>
              </motion.tr>
            )}
          </tbody>
        </table>
      </div>
    </div>);

}