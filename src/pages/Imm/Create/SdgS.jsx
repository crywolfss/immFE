import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const SdgS = () => {
    const [sdgData, setSdgData] = useState([]);
    const [indicatorData, setIndicatorData] = useState([]);
    const [selectedSdgs, setSelectedSdgs] = useState([]); // Updated state for selected SDGs
    const [checkedValues, setCheckedValues] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const sdgResponse = await axios.get('http://127.0.0.1:8000/api/sdg');
                const indicatorResponse = await axios.get('http://127.0.0.1:8000/api/indicator');
                const sdgsWithIcons = sdgResponse.data.map(sdg => ({
                    ...sdg,
                    icon: `sdg${sdg.id}.svg`
                 }));
                setSdgData(sdgsWithIcons);
                setIndicatorData(indicatorResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const handleTargetCheckboxChange = (sdgId, targetId) => {
        setCheckedValues(prevState => ({
            ...prevState,
            [sdgId]: {
                ...prevState[sdgId],
                [targetId]: !prevState[sdgId]?.[targetId]
            }
        }));
    };

    const getTargetsBySdg = (sdgId) => {
        return indicatorData.filter(indicator => indicator.sdg_id === sdgId);
    };

    const handleSdgSelect = (sdgId) => {
        if (selectedSdgs.includes(sdgId)) {
            setSelectedSdgs(selectedSdgs.filter(id => id !== sdgId));
        } else {
            setSelectedSdgs([...selectedSdgs, sdgId]);
        }
    };

    return (
        <div className='mx-auto max-w-7xl lg:px-8 py-8'>
            <div className="text-center">
                <h3 className='font-bold text-xl mb-10' style={{ fontSize: '24px' }}>SDG & INDICATORS</h3>
            </div>
            <div className="mt-6">
                {sdgData.map(sdg => (
                    <div key={sdg.id} className="mb-10">
                        <div className="flex items-center">
                            <label className="flex items-center cursor-pointer">
                                <input 
                                    type="checkbox" 
                                    className="mr-2" 
                                    checked={selectedSdgs.includes(sdg.id)} 
                                    onChange={() => handleSdgSelect(sdg.id)}
                                />
                                <span className="flex items-center">
                                    <img src={`src/assets/icons/${sdg.icon}`} alt={sdg.name} style={{ width: '100px', height: '100px' }} className="mr-3" />
                                    <span style={{ color: '#0E0D13', fontSize: '18px' }}>{sdg.name}</span>
                                </span>
                            </label>
                        </div>
                        {selectedSdgs.includes(sdg.id) && (
                            <div className="ml-10 mt-4 pl-4 border-l-4 border-gray-300">
                                {getTargetsBySdg(sdg.id).map(target => (
                                    <label key={target.id} className="block flex items-center mb-2">
                                        <input 
                                            type="checkbox" 
                                            className="mr-2" 
                                            checked={checkedValues[sdg.id]?.[target.id] || false} 
                                            onChange={() => handleTargetCheckboxChange(sdg.id, target.id)} 
                                        /> 
                                        {target.name}
                                    </label>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SdgS;
