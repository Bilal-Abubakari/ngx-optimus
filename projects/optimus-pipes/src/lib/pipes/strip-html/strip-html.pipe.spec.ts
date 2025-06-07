import { StripHtmlPipe } from "./strip-html.pipe";

describe("StripHtmlPipe", () => {
  let pipe: StripHtmlPipe;

  beforeEach(() => {
    pipe = new StripHtmlPipe();
  });

  it("should create an instance", () => {
    expect(pipe).toBeTruthy();
  });

  it("should remove basic HTML tags", () => {
    expect(pipe.transform("<p>Hello World</p>")).toBe("Hello World");
    expect(pipe.transform("<div>Test</div>")).toBe("Test");
  });

  it("should handle nested HTML tags", () => {
    expect(pipe.transform("<div><p>Hello <b>World</b></p></div>")).toBe(
      "Hello World"
    );
    expect(pipe.transform("<ul><li>Item 1</li><li>Item 2</li></ul>")).toBe(
      "Item 1Item 2"
    );
  });

  it("should handle HTML attributes", () => {
    expect(
      pipe.transform('<div class="container" id="main">Content</div>')
    ).toBe("Content");
    expect(pipe.transform('<a href="https://example.com">Link</a>')).toBe(
      "Link"
    );
  });

  it("should handle self-closing tags", () => {
    expect(pipe.transform("Text with <br> line break")).toBe(
      "Text with  line break"
    );
    expect(pipe.transform('Image: <img src="test.jpg" alt="Test"/>')).toBe(
      "Image: "
    );
  });

  it("should return empty string for null or undefined input", () => {
    expect(pipe.transform(null as unknown as string)).toBe("");
    expect(pipe.transform(undefined as unknown as string)).toBe("");
  });

  it("should return the same string if no HTML tags are present", () => {
    expect(pipe.transform("Plain text without tags")).toBe(
      "Plain text without tags"
    );
  });

  it("should handle empty string", () => {
    expect(pipe.transform("")).toBe("");
  });
});
