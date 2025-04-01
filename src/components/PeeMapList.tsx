import { useEffect, useState } from 'react';
import { generatePeeData } from '@/services/peeMapService';
import { PeeData } from '@/validation/peeMapSchema';
import { Button } from "@/components/ui/button"


const PeeMapList: React.FC = () => {
    const [peeData, setPeeData] = useState<PeeData[]>([]);

    useEffect(() => {
        const data = generatePeeData();
        setPeeData(data);
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Pee Map</h1>
            <div className="space-y-4">
                {peeData.map((pee) => (
                    <div key={pee.id} className="bg-gray-100 p-4 rounded-lg shadow-lg">
                        <p>{pee.user} peeed in {pee.location.latitude} {pee.location.longitude} on {pee.date.toLocaleString()}</p>
                    </div>
                ))}
            </div>
            <Button className="mt-4">Add Pee</Button>
        </div>
    );
};

export default PeeMapList;
