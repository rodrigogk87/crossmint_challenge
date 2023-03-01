# Crossmint Challenge

## Getting Started
To run the project, execute the following commands:

Install dependencies:
```console
npm i
```

Run phase one:
```console
npm run devp1
```

Run Phase two.
```console
npm run devp2
```

## Code Linter
The code is linted using *@typescript-eslint/eslint-plugin*. To run the linter, use the command:
```console
npm run lint.
```

## Pino Logger
Pino logger is used to log info and error data to the console. This helps with debugging and tracking issues within the codebase.

## Project Structure
The project is structured in a way that promotes organization, maintainability, and extensibility. It consists of four main folders:

 - **Config**: This folder contains the configuration settings for the project. It includes settings for endpoints, delay, and candidate ID. This folder is designed to isolate configuration information in one file and avoid duplication of configuration data throughout the codebase.

 - **Enums**: This folder contains enums that define constant values for the types of entities in the project. For example, it includes enums for entity types, soloons colors, and comeths directions. Defining these enums promotes readability and consistency throughout the codebase.

  - **Interfaces**: This folder contains interfaces that define the types used in the project. This includes interfaces for types like Points, goalMap, and post data, among others. Defining these interfaces ensures standardized types across the codebase and helps prevent bugs caused by type mismatches.

  - **Services**: This folder contains classes whose primary purpose is to call endpoints to get or post data. These classes are designed to isolate API-related functionality from the rest of the codebase. By separating the API calls from other logic, it promotes easier testing and maintainability.

  - **Utils**: This folder contains utility functions or snippets of code that can be used throughout the application, such as the logger. These small functions and code snippets make it easier to write cleaner, more maintainable code and avoid repetition throughout the codebase.
