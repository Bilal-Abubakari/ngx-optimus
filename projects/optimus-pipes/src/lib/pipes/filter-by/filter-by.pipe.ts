import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filterBy",
  pure: false,
})
export class FilterByPipe implements PipeTransform {
  transform<T>(items: T[], property: keyof T, searchTerm: string): T[] {
    if (!items || !property || !searchTerm) {
      return items;
    }
    const lowerSearch = searchTerm.toLowerCase();
    return items.filter(item => {
      const value = item[property];
      return (
        value != null && value.toString().toLowerCase().includes(lowerSearch)
      );
    });
  }
}
