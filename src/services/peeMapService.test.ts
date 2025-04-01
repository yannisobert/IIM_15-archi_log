import { generatePeeData } from './peeMapService';
import { PeeData } from '@/validation/peeMapSchema';
import {describe, expect, test} from "@jest/globals";

describe('PeeMapService', () => {
    test('should generate an array of pee data', () => {
        const data: PeeData[] = generatePeeData();
        expect(data).toHaveLength(10);
        expect(data[0]).toHaveProperty('id');
        expect(data[0]).toHaveProperty('location');
        expect(data[0]).toHaveProperty('date');
        expect(data[0]).toHaveProperty('user');

        // check if location is valid
        expect(data[0].location).toHaveProperty('latitude');
        expect(data[0].location).toHaveProperty('longitude');
    });
});