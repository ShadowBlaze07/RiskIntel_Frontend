import React from 'react';
import { motion } from 'framer-motion';
import {
  BotIcon,
  GithubIcon,
  SparklesIcon,
  AlertOctagonIcon } from
'lucide-react';
export function RiskBreakdownPanel() {
  return (
    <div className="glass-panel rounded-2xl p-6 flex flex-col h-full relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-neon-pink/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />

      <div className="flex items-center justify-between mb-6 relative z-10">
        <h3 className="text-lg font-display font-semibold flex items-center">
          <BotIcon className="h-5 w-5 mr-2 text-neon-pink" />
          AI Risk Breakdown
        </h3>
        <span className="text-xs bg-white/10 px-2 py-1 rounded text-white/60">
          src/auth/login.ts
        </span>
      </div>

      <div className="flex-1 space-y-6 relative z-10">
        {/* Explanation Box */}
        <div className="bg-navy/50 border border-white/10 rounded-xl p-4 relative">
          <div className="absolute -left-[1px] top-4 bottom-4 w-[2px] bg-neon-orange rounded-r" />
          <div className="flex items-start space-x-3 mb-2">
            <AlertOctagonIcon className="h-4 w-4 text-neon-orange mt-0.5 flex-shrink-0" />
            <h4 className="text-sm font-semibold text-white">
              Vulnerability Detected
            </h4>
          </div>
          <p className="text-sm text-white/70 leading-relaxed pl-7">
            High-risk AI-generated authentication logic detected. Potential SQL
            injection vulnerability in line 47 where user input is concatenated
            directly into the query string. Recommend immediate manual security
            review.
          </p>
        </div>

        {/* Auto-Fix Box */}
        <div className="bg-navy/50 border border-neon-cyan/20 rounded-xl p-4 relative shadow-[0_0_15px_rgba(0,245,255,0.05)]">
          <div className="absolute -left-[1px] top-4 bottom-4 w-[2px] bg-neon-cyan rounded-r" />
          <div className="flex items-start space-x-3 mb-2">
            <SparklesIcon className="h-4 w-4 text-neon-cyan mt-0.5 flex-shrink-0" />
            <h4 className="text-sm font-semibold text-white">
              Auto-Fix Suggestion
            </h4>
          </div>
          <div className="pl-7 mt-2">
            <pre className="bg-navy p-3 rounded-lg text-xs font-mono text-white/80 overflow-x-auto border border-white/5">
              <code className="text-neon-pink line-through opacity-70 block mb-1">
                - const query = `SELECT * FROM users WHERE email = '${`email`}
                '`;
              </code>
              <code className="text-neon-cyan block">
                + const query = 'SELECT * FROM users WHERE email = $1';
                <br />+ const values = [email];
              </code>
            </pre>
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="mt-6 relative z-10">
        <button className="w-full flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-neon-purple/50 text-white py-3 px-4 rounded-xl transition-all group">
          <GithubIcon className="h-5 w-5 group-hover:text-neon-purple transition-colors" />
          <span className="font-medium text-sm group-hover:text-glow-purple">
            Send to GitHub Bot
          </span>
        </button>
      </div>
    </div>);

}