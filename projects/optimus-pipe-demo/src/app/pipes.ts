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
  exampleUsageText?: string;
  properties?: PipeProperty[];
}

export const availablePipes: PipeInfo[] = [
  {
    name: "sentenceCase",
    displayName: "Sentence Case",
    description:
      "Converts a string into sentence case. Handles camelCase, PascalCase, snake_case, and kebab-case, inputs.",
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
    description:
      "Truncates a string to a specified maximum length and appends an ellipsis if truncation occurs.",
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
  {
    name: "timeAgo",
    displayName: "Time Ago (Relative time)",
    description:
      "Converts a date or timestamp into a human-readable relative time format (e.g., 'a few seconds ago', '5 minutes ago', '2 weeks ago', '1 year ago'). Handles various input formats including Date objects, timestamps, and date strings.",
    initialInput: new Date(Date.now() - 3600000).toISOString(),
    exampleUsageText: "someDate",
  },
  {
    name: "codeCase",
    displayName: "Code Case",
    description:
      "Converts a string into different code case formats: camelCase, PascalCase, snake_case and slug.",
    initialInput: "hello world example",
    properties: [
      {
        name: "caseType",
        displayName: "Case Type",
        type: "string",
        defaultValue: "camel",
        description:
          "The case format to convert to. Options are 'camel', 'pascal', 'snake', or 'slug'. Default is 'camel'.",
      },
    ],
  },
];
