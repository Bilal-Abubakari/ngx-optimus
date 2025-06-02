import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "truncate",
  standalone: true,
})
export class TruncatePipe implements PipeTransform {
  /**
   * Truncates a string to a specified length and appends an ellipsis.
   * @param value The string to truncate.
   * @param limit The maximum number of characters to allow before truncating. Defaults to 30.
   * @param ellipsis The string to append after truncation. Defaults to '...'.
   * @returns The truncated string with ellipsis, or the original string if it's within the limit.
   */
  transform(
    value: string | null | undefined,
    limit: number = 20,
    ellipsis: string = "..."
  ): string {
    if (value === null || value === undefined || value.trim() === "") {
      return "";
    }

    if (limit <= 0) {
      return ellipsis;
    }

    if (value.length > limit) {
      return value.substring(0, limit) + ellipsis;
    }

    return value;
  }
}
