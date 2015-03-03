WIP. Move along!

[![Circle CI](https://circleci.com/gh/joshblack/react-styles.svg?style=svg)](https://circleci.com/gh/joshblack/react-styles)

# React Styles

React Styles looks to implement the best features of CSS using the best of React and JavaScript.

## Usage

## Philosophy

React Styles takes on the philosophy that CSS has incredibly useful ideas on how to style components in an application, but implementation details prevented these useful properties from being highly valued. For example, the cascade is a very useful tool that allows developers to have a baseline look throughout their application without having to explicity declare repeated styles. Unfortunately, you can never opt out of this cascade or change what the cascade is composed of. This ultimately leads to specificity wars and is the birthplace of `!important` due to its nature.

By harnessing the power of React's `context` feature, React Styles is able to provide style suggestions for children components that is very similar to the cascade. Children can choose to opt in to these styles, or even pick and choose the ones they want. More importantly, children reserve the right to override specific styles, most of the base styles, or even create their own style independent of the given context. React Styles also gives you the ability to change the context at any given component level so that children will receive a new set of suggestions regarding the base styles of components.

# TODO

- Build
    - [x] Create Gulpfile to handle bundling src into module for users to require
    - [x] Update `package.json` to handle actual project dependencies instead of demo dependencies
    - [x] Update `demo/package.json` to properly show it as the demo package dependencies
- Appearance
    - [x] Need to create either a DSL or a better way of writing styles without using quotes everywhere
- Restrictions
    - [ ] Need to restrict way you can write styles, or at least provide warnings for nesting too deep
    - Questions to ask:
        - [ ] How many levels deep can styles go?
- Random
    - [ ] Add sensible defaults for styling? Naming convention style guide
    - [ ] How to add loader without explicity loading it
    - [ ] Abstract away from webpack? ie add to gulp, grunt
- Testing
    - [ ] Write tests for media query styles to make sure that they are valid when I expect them to be
- Demos
    - [ ] Add Demo for context switching
- Project Specific
    - [ ] Move TODO items into repo issues to get used to that workflow
