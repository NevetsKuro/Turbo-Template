function addition(num1, num2) {
  return num1 + num2
}
describe('testing factorial function', () => {
  beforeAll(() => {
    //do something
  })
  afterAll(() => {
    //do something
  })

  test("addition of 3 and 3 is 6", () => {
    expect(addition(3, 3)).toBe(6);
  });

  test("addition of 5 and 115 is 120", () => {
      expect(addition(5, 115)).toBe(120);
  });

  test("addition of 3 and 8 is not 5", () => {
      expect(addition(3, 8)).not.toBe(5);
  });
})
