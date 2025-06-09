import { DefaultPipe } from "./default.pipe";

describe("DefaultPipe", () => {
  let pipe: DefaultPipe;

  beforeEach(() => {
    pipe = new DefaultPipe();
  });

  describe("basic functionality", () => {
    it("should create an instance", () => {
      expect(pipe).toBeTruthy();
    });

    it("should return the input value when not empty", () => {
      expect(pipe.transform("test", "default")).toBe("test");
      expect(pipe.transform(42, 0)).toBe(42);
      expect(pipe.transform([1, 2, 3], [])).toEqual([1, 2, 3]);
      expect(pipe.transform({ key: "value" }, {})).toEqual({ key: "value" });
    });

    it("should return the default value for null/undefined", () => {
      expect(pipe.transform(null, "default")).toBe("default");
      expect(pipe.transform(undefined, "default")).toBe("default");
    });
  });

  describe("string handling", () => {
    it("should handle empty strings based on checkEmptyStrings option", () => {
      // Default behavior (checkEmptyStrings = true)
      expect(pipe.transform("", "default")).toBe("default");
      expect(pipe.transform("  ", "default")).toBe("default");

      // Explicitly disabled
      expect(pipe.transform("", "default", { checkEmptyStrings: false })).toBe(
        ""
      );
      expect(
        pipe.transform("  ", "default", { checkEmptyStrings: false })
      ).toBe("  ");
    });
  });

  describe("number handling", () => {
    it("should always treat NaN as empty", () => {
      expect(pipe.transform(NaN, 42)).toBe(42);
    });

    it("should handle zero based on checkZero option", () => {
      // Default behavior (checkZero = false)
      expect(pipe.transform(0, 42)).toBe(0);

      // Explicitly enabled
      expect(pipe.transform(0, 42, { checkZero: true })).toBe(42);
    });
  });

  describe("array handling", () => {
    it("should handle empty arrays based on checkEmptyArrays option", () => {
      // Default behavior (checkEmptyArrays = false)
      expect(pipe.transform([], [1, 2, 3])).toEqual([]);

      // Explicitly enabled
      expect(pipe.transform([], [1, 2, 3], { checkEmptyArrays: true })).toEqual(
        [1, 2, 3]
      );
    });
  });

  describe("object handling", () => {
    it("should handle empty objects based on checkEmptyObjects option", () => {
      // Default behavior (checkEmptyObjects = false)
      expect(pipe.transform({}, { key: "value" })).toEqual({});

      // Explicitly enabled
      expect(
        pipe.transform({}, { key: "value" }, { checkEmptyObjects: true })
      ).toEqual({ key: "value" });
    });
  });

  describe("function default values", () => {
    it("should call the function to get default value", () => {
      const defaultFn = jasmine
        .createSpy("defaultFn")
        .and.returnValue("computed default");
      expect(pipe.transform(null, defaultFn)).toBe("computed default");
      expect(defaultFn).toHaveBeenCalledWith(null);
    });

    it("should pass the original value to the default function", () => {
      const defaultFn = (val: any) => `default for ${val}`;
      expect(pipe.transform("", defaultFn)).toBe("default for ");
    });
  });

  describe("multiple options", () => {
    it("should handle combined options correctly", () => {
      const options = {
        checkEmptyStrings: true,
        checkEmptyArrays: true,
        checkEmptyObjects: true,
        checkZero: true,
      };

      expect(pipe.transform("", "default", options)).toBe("default");
      expect(pipe.transform([], [1, 2], options)).toEqual([1, 2]);
      expect(pipe.transform({}, { default: true }, options)).toEqual({
        default: true,
      });
      expect(pipe.transform(0, 42, options)).toBe(42);
    });
  });
});
