function factorialize(num) {
  if (num < 0) return -1;
  else if (num == 0) return 1;
  else {
    return num * factorialize(num - 1);
  }
}
describe('testing factorial function', () => {
  beforeAll(() => {
    //do something
  })
  afterAll(() => {
    //do something
  })

  test("factorial of 3", () => {
    expect(factorialize(3)).toBe(6);
  });

  test("factorial of 5", () => {
      expect(factorialize(5)).toBe(120);
  });

  test("factorial of 3 is not 5", () => {
      expect(factorialize(3)).not.toBe(5);
  });
})
