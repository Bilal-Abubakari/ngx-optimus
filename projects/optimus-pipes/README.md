# NgxOptimus

`ngx-optimus` is an Angular library dedicated to providing a collection of useful custom pipes to transform data in your templates. This library aims to simplify common data formatting tasks and keep your component logic cleaner.

## Demo

You can see the pipes in action here: [OptimusPipes Demo](https://bilal-abubakari.github.io/ngx-optimus/)


## Purpose

The main goal of `ngx-optimus` is to offer a set of reusable and well-tested pipes that can be easily integrated into any Angular project, helping developers to format data directly in their HTML templates with ease.

## Installation

To get started with `ngx-optimus`, install it from npm:

```bash
npm install ngx-optimus
```

## Usage
You can use `optimus-pipes` pipes in both standalone components and components that are part of an NgModule.

**1. For Standalone Components:** If you are using standalone components, you can import the specific pipes you need directly into your component's `imports` array. Assuming `SentenceCasePipe` is the pipe for the transformation and is exported from `optimus-pipes`: `sentenceCase`
Alternatively, you can import `NgxOptimusPipesModule` which is a bundle of all pipes provided by optimus pipes.


    // src/app/your-standalone-component/your-standalone-component.component.ts
    import { Component } from '@angular/core';
    import { SentenceCasePipe } from 'optimus-pipes'; // Ensure this path and pipe name are correct

    @Component({
    selector: 'app-your-standalone-component',
    standalone: true,
    imports: [
    SentenceCasePipe // Add the individual pipe here
    // Other imports like CommonModule if needed
    ],
    template: `
        <!-- Assuming 'myString' is a property in your component -->
        <!-- e.g., myString = "helloWorldExample"; or myString = "hello_world_example"; -->
        <p>{{ myString | sentenceCase }}</p>
        <!-- Output: Hello world example -->
      `
    })
    export class YourStandaloneComponent {
    myString: string = "helloWorldExample";
    }

    // src/app/your-standalone-component/your-standalone-component.component.ts
    import { Component } from '@angular/core';
    **import { NgxOptimusPipesModule } from 'optimus-pipes'; // Ensure this path

    @Component({
    selector: 'app-your-standalone-component',
    standalone: true,
    imports: [
    NgxOptimusPipesModule // Add the pipes module here
    // Other imports like CommonModule if needed
    ],
    template: `
        <!-- Assuming 'myString' is a property in your component -->
        <!-- e.g., myString = "helloWorldExample"; or myString = "hello_world_example"; -->
        <p>{{ myString | sentenceCase }}</p>
        <!-- Output: Hello world example -->
      `
    })
    export class YourStandaloneComponent {
    myString: string = "helloWorldExample";
    }**


**2. For Components within NgModules:** If your component is part of an Angular module (e.g., `AppModule` or a feature module), you can import any pipe in the module. (Assuming the module name follows the convention `[LibraryName]Module`).
You could also import the `NgxOptimusPipesModule` inside the `AppModule` or a feature module to get access to all pipes.


    // src/app/app.module.ts (or your feature module)
    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { SentenceCasePipe } from 'optimus-pipes'; // Import pipe from optimus-pipes
    
    import { AppComponent } from './app.component';
    
    @NgModule({
    declarations: [
    AppComponent
    // Your other components declared in this module
    ],
    imports: [
    BrowserModule,
    SentenceCasePipe // Add Any pipe here
    ],
    providers: [],
    bootstrap: [AppComponent]
    })
    export class AppModule { }


**Using the pipes in your templates:**
Once imported (either individually for standalone components or via the module for NgModules-based components), you can use the pipes in your component templates.
For example, to use the pipe: `sentenceCase`

    <!-- Assuming 'myString' is a property in your component -->
    <!-- e.g., myString = "helloWorldExample"; or myString = "hello_world_example"; -->
    <p>{{ myString | sentenceCase }}</p>
    <!-- Output: Hello world example -->


## Available Pipes
Here's a list of the pipes currently available in `optimus-pipes`:

| Pipe           | Description                                                                                                                                                                                                                            | Usage Example                                             |
|----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------|
| `sentenceCase` | Converts a string into sentence case. Handles camelCase, PascalCase, snake_case, and kebab-case inputs.                                                                                                                                | {{ 'hello_world' \|  sentenceCase }}`                     |
| `truncate`     | Shortens a string to a specified length and appends an ellipsis if truncated. Accepts a character limit (default: 30) and an optional ellipsis string (default: '...').                                                                | `{{ 'This is a very long string' \| truncate:20:'...' }}` |
| `timeAgo`      | Converts a date or timestamp into a human-readable relative time format (e.g., 'a few seconds ago', '5 minutes ago', '2 weeks ago', '1 year ago'). Handles various input formats including Date objects, timestamps, and date strings. | `{{ '2023-10-01T12:00:00Z' \| timeAgo }}`                 |
| `codeCase`     | Converts a string into different code case formats: camelCase, PascalCase, snake_case, or slug.                                                                                                                                        | `{{ 'hello world' \| codeCase }}`                         |
| `initials`     | Generates initials from a given string, useful for creating avatar initials. Accepts a string and returns the first letters of each word.                                                                                              | `{{ 'John Doe' \| initials }}`                            |
| `stripHtml`    | Removes HTML tags from a string, ensuring it's rendered as plain text.                                                                                                                                                                 | `{{ '<p>Hello <b>World</b></p>' \| stripHtml }}`          |

