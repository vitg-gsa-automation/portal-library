# Portal-Library

## Overview

The `portal-library` is a React component library for the GSA FedRAMP Authorization and Administration Automation portals. The library was created to improve the development lifecycle by providing a collection of React components, utility functions, and custom hooks. Developed with a focus on reusability, this package helps keep a consistent User Interface between the portals.

## Purpose

Originally developed as a React component library, the `portal-library` has evolved into an integral resource for shared functionality within the GSA FedRAMP portals.

## Features

- **React Components**: A collection of React components.
- **Utility Functions**: Comprehensive utility functions that provide common logic and functionality.
- **Custom Hooks**: Custom React hooks that encapsulate stateful logic and behaviors, enabling clean and maintainable code structures.

## Installation

To incorporate the `portal-library` into your project, it is available for installation via the GitHub package registry:

```shell
npm install @vitg-gsa-automation/portal-library
```

## Build Process

To build `portal-library`, ensure you have Node.js installed on your system. Follow these steps:

1. Clone the repository:
   ```shell
   git clone https://github.com/vitg-gsa-automation/portal-library.git
   ```
2. Install dependencies:
   ```shell
   cd portal-library
   npm install
   ```
3. Build the project:
   ```shell
   npm run build
   ```
   This command will transpile the source code into a production-ready format in the `dist` directory.

## Development Environment

### Prerequisites

- Node.js (Version 18 or above)
- npm (Version 9.5.0 or above)

### Setting Up the Environment

1. Fork and clone the repository to your local machine.
2. Run `npm install` to install all the required dependencies.

### Using Storybook for UI Development

This project uses Storybook to facilitate the development and testing of UI components in isolation.

To start Storybook:

```shell
npm run storybook
```

## Continuous Integration and Deployment

This project utilizes GitHub Actions for CI/CD. Each time a push is made to the `main` branch, a GitHub Action is triggered to build, test, and publish the latest version of the library to GitHub Packages.

The process is as follows:

1. **Checkout**: The repository's latest code is checked out.
2. **Node.js Setup**: The specified version of Node.js is set up for the run.
3. **Install Dependencies**: All the necessary dependencies are installed.
4. **Run Automated Tests**: Tests are executed to ensure all is functioning as expected.
5. **Build Library**: The library is built to create a production-ready version.
6. **Publish to GitHub Packages**: The library is published to GitHub Packages.

For the detailed workflow, see the [publish.yaml](.github/workflows/publish.yaml) file in the `.github/workflows` directory.
