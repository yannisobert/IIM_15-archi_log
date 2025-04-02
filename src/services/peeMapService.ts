import { faker } from '@faker-js/faker';
import {PeeData} from "@/index";

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
