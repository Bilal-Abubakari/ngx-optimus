import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "codeCase",
})
export class CodeCasePipe implements PipeTransform {
  transform(
    value: string | null | undefined,
    caseType: "camel" | "pascal" | "snake" | "slug" = "camel"
  ): string {
    if (!value) return "";

    let normalized = value
      .trim()
      .replace(/([a-z])([A-Z])/g, "$1 $2") // Add space before capital letter in camelCase
      .replace(/([A-Z])([A-Z][a-z])/g, "$1 $2") // Handle acronyms
      .replace(/[-_]+/g, " ") // Convert hyphens and underscores to spaces
      .replace(/\s+/g, " ") // Normalize spaces
      .toLowerCase();

    if (caseType === "snake") {
      return normalized.replace(/\s+/g, "_");
    }

    if (caseType === "slug") {
      return normalized.replace(/\s+/g, "-");
    }

    const words = normalized.split(" ");

    const capitalizedWords = words.map((word, index) => {
      if (index === 0 && caseType === "camel") {
        return word;
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    });

    return capitalizedWords.join("");
  }
}
