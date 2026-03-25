import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { RiskTrendGraph } from '../RiskTrendGraph';
import { FileRiskTable } from '../FileRiskTable';
import { RiskBreakdownPanel } from '../RiskBreakdownPanel';
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
export function RiskAnalysisTab() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-12 gap-6">
      
      {/* Risk Trend Graph - Full Width */}
      <motion.div variants={itemVariants} className="col-span-12">
        <RiskTrendGraph />
      </motion.div>

      {/* File Table & Risk Panel */}
      <motion.div variants={itemVariants} className="col-span-12 lg:col-span-8">
        <FileRiskTable />
      </motion.div>
      <motion.div variants={itemVariants} className="col-span-12 lg:col-span-4">
        <RiskBreakdownPanel />
      </motion.div>
    </motion.div>);

}