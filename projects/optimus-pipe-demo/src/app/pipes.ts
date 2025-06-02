interface PipeInfo {
  name: string;
  displayName: string;
  description: string;
  initialInput: string;
}

export const availablePipes: PipeInfo[] = [
  {
    name: "sentenceCase",
    displayName: "Sentence Case",
    description:
      "Converts a string into sentence case. Handles camelCase, PascalCase, snake_case, and kebab-case inputs.",
    initialInput: "hello_World-Example123",
  },
  {
    name: "truncate",
    displayName: "Truncate",
    description: "",
    initialInput: "This is a very long string",
  },
];
