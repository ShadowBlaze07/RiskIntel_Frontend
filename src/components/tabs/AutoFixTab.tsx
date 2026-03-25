import React, { useState, Children } from 'react';
import { motion } from 'framer-motion';
import {
  WrenchIcon,
  CheckCircle2Icon,
  AlertTriangleIcon,
  SparklesIcon,
  ArrowRightIcon } from
'lucide-react';
const autoFixSuggestions = [
{
  id: 1,
  file: 'src/auth/login.ts',
  issue: 'SQL Injection Vulnerability',
  severity: 'Critical',
  line: 47,
  description: 'User input concatenated directly into SQL query',
  fix: 'Use parameterized queries with prepared statements',
  status: 'ready',
  confidence: 95
},
{
  id: 2,
  file: 'utils/crypto-helpers.js',
  issue: 'Weak Cryptographic Algorithm',
  severity: 'High',
  line: 23,
  description: 'Using deprecated MD5 hashing algorithm',
  fix: 'Replace with bcrypt or Argon2 for password hashing',
  status: 'ready',
  confidence: 98
},
{
  id: 3,
  file: 'api/routes/users.ts',
  issue: 'Missing Input Validation',
  severity: 'Medium',
  line: 89,
  description: 'Email field not validated before database insertion',
  fix: 'Add email validation using regex or validator library',
  status: 'ready',
  confidence: 92
},
{
  id: 4,
  file: 'components/Dashboard.tsx',
  issue: 'Unused Import Statement',
  severity: 'Low',
  line: 3,
  description: 'Imported useState but never used in component',
  fix: 'Remove unused import to reduce bundle size',
  status: 'applied',
  confidence: 100
}];

const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0
  }
};
const getSeverityColor = (severity: string) => {
  switch (severity) {
    case 'Critical':
      return {
        bg: 'bg-neon-pink/10',
        text: 'text-neon-pink',
        border: 'border-neon-pink/30'
      };
    case 'High':
      return {
        bg: 'bg-neon-orange/10',
        text: 'text-neon-orange',
        border: 'border-neon-orange/30'
      };
    case 'Medium':
      return {
        bg: 'bg-yellow-500/10',
        text: 'text-yellow-400',
        border: 'border-yellow-500/30'
      };
    case 'Low':
      return {
        bg: 'bg-neon-cyan/10',
        text: 'text-neon-cyan',
        border: 'border-neon-cyan/30'
      };
    default:
      return {
        bg: 'bg-white/10',
        text: 'text-white',
        border: 'border-white/20'
      };
  }
};
export function AutoFixTab() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-12 gap-6">
      
      {/* Summary Cards */}
      <motion.div
        variants={itemVariants}
        className="col-span-12 grid grid-cols-1 md:grid-cols-3 gap-4">
        
        <div className="glass-panel rounded-xl p-4 border-neon-pink/20">
          <div className="flex items-center justify-between mb-2">
            <WrenchIcon className="h-5 w-5 text-neon-pink" />
            <span className="text-2xl font-display font-bold text-white">
              4
            </span>
          </div>
          <p className="text-sm text-white/60">Auto-Fix Suggestions</p>
          <p className="text-xs text-neon-pink mt-1">3 ready to apply</p>
        </div>

        <div className="glass-panel rounded-xl p-4 border-neon-cyan/20">
          <div className="flex items-center justify-between mb-2">
            <CheckCircle2Icon className="h-5 w-5 text-neon-cyan" />
            <span className="text-2xl font-display font-bold text-white">
              1
            </span>
          </div>
          <p className="text-sm text-white/60">Fixes Applied</p>
          <p className="text-xs text-neon-cyan mt-1">100% success rate</p>
        </div>

        <div className="glass-panel rounded-xl p-4 border-neon-orange/20">
          <div className="flex items-center justify-between mb-2">
            <SparklesIcon className="h-5 w-5 text-neon-orange" />
            <span className="text-2xl font-display font-bold text-white">
              96%
            </span>
          </div>
          <p className="text-sm text-white/60">Avg. Confidence</p>
          <p className="text-xs text-neon-orange mt-1">AI-powered fixes</p>
        </div>
      </motion.div>

      {/* Auto-Fix List */}
      <motion.div variants={itemVariants} className="col-span-12">
        <div className="glass-panel rounded-2xl p-6">
          <h3 className="text-lg font-display font-semibold mb-6 flex items-center">
            <WrenchIcon className="h-5 w-5 mr-2 text-neon-pink" />
            Available Auto-Fixes
          </h3>

          <div className="space-y-4">
            {autoFixSuggestions.map((suggestion, idx) => {
              const severityStyle = getSeverityColor(suggestion.severity);
              const isApplied = suggestion.status === 'applied';
              return (
                <motion.div
                  key={suggestion.id}
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
                  className={`bg-white/[0.02] border rounded-xl p-5 transition-all ${isApplied ? 'border-neon-cyan/30 bg-neon-cyan/5' : 'border-white/10 hover:border-white/20 hover:bg-white/[0.04]'}`}>
                  
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h4 className="font-semibold text-white">
                          {suggestion.issue}
                        </h4>
                        <span
                          className={`px-2 py-0.5 text-xs font-semibold rounded-full border ${severityStyle.bg} ${severityStyle.text} ${severityStyle.border}`}>
                          
                          {suggestion.severity}
                        </span>
                        {isApplied &&
                        <span className="flex items-center space-x-1 text-xs text-neon-cyan">
                            <CheckCircle2Icon className="h-3 w-3" />
                            <span>Applied</span>
                          </span>
                        }
                      </div>
                      <p className="text-sm text-white/60 mb-1">
                        {suggestion.file} : Line {suggestion.line}
                      </p>
                      <p className="text-sm text-white/80">
                        {suggestion.description}
                      </p>
                    </div>

                    <div className="flex items-center space-x-2 ml-4">
                      <div className="text-right">
                        <p className="text-xs text-white/40">Confidence</p>
                        <p className="text-sm font-display font-bold text-neon-cyan">
                          {suggestion.confidence}%
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Fix Preview */}
                  <div className="bg-navy/50 border border-white/10 rounded-lg p-3 mb-3">
                    <div className="flex items-start space-x-2 mb-2">
                      <SparklesIcon className="h-4 w-4 text-neon-cyan mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="text-xs font-semibold text-white mb-1">
                          Suggested Fix:
                        </p>
                        <p className="text-sm text-white/70">
                          {suggestion.fix}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  {!isApplied &&
                  <button className="w-full flex items-center justify-center space-x-2 bg-white/10 hover:bg-neon-pink/20 border border-white/20 hover:border-neon-pink/50 text-white py-2.5 px-4 rounded-lg transition-all group">
                      <WrenchIcon className="h-4 w-4 group-hover:text-neon-pink transition-colors" />
                      <span className="text-sm font-medium">
                        Apply Auto-Fix
                      </span>
                      <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  }
                </motion.div>);

            })}
          </div>
        </div>
      </motion.div>
    </motion.div>);

}