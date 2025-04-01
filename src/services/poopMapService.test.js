import { generatePoopData } from './poopMapService';
import test, {describe} from "node:test";
import expect from "expect";

describe('PoopMapService', () => {
    test('should generate an array of poop data', () => {
        const data = generatePoopData();
        expect(data).toHaveLength(10);
        expect(data[0]).toHaveProperty('id');
        expect(data[0]).toHaveProperty('location');
        expect(data[0]).toHaveProperty('date');
        expect(data[0]).toHaveProperty('user');
    });
});
