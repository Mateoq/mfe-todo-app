# TODOs App
This is a simple TODOs app made using the micro-frontends architecture and monorepos with yarn workspaces.

## Architecture:
Each micro-frontend module consist of a folder inside the packages folder, where yarn workspaces will take care of the dependencies, build and initialization of each module.

These is the purpose of each folder:

### ./todo-shared-types:
This folder/package contains the Typescript types that are going to be shared among the micro-frontend modules.

### ./todo-status:
This is one of the remote micro-frontend modules that contains the `<TodoStatus />` component. This component has two main purposes:
- Display the filter buttons.
- List all TODOs that are passed as props

It also exposes the callbacks for the user interactivity like:
- Click filters.
- Toggle TODO status.

### ./todo-creation:
This is the other remote micro-frontend module that contains the `<TodoCreation />` component. This component has the form to create new TODOs.
Its main purpose is to let the user input the TODO text and submit it for this component to pass the new TODO data to the callback.

### ./todo-app:
This is the host micro-frontend module, it consumes both `<TodoStatus />` and `<TodoCreation />`, but it also is in charge of the core functionality to store and manipulate the TODOs state, in runtime and in the `LocalStorage`.

## Setup:
To setup the monorepo you just need to run the next command:
```
yarn install
```
This has to be executed at the root of the project so that all the dependencies of all the packages will be installed.

Then to execute the project right now there's available one option that may seem too manual but it works perfectly. Run each command in different terminal instances:
```
yarn start:todo-status
yarn start:todo-creation
yarn start:app
```
These commands will create and serve the remote micro-frontend modules and run the host app. Once everything is setup the last command should provide an url where you can access the TODOs app.

## Specs:
- **Node version:** 20.14.0
- The App was created using Vite with Module Federation as well as Yarn Workspaces.
