import { FilterByPipe } from "./filter-by.pipe";

interface User {
  name: string;
  age: number;
}

describe("FilterByPipe", () => {
  let pipe: FilterByPipe;

  const users: User[] = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Jack", age: 40 },
    { name: "johnny", age: 22 },
  ];

  beforeEach(() => {
    pipe = new FilterByPipe();
  });

  it("filters by property and search term (case-insensitive)", () => {
    const result = pipe.transform(users, "name", "john");
    expect(result).toEqual([
      { name: "John", age: 30 },
      { name: "johnny", age: 22 },
    ]);
  });

  it("returns original array if search term is empty", () => {
    const result = pipe.transform(users, "name", "");
    expect(result).toBe(users);
  });

  it("returns original array if property is empty", () => {
    // @ts-expect-error testing missing property
    const result = pipe.transform(users, "", "john");
    expect(result).toBe(users);
  });

  it("returns original array if items is empty", () => {
    // @ts-expect-error testing missing items
    const result = pipe.transform(undefined, "name", "john");
    expect(result).toBeUndefined();
  });

  it("returns empty array if no match found", () => {
    const result = pipe.transform(users, "name", "zzz");
    expect(result).toEqual([]);
  });

  it("handles property values that are not strings", () => {
    const result = pipe.transform(users, "age", "2");
    expect(result).toEqual([
      { name: "Jane", age: 25 },
      { name: "johnny", age: 22 },
    ]);
  });

  it("ignores null or undefined property values", () => {
    const mixed = [...users, { name: null as any, age: 50 }];
    const result = pipe.transform(mixed, "name", "john");
    expect(result).toEqual([
      { name: "John", age: 30 },
      { name: "johnny", age: 22 },
    ]);
  });
});
