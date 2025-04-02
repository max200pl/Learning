# Main Angular concepts

## The Angular CLI

The Angular CLI (Command Line Interface) is a powerful tool that helps developers create, manage, and build Angular applications. It provides a set of commands to automate common tasks, such as generating components, services, and modules, running tests, and building the application for production.

[link]<https://angular.dev/tools/cli>

### Installation

To install the Angular CLI, you need to have Node.js and npm (Node Package Manager) installed on your machine. Once you have them installed, you can use the following command to install the Angular CLI globally:

```bash
npm install -g @angular/cli
```

### Creating a new Angular application

To create a new Angular application, you can use the `ng new` command followed by the name of your application. For example:

```bash
ng new my-angular-app
```

## Start the development server

To start the development server and serve your application, navigate to the project directory and run the following command:

```bash
npm start
```

![Start the development server](./img/StartServer.png)

## Creating components

Components are the building blocks of an Angular application. You can create a new component using the `ng generate component` command followed by the name of the component. For example:

```bash
ng g c user
```

## Attributes Binding

Attributes binding in Angular allows you to bind data from your component to the attributes of HTML elements in your template. This is done using square brackets `[]` around the attribute name. For example, if you have a component property called `imageUrl`, you can bind it to the `src` attribute of an `<img>` tag like this:

```html
<img [src]="imageUrl" alt="Image" />
```
