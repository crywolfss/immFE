import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Matrics = () => {
    const [selectedIndicators, setSelectedIndicators] = useState([]);
    const [metricsData, setMetricsData] = useState([]);
    const [filteredMetrics, setFilteredMetrics] = useState([]);
    const [selectedMetrics, setSelectedMetrics] = useState([]);

    useEffect(() => {
        const storedSelectedIndicators = JSON.parse(localStorage.getItem('indicator')) || {};

        // Extract the indicator IDs where the value is true
        const indicatorIds = Object.entries(storedSelectedIndicators)
            .flatMap(([_, indicators]) => Object.entries(indicators))
            .filter(([_, value]) => value === true)
            .map(([key, _]) => Number(key));
        
        console.log('indicator id :', indicatorIds);
        setSelectedIndicators(indicatorIds);

        // Fetch data for each selected indicator
        const fetchData = async () => {
            try {
                const promises = indicatorIds.map(id => axios.get(`http://127.0.0.1:8000/api/get-metric-by-indicator/${id}`));
                const responses = await Promise.all(promises);
                const metrics = responses.flatMap(response => response.data);
                setMetricsData(metrics);
                console.log(metrics);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        
        if (indicatorIds.length > 0) {
            fetchData();
        }
    }, []);

    useEffect(() => {
        if (selectedIndicators.length > 0 && metricsData.length > 0) {
            setFilteredMetrics(metricsData);
        }
    }, [selectedIndicators, metricsData]);

    const handleMetricSelect = (metricId) => {
        setSelectedMetrics(prevSelected =>
            prevSelected.includes(metricId)
                ? prevSelected.filter(id => id !== metricId)
                : [...prevSelected, metricId]
        );
    };

    const handleSave = () => {
        // Logic to handle save action
        localStorage.setItem('metrics', JSON.stringify(selectedMetrics));
        console.log('Selected metrics:', selectedMetrics);
    };

    return (
        <div className='mx-auto max-w-7xl lg:px-8 py-8'>
            <div className="text-center">
                <h3 className='font-bold text-xl mb-10' style={{ fontSize: '24px' }}>Metrics Name</h3>
            </div>
            <div className="mt-6">
                {filteredMetrics.map((metric, index) => (
                    <div key={metric.id} className="mb-6">
                        <label className="flex items-start cursor-pointer">
                            <input
                                type="checkbox"
                                className="mr-3 mt-1"
                                checked={selectedMetrics.includes(metric.id)}
                                onChange={() => handleMetricSelect(metric.id)}
                            />
                            <span>
                                <span className="font-bold text-lg">{index + 1}. {metric.name}</span>
                                <p className="text-gray-600">{metric.description}</p>
                            </span>
                        </label>
                    </div>
                ))}
            </div>
            <Link to="/form-create">
            <div className="text-center mt-10">
                <button
                    onClick={handleSave}
                    className="custom-button">
                    Simpan
                </button>
            </div>
            </Link>
            <style jsx>{`
                .custom-button {
                    background-color: #2D6AE0;
                    color: #fff;
                    font-size: 16px;
                    font-weight: bold;
                    padding: 12px 24px;
                    border: none;
                    border-radius: 50px;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                }

                .custom-button:hover {
                    background-color: #1A56D0;
                }
            `}</style>
        </div>
    );
};

export default Matrics;
