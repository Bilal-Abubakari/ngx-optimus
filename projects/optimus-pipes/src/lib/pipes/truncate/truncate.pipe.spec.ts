import { TruncatePipe } from "./truncate.pipe";

describe("TruncatePipe", () => {
  let pipe: TruncatePipe;

  beforeEach(() => {
    pipe = new TruncatePipe();
  });

  it("create an instance", () => {
    expect(pipe).toBeTruthy();
  });

  it("should not truncate if string length is less than limit", () => {
    expect(pipe.transform("short string", 15)).toBe("short string");
  });

  it("should not truncate if string length is equal to limit", () => {
    expect(pipe.transform("exact length", 12)).toBe("exact length");
  });

  it("should truncate string if length is greater than limit with default ellipsis", () => {
    const longString = "This is a very long string that needs truncation";
    // Default limit is 20 in your pipe implementation, default ellipsis is '...'
    expect(pipe.transform(longString)).toBe("This is a very long ...");
  });

  it("should truncate string with specified limit and default ellipsis", () => {
    const longString = "This is a very long string that needs truncation";
    expect(pipe.transform(longString, 10)).toBe("This is a ...");
  });

  it("should truncate string with specified limit and specified ellipsis", () => {
    const longString = "This is a very long string that needs truncation";
    expect(pipe.transform(longString, 10, "---")).toBe("This is a ---");
  });

  it("should use default limit (20) if only value is provided", () => {
    const testString =
      "This string is definitely longer than twenty characters";
    expect(pipe.transform(testString)).toBe("This string is defin...");
  });

  it("should use default ellipsis (...) if only value and limit are provided", () => {
    const testString = "Another example string for testing purposes";
    expect(pipe.transform(testString, 15)).toBe("Another example...");
  });

  it("should return empty string for null input", () => {
    expect(pipe.transform(null)).toBe("");
  });

  it("should return empty string for undefined input", () => {
    expect(pipe.transform(undefined)).toBe("");
  });

  it("should return empty string for empty string input", () => {
    expect(pipe.transform("")).toBe("");
  });

  it("should return empty string for string with only spaces", () => {
    expect(pipe.transform("   ")).toBe("");
  });

  it("should return only ellipsis if limit is 0", () => {
    expect(pipe.transform("test", 0)).toBe("...");
  });

  it("should return only custom ellipsis if limit is 0 and ellipsis is provided", () => {
    expect(pipe.transform("test", 0, "---")).toBe("---");
  });

  it("should return ellipsis if limit is negative", () => {
    expect(pipe.transform("test", -5)).toBe("...");
  });

  it("should handle limit greater than string length gracefully", () => {
    expect(pipe.transform("short", 100)).toBe("short");
  });

  it("should handle very long ellipsis", () => {
    expect(pipe.transform("Short text", 5, " (read more)")).toBe(
      "Short (read more)"
    );
  });
});
