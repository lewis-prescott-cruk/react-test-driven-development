import { fizzbuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {

  // TODO: Add more test cases
  it("should return the numbers passed in that are not divisible by 3 or 5", () => {
    expect(fizzbuzz(2)).toBe(2);
  });

  // TODO: Add more test cases
  it("should return 'fizz' if the the number passed in is divisible by 3", () => {
    expect(fizzbuzz(3)).toBe("fizz");
  });

  // TODO: Add more test cases
  it("should return 'buzz' if the the number passed in is divisible by 5", () => {
    expect(fizzbuzz(5)).toBe("buzz");
  });

  // TODO: Add test cases
  it.skip("should return 'fizzbuzz' if the the number passed in is divisible by 3 and 5", () => {
  });
});
