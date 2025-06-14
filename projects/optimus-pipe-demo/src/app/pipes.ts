interface PipeProperty
  extends Pick<PipeInfo, "name" | "displayName" | "description"> {
  type: "number" | "string" | "boolean";
  defaultValue?: any;
}

export interface PipeInfo {
  name: string;
  displayName: string;
  description: string;
  initialInput: string;
  exampleUsageText?: string;
  properties?: PipeProperty[];
}

export interface MockArrayInterface {
  name: string;
  age: number;
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
  {
    name: "initials",
    displayName: "Initials",
    description:
      'Extracts the initials from a name string (e.g., "John Doe" becomes "JD").',
    initialInput: "Bilal Abubakari",
    properties: [
      {
        name: "length",
        displayName: "Initials Length",
        type: "number",
        description:
          "The number of initials to extract. If not provided it will use the number of words in the input string.",
      },
    ],
  },
  {
    name: "stripHtml",
    displayName: "Strip HTML",
    description:
      "Removes HTML tags from a string, ensuring it's rendered as plain text.",
    initialInput: "<p>Hello <b>World</b></p>",
    exampleUsageText: "{{ '<p>Hello <b>World</b></p>' | stripHtml }}",
  },
  {
    name: "default",
    displayName: "Default Value",
    description:
      "Returns a default value if the input is empty, null, undefined, or NaN. Can also check for empty strings, arrays, and objects.",
    initialInput: "",
    properties: [
      {
        name: "defaultValue",
        displayName: "Default Value",
        type: "string",
        defaultValue: "/assets/default-avatar.png",
        description: "The value to return if the input is considered empty.",
      },
      {
        name: "checkEmptyStrings",
        displayName: "Check Empty Strings",
        type: "boolean",
        defaultValue: true,
        description: "If true, considers empty strings as empty values.",
      },
      {
        name: "checkEmptyArrays",
        displayName: "Check Empty Arrays",
        type: "boolean",
        defaultValue: false,
        description: "If true, considers empty arrays as empty values.",
      },
      {
        name: "checkEmptyObjects",
        displayName: "Check Empty Objects",
        type: "boolean",
        defaultValue: false,
        description: "If true, considers empty objects as empty values.",
      },
      {
        name: "checkZero",
        displayName: "Check Zero",
        type: "boolean",
        defaultValue: false,
        description: "If true, considers zero as an empty value.",
      },
    ],
  },
  {
    name: "filterBy",
    displayName: "Filter By",
    description:
      "Filters an array of objects based on a property value and a search term. Useful for client-side filtering of lists.",
    initialInput: JSON.stringify([
      { name: "John", age: 30 },
      { name: "Jane", age: 25 },
      { name: "Jack", age: 40 },
    ]),
    exampleUsageText: "users",
    properties: [
      {
        name: "property",
        displayName: "Property",
        type: "string",
        defaultValue: "name",
        description: "The object property to filter by.",
      },
      {
        name: "searchTerm",
        displayName: "Search Term",
        type: "string",
        defaultValue: "John",
        description: "The term to search for in the property value.",
      },
    ],
  },
];
