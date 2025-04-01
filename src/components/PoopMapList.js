import { useEffect, useState } from 'react';
import { generatePoopData } from '../services/poopMapService';
import { poopDataSchema } from '../validation/poopMapSchema';
import { z } from 'zod';
import { Button } from '@shadcn/ui';

const PoopMapList = () => {
    const [poopData, setPoopData] = useState([]);

    useEffect(() => {
        const data = generatePoopData();
        const validatedData = data.map(item => poopDataSchema.parse(item)); // Validation avec Zod
        setPoopData(validatedData);
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Poop Map</h1>
            <div className="space-y-4">
                {poopData.map(poop => (
                    <div key={poop.id} className="bg-gray-100 p-4 rounded-lg shadow-lg">
                        <p>{poop.user} pooped in {poop.location} on {poop.date.toLocaleString()}</p>
                    </div>
                ))}
            </div>
            <Button className="mt-4">Add Poop</Button>
        </div>
    );
};

export default PoopMapList;
