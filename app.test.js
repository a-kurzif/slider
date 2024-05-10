const getPercents = require('./app.js')

describe("", () =>

      it("90% from 100 is number (test case)", () => {
        const result = getPercents(90, 'привет');
        expect(typeof result).toBe('number')
      }),

      it("90% from string is NaN (corner case)", () => {
        const result = getPercents(90, 'привет');
        expect(result).toBe(NaN)
      }),

      it("20% from 100 is 20 (unit test)", () => {
        const result = getPercents(20, 100);
        expect(result).toBe(20)
      }),

      it("20% from 40 is 8 (unit test)", () => {
        const result = getPercents(20, 40);
        expect(result).toBe(8)
      }),

      it("150% from 40 is 60 (unit test)", () => {
        const result = getPercents(150, 40);
        expect(result).toBe(60)
      })
)