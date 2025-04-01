import faker from 'faker';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getPoopData = async () => {
    return await prisma.poop.findMany();
};

export const createPoopData = async (poopData) => {
    return await prisma.poop.create({ data: poopData });
};

export const generatePoopData = () => {
    return Array.from({ length: 10 }).map(() => ({
        id: faker.datatype.uuid(),
        location: `${faker.address.city()}, ${faker.address.state()}`,
        date: faker.date.recent(),
        user: faker.name.findName(),
    }));
};
