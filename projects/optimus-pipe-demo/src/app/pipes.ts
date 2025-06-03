interface PipeProperty
  extends Pick<PipeInfo, "name" | "displayName" | "description"> {
  type: "number" | "string" | "boolean";
  defaultValue: any;
}

export interface PipeInfo {
  name: string;
  displayName: string;
  description: string;
  initialInput: string;
  properties?: PipeProperty[];
}

export const availablePipes: PipeInfo[] = [
  {
    name: "sentenceCase",
    displayName: "Sentence Case",
    description:
      "Converts a string into sentence case. Handles camelCase, PascalCase, snake_case, and kebab-case inputs.",
    initialInput: "hello_World-Example123",
    properties: [
      {
        name: "capitalizeEveryWord",
        displayName: "Capitalize Every Word",
        type: "boolean",
        defaultValue: false,
        description:
          "If true, capitalizes the first letter of every word in the string.",
      },
      {
        name: "allLowercase",
        displayName: "All Lowercase",
        type: "boolean",
        defaultValue: false,
        description:
          "If true, converts the entire string to lowercase before formatting.",
      },
      {
        name: "allUppercase",
        displayName: "All Uppercase",
        type: "boolean",
        defaultValue: false,
        description:
          "If true, converts the entire string to uppercase before formatting.",
      },
    ],
  },
  {
    name: "truncate",
    displayName: "Truncate",
    description: "",
    initialInput: "This is a very long string",
    properties: [
      {
        name: "limit",
        displayName: "Max Length",
        type: "number",
        defaultValue: 20,
        description: "The maximum number of characters to keep. Default is 20.",
      },
      {
        name: "ellipsis",
        displayName: "Ellipsis",
        type: "string",
        defaultValue: "...",
        description:
          "The string to append if truncation occurs (default is '...').",
      },
    ],
  },
];
