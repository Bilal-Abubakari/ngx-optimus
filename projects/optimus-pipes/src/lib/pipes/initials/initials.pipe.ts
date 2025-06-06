import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "initials",
})
export class InitialsPipe implements PipeTransform {
  transform(value: string | null | undefined, length?: number): string {
    if (!value) return "";

    const words = value.trim().split(/\s+/);
    const allInitials = words.map(word => word.charAt(0).toUpperCase());

    if (length !== undefined && length >= 0) {
      return allInitials.slice(0, length).join("");
    }

    return allInitials.join("");
  }
}
