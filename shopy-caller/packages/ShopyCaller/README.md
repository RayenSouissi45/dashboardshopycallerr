<h1 align="center">
  <img alt="logo" src="https://drive.google.com/file/d/1MYWA6V1V-GqSUMJvR1rFPMW0HtV-DjrY/view?usp=sharing" width="124px" style="border-radius:10px"/><br/>
SHOPY-CALLER </h1>


## 🔗 Requirements

- [React Native dev environment ](https://reactnative.dev/docs/environment-setup)
- [Node.js LTS release](https://nodejs.org/en/)
- [Git](https://git-scm.com/)
- [Watchman](https://facebook.github.io/watchman/docs/install#buildinstall), required only for macOS or Linux users
- [Yarn](https://classic.yarnpkg.com/en/docs/install)
- [Expo Cli](https://docs.expo.dev/workflow/expo-cli/)
- [VS Code Editor](https://code.visualstudio.com/download) ⚠️ Make sure to install all recommended extension from `.vscode/extensions.json`

## ⭐ Features

- ✅ The latest version of Expo SDK, along with the Custom Dev client, to give you access to a range of powerful features and tools.
- 🎉 TypeScript for type checking, to help you catch bugs and improve code quality.
- 💅 A minimal UI kit built with tailwindcss, which provides a range of pre-defined classes for styling your app.
- ⚙️ Support for multiple environment builds, including Production, Staging, and Development, using Expo configuration.
- 🦊 Husky for Git Hooks, to automate your git hooks and enforce code standards.
- 💡 A clean project structure with Absolute Imports, to make it easier to navigate and manage your code.
- 🚫 Lint-staged for running linters and TypeScript checks on Git staged files, to ensure that your code is always up to standards.
- 🗂 VSCode recommended extensions, settings, and snippets to enhance the developer experience.
- ☂️ React Navigation.
- 💫 An auth flow with zustand and react-native-mmkv as a storage solution to save sensitive data.
- 🛠 A simple workflow for building, releasing, and distributing your app using Github action.
- 🔥 React Query & axios  for fetching data.
- 🧵 A good approach for handling forms with react-hook-form and zod for validation.
- 🎯 Localization with i18next , along with Eslint for validation.

## 👋 Quick start

Clone the repo to your machine and install deps :

```sh
git clone https://github.com/superverse-entreprise/shopy-caller

cd ./packages/ShopyCaller

yarn
```

To run the app on ios

```sh
yarn ios
```

To run the app on Android

```sh
yarn android
```

## ✍️ Rules and Conventions
### Naming
We follow kabab-case for naming files and folders as we think it's the most readable and consistent way to name files and folders in large projects and it's the most common way to name files and folders in the react native community.

Example of kabab-case naming: ```my-component.tsx```

For naming variables, functions, classes, interfaces, types, enums, we follow camelCase as it's the most common way to name variables in the react community and as it forced by the linter as you cant create a function component without using camelCase.
### Linting
Using a linter is a must in any javascript project. for the starter we are using eslint with the react native community config and some custom rules to make sure we are following the rules and conventions related to file naming, tailwindcss classes typescript types, import order, internationalization files and more
### Git Hooks with Husky
The starter comes with a set of git hooks that help us to enforce rules and conventions. Those hooks are configured using Husky. and here is the complete list of the hooks:

#### pre-commit
As the name suggest, this hook will run before each commit and it will make sure you are not committing directly on the main branch and it will run the linter and typescript checking on the staged files.

#### post-merge

As the name suggest, this hook will run after each merge and it will check if there is any changed in yarn.lock and if there is any, it will run yarn install to make sure the dependencies are up to date

#### commit-msg

This hook will check if the commit message is following the conventional commit format. If it's not, the commit will be aborted and will show you what going wrong with your commit message.

We are using commitlint to check if the commit message is following the conventional commit format.

In general your commit message should follow this format:

```type(scope?): subject  #scope is optional; multiple scopes are supported (current delimiter options: "/", "\" and ",")```

*Real world examples can look like this:*
```
fix(ui): fix input width
feat(ui): add button variants
feat(api): add usePost query hook
```
```type``` should be one of the following: build, chore, ci ,docs,feat,fix, perf, refactor, revert, style or test.


## Project structure

```bash title="Project Structure"
src
├── api ## any think related to api calls and data fetching
│   ├── common ## common api files such us axios client and  react query provider
│   │   ├── api-provider.tsx
│   │   ├── client.tsx
│   │   ├── index.tsx
│   │   └── utils.tsx
│   ├── index.tsx
│   ├── posts ## query and mutation related to posts
│   │   ├── index.tsx
│   │   └── use-posts.ts
│   └── types.ts
├── core # core files such as auth, localization, storage and more
│   ├── auth
│   │   ├── index.tsx
│   │   └── utils.tsx
│   ├── i18n
│   │   ├── index.tsx
│   │   ├── react-i18next.d.ts
│   │   ├── resources.ts
│   │   ├── types.ts
│   │   └── utils.tsx
│   ├── index.tsx
│   └── utils.ts
├── index.tsx
├── navigation # navigation files such as stack, tab and drawer navigators
│   ├── auth-navigator.tsx
│   ├── index.tsx
│   ├── navigation-container.tsx
│   ├── root-navigator.tsx
│   ├── tab-navigator.tsx
│   ├── types.tsx
│   └── utils.tsx
├── screens # screens files
│   ├── feed
│   │   ├── card.tsx
│   │   └── index.tsx
│   ├── index.tsx
│   ├── login
│   │   └── index.tsx
│   ├── settings
│   └── style
├── translations # translation resources files
│   ├── ar.json
│   └── en.json
├── types ## global types
│   └── index.ts
└── ui ## ui components and theme configuration
    ├── core
    │   ├── activity-indicator.tsx
    │   ├── bottom-sheet
    │   ├── button.tsx
    │   ├── image.tsx
    │   ├── index.tsx
    │   ├── input
    │   ├── list
    │   ├── pressable.tsx
    │   ├── scroll-view.tsx
    │   ├── select-input
    │   ├── text.tsx
    │   ├── touchable-opacity.tsx
    │   └── view.tsx
    ├── error-handler
    │   ├── error-fallback.tsx
    │   └── index.tsx
    ├── icons
    ├── index.tsx
    ├── screen.tsx
    ├── theme
    │   ├── colors.js
    │   ├── constants.tsx
    │   └── index.ts
    └── utils.tsx
```

- `ui`: This folder contains all the UI components and the theme configuration. we provide minimal components with a basic theme. you can add you own components and theme configuration here.

- `core`: This folder contains the core files such as auth, localization, storage and more. This folder can be shared with other projects that why we are going only to find module that has nothing to do with project logic. This approach help us share code between projects and also update the starter with new features.

- `navigation`: This folder contains the navigation files such as stack, tab and drawer navigators.

- `screens`: This folder contains the screens files. If you need to create a specific component for a screen you can create a `components` folder inside the screen folder.

- `api`: This folder contains the api files. Check `posts` folder for inspiration on how to create a query and mutation.

- `translations`: This folder contains the translation resources files.

- `types`: This folder contains the global types.


### Importing files

We use absolute imports to import files using babel module resolver plugin and typescript path mapping. This approach help us to long relative paths and make the code more clean and readable.

Here is a simple example on how the Feed screen look like with absolute imports:

```tsx title="Feed Screen"
import { FlashList } from '@shopify/flash-list';
import React from 'react';
import type { Post } from '@/api';
import { usePosts } from '@/api';
import { EmptyList, SafeAreaView, Text, View } from '@/ui';
import { Card } from './card';
...
```

## Customisation
You just need to edit `app.config.ts` file to update expo attributes and configuration.
### Splash screen and app icon
updating the app icon and splash screen is very easy and straight forward. You only need to update the app icon and splash screen images inside the `assets` folder and run `expo prebuild` to update the app icon and splash screen.

As we are supporting multiple variant for development, staging and production environment you need 3 different icons but the right solution is to use the same icon with badges for each environment.

For more details about the app icon and splash screen, please refer to the expo documentation.

👉 [Create a splash screen](https://docs.expo.dev/guides/splash-screens/)

## UI and Theming

How we manage the UI and theming of the application.

### Why [Tailwind CSS](https://tailwindcss.com/) ?

For the past projects we tried multiple approach to style our react native apps,Stylesheet API, styled components, restyle and more.

Right now we are confident that using Tailwind CSS with react native is the right solution specially after discovering [Nativewind](https://nativewind.dev/).

### About Nativewind

Nativewind is a library that allows you to use Tailwind CSS with react native. Nativewind achieves this by pre-compiling the Tailwind CSS classes into react native stylesheets with a minimal runtime to selectively apply the styles.

Nativewind comes with different babel configuration options but we are using `compile only` configuration which means that you need to create your own component and warp them with `styled` component from Nativewind to use them with Tailwind class names.

This approach give us more control over the component we want to style as we don't want Nativewind babel plugin to transform all the components in our application.

For more details about Nativewind you can check their [documentation](https://www.nativewind.dev/overview/).

All components imported from `@/ui` are wrapped with `styled` component from Nativewind and ready to accept Tailwind CSS class names. Enjoy 🥳

### Configuration

We have created a `ui/theme` folder when you can finds our Custom colors that has been imported to `tailwind.config.js` and used as a theme for our demo application. You can add your own colors palette and use them in your component with Tailwind class names.

You can read more about how to [configure your project with Tailwind CSS](https://tailwindcss.com/docs/configuration).
