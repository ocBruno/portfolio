# Testing

This file explains the testing strategies used in this project.

## Guidelines

- Design tests based on how users use your platform
- Prefer duplication over over-abstraction
- Avoid testing implementation details
- Write fewer longer user centered tests

## Tools

### Jest

Jest is a JavaScript testing framework maintained by Facebook, Inc. designed and built by Christoph Nakazawa with a focus on simplicity and support for large web applications.

### React-test-renderer

This package provides a React renderer that can be used to render React components to pure JavaScript objects, without depending on the DOM or a native mobile environment.

### React-testing-library

The core library, DOM Testing Library, is a light-weight solution for testing web pages by querying and interacting with DOM nodes (whether simulated with JSDOM/Jest or in the browser). The main utilities it provides involve querying the DOM for nodes in a way that's similar to how the user finds elements on the page. In this way, the library helps ensure your tests give you confidence that your application will work when a real user uses it.

## What to test?

Your tests should test the functionality of the app, that mimic how it will be used by your end users. This will give you confidence that your app will function as intended in your production environment

### It must render

At the very least, make sure the component renders without error. This verifies there are no JSX syntax errors, that all variables are defined, etc. This could be as simple as verifying that the rendered output is not null.

### Test the output

One step above “it renders” is “it renders the correct thing.” Given a set of props, what output is expected? Does Person render its name and age, or does it render a name and “TODO: age coming in v2.1”?

### Test the states

Every conditional should be accounted for. If the classNames are conditional (enabled/disabled, success/warning/error, etc), make sure to test that the className-deciding logic is working right. Likewise for conditionally-rendered children: if a Logout button is only visible when the user is logged in, for instance, make sure to test for that.

### Test the events

If the component can be interacted with (an input or button with an onClick or onChange or onAnything), test that the events work as expected and call the specified functions with the correct arguments (including binding this, if it matters).

### Test the edge cases

Anything that operates on an array could have boundary cases — an empty array, an array with 1 element, a paginated list that should truncate at 25 items, and so on. Try out every edge case you can think of, and make sure they all work correctly.

### Optionally

Test that no errors are printed to the console. This verifies that you didn’t miss any required props, among other things.

## What not to test?

### Implementation details.

Implementation details meaning testing things that are not end user functionality.

It seems that you are testing functionality there but you are actually not. You are testing the name of the function. Because you can change the name of the function and your tests will break but your app will still work giving you a false negative.
Having to worry about function and variable names is a headache, and having to rewrite tests every time you change them is tedious.

### Const variables

These are unchanging variables, no need to test them.

### Third party libraries

It is up to the creators of these libraries to test it. If you are not sure if a library is tested you should not use it.

## Types of Tests

### Mock tests

Mock functions allow you to test the links between code by erasing the actual implementation of a function, capturing calls to the function (and the parameters passed in those calls), capturing instances of constructor functions when instantiated with new , and allowing test-time configuration of return values.

### Snapshot tests

This test takes a snapshot of the project structure as a tree each time the test is run and checks if the layout has changed since the last snapshot.

### End to end tests

As opposed to other types of tests, E2E tests are always run inside a browser (or a browser-like) environment. It might be an actual browser that opens and the tests are run inside. It also may be a headless browser environment, which is a browser running without the user interface. The point of E2E tests is emulating an actual user within our running application. They will simulate behavior like scrolling, clicking, and typing and check if our application works well from the point of view of an actual user.

### Integration tests

Even if all your unit test pass, it still just means that the parts are working well on their own. Still, the application might fail. Integration tests cover cross-module processes, where individual modules are combined and tested while working together. Thanks to them you can provide a way to ensure that your code works well as a whole.

### Unit tests

Unit tests cover blocks of code to ensure they run without problems. A tested unit can be a function, a module, a class. Unit tests should be isolated and independent of each other. For a given input, unit test checks the result. It can help you make sure that individual parts of your applications work as expected by finding problems early and avoiding regressions.
