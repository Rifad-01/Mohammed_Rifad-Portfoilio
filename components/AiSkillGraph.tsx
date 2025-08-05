import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useTheme } from '../contexts/ThemeContext';

const graphData = [
  { stage: 'Foundations', 'AI Automation': 20, 'Chatbots': 15, 'AI Integration': 10 },
  { stage: 'Beginner', 'AI Automation': 45, 'Chatbots': 40, 'AI Integration': 30 },
  { stage: 'Intermediate', 'AI Automation': 70, 'Chatbots': 65 }, // AI Integration is at Beginner level and being studied
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/80 dark:bg-black/80 backdrop-blur-sm p-3 border border-slate-300 dark:border-slate-700 rounded-lg shadow-lg">
        <p className="font-bold text-slate-800 dark:text-slate-100">{label}</p>
        {payload.map((pld: any) => (
          <p key={pld.dataKey} style={{ color: pld.color }} className="text-sm">
            {`${pld.name}: ${pld.value}%`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const AiSkillGraph: React.FC = () => {
    const { theme } = useTheme();
    const tickColor = theme === 'dark' ? '#94a3b8' : '#475569'; // slate-400 dark, slate-600 light
    const gridColor = theme === 'dark' ? '#1e293b' : '#e2e8f0'; // slate-800 dark, slate-200 light

    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart 
              data={graphData} 
              margin={{ top: 5, right: 20, left: -10, bottom: 5 }}
            >
                <CartesianGrid stroke={gridColor} strokeDasharray="3 3" />
                <XAxis dataKey="stage" stroke={tickColor} fontSize={12} />
                <YAxis stroke={tickColor} fontSize={12} />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{fontSize: "14px"}} />
                <Line type="monotone" dataKey="AI Automation" stroke="#3b82f6" strokeWidth={2} activeDot={{ r: 6 }} />
                <Line type="monotone" dataKey="Chatbots" stroke="#22c55e" strokeWidth={2} activeDot={{ r: 6 }} />
                <Line 
                  type="monotone" 
                  dataKey="AI Integration" 
                  name="AI Integration (Studying)" 
                  stroke="#f97316" 
                  strokeWidth={2} 
                  strokeDasharray="5 5" 
                  activeDot={{ r: 6 }} 
                />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default AiSkillGraph;
