# NgxOptimus

`optimus-pipes` is an Angular library dedicated to providing a collection of useful custom pipes to transform data in your templates. This library aims to simplify common data formatting tasks and keep your component logic cleaner.

## Purpose

The main goal of `optimus-pipes` is to offer a set of reusable and well-tested pipes that can be easily integrated into any Angular project, helping developers to format data directly in their HTML templates with ease.

## Installation

To get started with `optimus-pipes`, install it from npm:

```bash
npm install optimus-pipes
```

## Usage
1. **Import `NgxOptimusPipesModule`**: You need to import the `NgxOptimusPipesModule` into the Angular module where you want to use the pipes (e.g., your `AppModule` or a shared module).


    // src/app/app.module.ts (or your feature module)
    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { NgxOptimusPipesModule } from 'ngx-optimus'; // Ensure this path is correct based on your library's published name

    import { AppComponent } from './app.component';

    @NgModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule,
        NgxOptimusPipesModule // Add NgxOptimusPipesModule here
      ],
      providers: [],
      bootstrap: [AppComponent]
    })
    export class AppModule { }

2. **Use the pipes in your templates**: Once imported, you can use the pipes in your component templates.
   For example, to use the pipe: `sentenceCase`


    <!-- Assuming 'myString' is a property in your component -->
    <!-- e.g., myString = "helloWorldExample"; or myString = "hello_world_example"; -->
    <p>{{ myString | sentenceCase }}</p>
    <!-- Output: Hello world example -->


## Available Pipes
Here's a list of the pipes currently available in `ngx-optimus`:

| Pipe           | Description                                                                                             | Usage Example                         |
|----------------|---------------------------------------------------------------------------------------------------------|---------------------------------------|
| `sentenceCase` | Converts a string into sentence case. Handles camelCase, PascalCase, snake_case, and kebab-case inputs. | {{ 'hello_world' \|  sentenceCase }}` |

