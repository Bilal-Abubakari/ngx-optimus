import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sentenceCase",
})
export class SentenceCasePipe implements PipeTransform {
  transform(value: string | null | undefined): string {
    if (!value) return "";

    const formatted = value
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .replace(/([A-Z])([A-Z][a-z])/g, "$1 $2")
      .replace(/[_-]+/g, " ")
      .toLowerCase();

    return formatted.charAt(0).toUpperCase() + formatted.slice(1);
  }
}
