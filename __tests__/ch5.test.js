const { union_set } = require('../src/ch5_exercise');


describe('test for union_set', () => {
    const testData = [
        { a: new Set([1, 2, 3]), b: new Set([1, 2, 3, 4, 5]), r: [1, 2, 3, 4, 5] },
        { a: new Set([1, 2, 3]), b: new Set([4, 5]), r: [1, 2, 3, 4, 5] }
    ];

    it.each(testData)('測試結果為聯集Set', ({ a, b, r }) => {
        const test_a = a,
            test_b = b,
            expectedResults = r;

        const result = union_set(test_a, test_b);
        expect(result.size).toBe(expectedResults.length);
        expectedResults.forEach(function (expectedResult) {
            expect(result.has(expectedResult)).toBe(true);
        });
    });
    it('測試當傳入null時,不能引發exception', () => {
        const test_a = null,
            test_b = new Set([1, 2, 3, 4, 5]);
        expect(function () {
            union_set(test_a, test_b);
        }).not.toThrow();
    });
    it('測試當傳入null時,視為空Set', () => {
        const test_a = null,
            test_b = new Set([1, 2, 3, 4, 5]),
            expectedResults = [1, 2, 3, 4, 5];
        const result = union_set(test_a, test_b);
        expect(result.size).toBe(expectedResults.length);
        expectedResults.forEach(function (expectedResult) {
            expect(result.has(expectedResult)).toBe(true);
        });
    });
    it('當b傳入null時，不可以產生exception', () => {
        const test_a = new Set([1, 2, 3]),
            test_b = null;

        const tester = () => union_set(test_a, test_b);
        expect(tester).not.toThrow();
    });
});