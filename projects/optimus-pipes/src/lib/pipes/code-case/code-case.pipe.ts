import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "codeCase",
})
export class CodeCasePipe implements PipeTransform {
  transform(
    value: string | null | undefined,
    caseType: "camel" | "pascal" | "snake" = "camel"
  ): string {
    if (!value) return "";

    // Normalize the string by handling various input formats
    let normalized = value
      .trim()
      .replace(/([a-z])([A-Z])/g, "$1 $2") // Add space before capital letter in camelCase
      .replace(/([A-Z])([A-Z][a-z])/g, "$1 $2") // Handle acronyms
      .replace(/[-_]+/g, " ") // Convert hyphens and underscores to spaces
      .replace(/\s+/g, " ") // Normalize spaces
      .toLowerCase();

    if (caseType === "snake") {
      // Convert to snake_case
      return normalized.replace(/\s+/g, "_");
    }

    // For both camelCase and PascalCase
    const words = normalized.split(" ");

    // Capitalize according to case type
    const capitalizedWords = words.map((word, index) => {
      if (index === 0 && caseType === "camel") {
        return word; // First word lowercase for camelCase
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    });

    // Join without spaces
    return capitalizedWords.join("");
  }
}
