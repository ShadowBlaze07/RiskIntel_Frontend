import React from 'react';
import { motion } from 'framer-motion';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer } from
'recharts';
import { TrendingUpIcon } from 'lucide-react';
const mockData = [
{
  date: 'Mon',
  risk: 6.2
},
{
  date: 'Tue',
  risk: 6.8
},
{
  date: 'Wed',
  risk: 7.1
},
{
  date: 'Thu',
  risk: 7.5
},
{
  date: 'Fri',
  risk: 7.3
},
{
  date: 'Sat',
  risk: 7.5
},
{
  date: 'Sun',
  risk: 7.5
}];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-panel px-3 py-2 rounded-lg border-neon-orange/30">
        <p className="text-xs text-white/60">{payload[0].payload.date}</p>
        <p className="text-sm font-display font-semibold text-neon-orange">
          Risk: {payload[0].value}/10
        </p>
      </div>);

  }
  return null;
};
export function RiskTrendGraph() {
  return (
    <div className="glass-panel rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-display font-semibold flex items-center">
          <TrendingUpIcon className="h-5 w-5 mr-2 text-neon-orange" />
          Risk Trend (7 Days)
        </h3>
        <div className="flex items-center space-x-2">
          <span className="text-xs text-white/40">Current:</span>
          <span className="text-sm font-display font-bold text-neon-orange">
            7.5/10
          </span>
          <span className="text-xs bg-neon-orange/20 text-neon-orange px-2 py-0.5 rounded-full border border-neon-orange/30">
            +0.3
          </span>
        </div>
      </div>

      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={mockData}
            margin={{
              top: 10,
              right: 10,
              left: -20,
              bottom: 0
            }}>
            
            <defs>
              <linearGradient id="riskGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FF6B35" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#FF6B35" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(255,255,255,0.05)" />
            
            <XAxis
              dataKey="date"
              stroke="rgba(255,255,255,0.3)"
              style={{
                fontSize: '12px'
              }}
              tick={{
                fill: 'rgba(255,255,255,0.5)'
              }} />
            
            <YAxis
              stroke="rgba(255,255,255,0.3)"
              style={{
                fontSize: '12px'
              }}
              tick={{
                fill: 'rgba(255,255,255,0.5)'
              }}
              domain={[0, 10]} />
            
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="risk"
              stroke="#FF6B35"
              strokeWidth={2}
              fill="url(#riskGradient)"
              animationDuration={1000} />
            
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>);

}