import { CodeCasePipe } from "./code-case.pipe";

describe("CodeCasePipe", () => {
  let pipe: CodeCasePipe;

  beforeEach(() => {
    pipe = new CodeCasePipe();
  });

  it("create an instance", () => {
    expect(pipe).toBeTruthy();
  });

  // Default camelCase tests
  it("should convert to camelCase by default", () => {
    expect(pipe.transform("hello world")).toBe("helloWorld");
    expect(pipe.transform("Hello World")).toBe("helloWorld");
    expect(pipe.transform("test string here")).toBe("testStringHere");
  });

  // PascalCase tests
  it("should convert to PascalCase when specified", () => {
    expect(pipe.transform("hello world", "pascal")).toBe("HelloWorld");
    expect(pipe.transform("test string here", "pascal")).toBe("TestStringHere");
  });

  // snake_case tests
  it("should convert to snake_case when specified", () => {
    expect(pipe.transform("hello world", "snake")).toBe("hello_world");
    expect(pipe.transform("test string here", "snake")).toBe(
      "test_string_here"
    );
  });

  // Handling null/undefined values
  it("should handle null and undefined values", () => {
    expect(pipe.transform(null)).toBe("");
    expect(pipe.transform(undefined)).toBe("");
  });

  // Special cases
  it("should handle special formatting", () => {
    expect(pipe.transform("hello-world")).toBe("helloWorld");
    expect(pipe.transform("hello_world")).toBe("helloWorld");
    expect(pipe.transform("  hello  world  ")).toBe("helloWorld");
  });

  // Mixed cases
  it("should handle mixed cases correctly", () => {
    expect(pipe.transform("HelloWorld")).toBe("helloWorld");
    expect(pipe.transform("helloWorld")).toBe("helloWorld");
    expect(pipe.transform("camelCaseInput")).toBe("camelCaseInput");
    expect(pipe.transform("camelCaseInput", "pascal")).toBe("CamelCaseInput");
    expect(pipe.transform("camelCaseInput", "snake")).toBe("camel_case_input");
  });

  // Acronyms
  it("should handle acronyms correctly", () => {
    expect(pipe.transform("API request")).toBe("apiRequest");
    expect(pipe.transform("URL Builder")).toBe("urlBuilder");
    expect(pipe.transform("XML HTTP request", "pascal")).toBe("XmlHttpRequest");
    expect(pipe.transform("API endpoint", "snake")).toBe("api_endpoint");
  });

  it("should handle mixed cases for slug-case", () => {
    expect(pipe.transform("HelloWorld", "slug")).toBe("hello-world");
    expect(pipe.transform("helloWorld", "slug")).toBe("hello-world");
    expect(pipe.transform("camelCaseInput", "slug")).toBe("camel-case-input");
  });

  it("should handle special formatting for slug-case", () => {
    expect(pipe.transform("hello-world", "slug")).toBe("hello-world");
    expect(pipe.transform("hello_world", "slug")).toBe("hello-world");
    expect(pipe.transform("  hello  world  ", "slug")).toBe("hello-world");
  });

  it("should handle acronyms for slug-case", () => {
    expect(pipe.transform("API request", "slug")).toBe("api-request");
    expect(pipe.transform("URL Builder", "slug")).toBe("url-builder");
    expect(pipe.transform("XML HTTP request", "slug")).toBe("xml-http-request");
  });
});
