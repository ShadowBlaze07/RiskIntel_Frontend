import React, { Children } from 'react';
import { motion } from 'framer-motion';
import {
  BellIcon,
  GitPullRequestIcon,
  AlertCircleIcon,
  CheckCircleIcon } from
'lucide-react';
const notifications = [
{
  id: 1,
  type: 'alert',
  message: 'AI-generated code detected in auth module',
  meta: 'Risk Score 8/10 — Auto-suggestion available',
  time: 'Just now',
  icon: AlertCircleIcon,
  color: 'text-neon-orange',
  bg: 'bg-neon-orange/10'
},
{
  id: 2,
  type: 'pr',
  message: 'GitHub Bot pushed fix to PR #142',
  meta: 'Resolved SQL injection vulnerability',
  time: '5m ago',
  icon: GitPullRequestIcon,
  color: 'text-neon-cyan',
  bg: 'bg-neon-cyan/10'
},
{
  id: 3,
  type: 'success',
  message: 'Scan completed for frontend-core',
  meta: '0 critical vulnerabilities found',
  time: '12m ago',
  icon: CheckCircleIcon,
  color: 'text-green-400',
  bg: 'bg-green-400/10'
},
{
  id: 4,
  type: 'alert',
  message: 'High AI probability in crypto-helpers.js',
  meta: 'Manual review required',
  time: '1h ago',
  icon: AlertCircleIcon,
  color: 'text-neon-pink',
  bg: 'bg-neon-pink/10'
}];

const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};
const itemVariants = {
  hidden: {
    opacity: 0,
    x: 20
  },
  visible: {
    opacity: 1,
    x: 0
  }
};
export function NotificationFeed() {
  return (
    <div className="glass-panel rounded-2xl p-6 h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-display font-semibold flex items-center">
          <BellIcon className="h-5 w-5 mr-2 text-white/70" />
          Live Feed
        </h3>
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-cyan"></span>
        </span>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-1 overflow-y-auto pr-2 space-y-4">
        
        {notifications.map((notif) =>
        <motion.div
          key={notif.id}
          variants={itemVariants}
          className="flex items-start space-x-3 p-3 rounded-xl hover:bg-white/[0.03] transition-colors border border-transparent hover:border-white/5">
          
            <div className={`p-2 rounded-lg ${notif.bg} flex-shrink-0 mt-0.5`}>
              <notif.icon className={`h-4 w-4 ${notif.color}`} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white/90 truncate">
                {notif.message}
              </p>
              <p className="text-xs text-white/50 truncate mt-0.5">
                {notif.meta}
              </p>
            </div>
            <span className="text-[10px] text-white/30 whitespace-nowrap flex-shrink-0">
              {notif.time}
            </span>
          </motion.div>
        )}
      </motion.div>
    </div>);

}