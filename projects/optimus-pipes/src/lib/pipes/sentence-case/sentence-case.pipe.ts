import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sentenceCase",
})
export class SentenceCasePipe implements PipeTransform {
  transform(
    value: string | null | undefined,
    capitalizeEveryWord: boolean = false,
    allLowercase: boolean = false,
    allUppercase: boolean = false
  ): string {
    if (!value) return "";

    let formatted = value
      .replace(/([a-z])([A-Z])/g, "$1 $2") // Add space before capital letter in camelCase
      .replace(/([A-Z])([A-Z][a-z])/g, "$1 $2") // Add space between consecutive capitals followed by lowercase (e.g. USA Today -> USA Today)
      .replace(/[_-]+/g, " "); // Replace underscores and hyphens with spaces

    if (allLowercase) {
      return formatted.toLowerCase();
    }

    if (allUppercase) {
      return formatted.toUpperCase();
    }

    formatted = formatted.toLowerCase();

    if (capitalizeEveryWord) {
      return formatted
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    }

    // Default: Sentence case
    return formatted.charAt(0).toUpperCase() + formatted.slice(1);
  }
}
