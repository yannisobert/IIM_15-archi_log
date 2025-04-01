import { faker } from '@faker-js/faker';

interface PeeData {
    id: string;
    location: {
        latitude: number;
        longitude: number;
    };
    date: Date;
    user: string;
}

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
