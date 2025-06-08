import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "default",
  standalone: true,
})
export class DefaultPipe implements PipeTransform {
  /**
   * Provides a default value if the input is empty.
   *
   * @param value The input value to check
   * @param defaultValue The default value or function returning a default
   * @param options Configuration options
   * @returns The original value or the default value
   */
  transform<T, D>(
    value: T,
    defaultValue: D | ((value: T) => D),
    options: {
      checkEmptyStrings?: boolean;
      checkEmptyArrays?: boolean;
      checkEmptyObjects?: boolean;
      checkZero?: boolean;
    } = {
      checkEmptyStrings: true,
      checkEmptyArrays: false,
      checkEmptyObjects: false,
      checkZero: false,
    }
  ): T | D {
    if (this.isEmpty(value, options)) {
      return typeof defaultValue === "function"
        ? ((defaultValue as Function)(value) as D)
        : defaultValue;
    }
    return value;
  }

  private isEmpty<T>(value: T, options: any): boolean {
    // Always check null/undefined
    if (value === null || value === undefined) {
      return true;
    }

    // Check empty strings if enabled
    if (
      options.checkEmptyStrings &&
      typeof value === "string" &&
      value.trim() === ""
    ) {
      return true;
    }

    // Check NaN (always considered empty for numbers)
    if (typeof value === "number" && isNaN(value)) {
      return true;
    }

    // Check zero if enabled
    if (options.checkZero && value === 0) {
      return true;
    }

    // Check empty arrays if enabled
    if (
      options.checkEmptyArrays &&
      Array.isArray(value) &&
      value.length === 0
    ) {
      return true;
    }

    // Check empty objects if enabled
    return (
      options.checkEmptyObjects &&
      typeof value === "object" &&
      !Array.isArray(value) &&
      value !== null &&
      Object.keys(value).length === 0
    );
  }
}
