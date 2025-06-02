import { SentenceCasePipe } from "./sentence-case.pipe";

describe("SentenceCasePipe", () => {
  let pipe: SentenceCasePipe;

  beforeEach(() => {
    pipe = new SentenceCasePipe();
  });

  it("should transform camelCase to sentence case", () => {
    expect(pipe.transform("helloWorld")).toBe("Hello world");
  });

  it("should transform snake_case to sentence case", () => {
    expect(pipe.transform("snake_case_example")).toBe("Snake case example");
  });

  it("should transform kebab-case to sentence case", () => {
    expect(pipe.transform("kebab-case-example")).toBe("Kebab case example");
  });

  it("should handle empty and null values", () => {
    expect(pipe.transform(null)).toBe("");
    expect(pipe.transform(undefined)).toBe("");
    expect(pipe.transform("")).toBe("");
  });
});
