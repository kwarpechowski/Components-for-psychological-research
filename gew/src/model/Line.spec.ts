import { Line } from "./Line";


describe("Line Model", () => {

    it("should return number", () => {
        let line = new Line(2);
        expect(line.getSize).toBe(2);
    });
});