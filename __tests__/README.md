## Testing

This file explains the testing strategies used in this project.

## Tools

- Jest

Jest is a JavaScript testing framework maintained by Facebook, Inc. designed and built by Christoph Nakazawa with a focus on simplicity and support for large web applications.

- Enzyme

Enzyme is a JavaScript Testing utility for React that makes it easier to test your React Components' output. You can also manipulate, traverse, and in some ways simulate runtime given the output. Enzyme's API is meant to be intuitive and flexible by mimicking jQuery's API for DOM manipulation and traversal.

- React-test-renderer

This package provides a React renderer that can be used to render React components to pure JavaScript objects, without depending on the DOM or a native mobile environment.

## What to test?

Your tests should test the functionality of the app, that mimic how it will be used by your end users. This will give you confidence that your app will function as intended in your production environment

- It must render: At the very least, make sure the component renders without error. This verifies there are no JSX syntax errors, that all variables are defined, etc. This could be as simple as verifying that the rendered output is not null.

- Test the output: One step above “it renders” is “it renders the correct thing.” Given a set of props, what output is expected? Does Person render its name and age, or does it render a name and “TODO: age coming in v2.1”?

- Test the states: Every conditional should be accounted for. If the classNames are conditional (enabled/disabled, success/warning/error, etc), make sure to test that the className-deciding logic is working right. Likewise for conditionally-rendered children: if a Logout button is only visible when the user is logged in, for instance, make sure to test for that.

- Test the events: If the component can be interacted with (an input or button with an onClick or onChange or onAnything), test that the events work as expected and call the specified functions with the correct arguments (including binding this, if it matters).

- Test the edge cases: Anything that operates on an array could have boundary cases — an empty array, an array with 1 element, a paginated list that should truncate at 25 items, and so on. Try out every edge case you can think of, and make sure they all work correctly.

- Optionally, you can test that no errors are printed to the console. This verifies that you didn’t miss any required props, among other things.

## What not to test?

- Implementation details.

Implementation details meaning testing things that are not end user functionality.

It seems that you are testing functionality there but you are actually not. You are testing the name of the function. Because you can change the name of the function and your tests will break but your app will still work giving you a false negative.
Having to worry about function and variable names is a headache, and having to rewrite tests every time you change them is tedious.

- Const variables
  These are unchanging variables, no need to test them.

- Third party libraries
  It is up to the creators of these libraries to test it. If you are not sure if a library is tested you should not use it.

## Tests applied

- Mock tests

Mock functions allow you to test the links between code by erasing the actual implementation of a function, capturing calls to the function (and the parameters passed in those calls), capturing instances of constructor functions when instantiated with new , and allowing test-time configuration of return values.

- Snapshot tests

This test takes a snapshot of the project structure as a tree each time the test is run and checks if the layout has changed since the last snapshot.

- End to end tests

Usually a multi step test combining multiple unit and integration tests into one big test. Usually very little is mocked or stubbed. Tests are done in a simulated browser, there may or may not be a UI while the test is running. example: testing an entire authentication flow.

- Integration tests

testing if different parts work or integrate with each other. Usually done with mounting or rendering a component. example: test if a child component can update context state in a parent.

- Unit tests

testing an isolated part of your app, usually done in combination with shallow rendering. example: a component renders with the default props.
