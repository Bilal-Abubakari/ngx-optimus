import { InitialsPipe } from "./initials.pipe";

describe("InitialsPipe", () => {
  let pipe: InitialsPipe;

  beforeEach(() => {
    pipe = new InitialsPipe();
  });

  it("should create an instance", () => {
    expect(pipe).toBeTruthy();
  });

  it("should extract initials from a name with multiple words", () => {
    expect(pipe.transform("Bilal Abubakari")).toBe("BA");
    expect(pipe.transform("John Doe")).toBe("JD");
    expect(pipe.transform("Bilal Maltiti Abubakari")).toBe("BMA");
  });

  it("should limit initials to specified length", () => {
    expect(pipe.transform("Bilal Maltiti Abubakari", 2)).toBe("BM");
    expect(pipe.transform("Bilal Maltiti Abubakari", 1)).toBe("B");
    expect(pipe.transform("Bilal Maltiti Abubakari", 0)).toBe("");
  });

  it("should handle length greater than number of words", () => {
    expect(pipe.transform("Bilal Abubakari", 5)).toBe("BA");
  });

  // Edge cases
  it("should handle empty strings", () => {
    expect(pipe.transform("")).toBe("");
  });

  it("should handle null and undefined values", () => {
    expect(pipe.transform(null)).toBe("");
    expect(pipe.transform(undefined)).toBe("");
  });

  it("should handle single word", () => {
    expect(pipe.transform("Bilal")).toBe("B");
  });

  it("should handle strings with extra spaces", () => {
    expect(pipe.transform("  Bilal   Abubakari  ")).toBe("BA");
  });
});
