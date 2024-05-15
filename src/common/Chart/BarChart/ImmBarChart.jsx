import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Jan', Outcome: 4000, Income: 2400, amt: 2400 },
    { name: 'Feb', Outcome: 3000, Income: 1398, amt: 2210 },
    { name: 'Mar', Outcome: 2000, Income: 9800, amt: 2290 },
    { name: 'Apr', Outcome: 2780, Income: 3908, amt: 2000 },
    { name: 'May', Outcome: 1890, Income: 4800, amt: 2181 },
    { name: 'Jun', Outcome: 2390, Income: 5800, amt: 2500 },
    { name: 'Jul', Outcome: 5490, Income: 6300, amt: 2100 },
    { name: 'Aug', Outcome: 2490, Income: 7300, amt: 2100 },
    { name: 'Sep', Outcome: 7490, Income: 1300, amt: 2100 },
];

const CustomLegend = ({ payload }) => {
    return (
        <ul className="flex justify-center">
            {payload.map((entry, index) => (
                <li key={`item-${index}`} className="mx-4 flex items-center">
                    <svg width="14" height="14" className="mr-2">
                        <circle cx="7" cy="7" r="7" fill={entry.color} />
                    </svg>
                    {entry.value}
                </li>
            ))}
        </ul>
    );
};

export const ImmBarChart = () => {
    return (
        <div className="p-4">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold">Analytics</h3>
                <select className="border rounded px-2 py-1">
                    <option value="option1">2022</option>
                    <option value="option2">2023</option>
                    <option value="option3">2024</option>
                </select>
            </div>
            <div className="mb-4">
                <CustomLegend payload={[
                    { value: 'Income', color: '#6359E9' },
                    { value: 'Outcome', color: '#64CFF6' },
                ]} />
            </div>
            <div className="overflow-x-auto">
                <div style={{ width: '1200px' }}>
                    <ResponsiveContainer width="100%" height={400}>
                        <BarChart
                            width={1000}
                            height={300}
                            data={data}
                            margin={{
                                top: 20,
                                right: 90,
                                left: 20,
                                bottom: 5,
                            }}

                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="Income" fill="#6359E9" radius={[50, 50, 0, 0]} barSize={25} />
                            <Bar dataKey="Outcome" fill="#64CFF6" radius={[50, 50, 0, 0]} barSize={25}/>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};
