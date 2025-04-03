import { faker } from '@faker-js/faker';
import {PeeData} from "@/index";
import {prisma} from "@/lib/prisma";

export const generatePeeData = (): PeeData[] => {
    return Array.from({ length: 10 }).map(() => ({
        id: faker.string.uuid(),
        location: {
            latitude: faker.location.latitude(),
            longitude: faker.location.longitude(),
        },
        date: faker.date.recent(),
        user: faker.person.fullName(),
    }));
};

export const addPee = async (pee:
{
    location: {
        latitude: number;
        longitude: number;
    };
    user: string;
}
): Promise<PeeData> => {

    const peeData = {
        location: {
            latitude: pee.location.latitude,
            longitude: pee.location.longitude,
        },
        date: new Date(),
        user: pee.user,
    }

    const newPee = await prisma.pee.create({
        data: peeData,
    });

    console.log("New pee added:", newPee);

    return newPee
}

export const getPeeData = async (): Promise<PeeData[]> => {
    const allPees = await prisma.pee.findMany({
        orderBy: {
            date: 'desc',
        }
    })

    console.log("Fetched pee data:", allPees);

    return allPees.map((pee) => ({
        id: pee.id,
        location: {
            latitude: pee.location.latitude,
            longitude: pee.location.longitude,
        },
        date: pee.date,
        user: pee.user,
    }));
};