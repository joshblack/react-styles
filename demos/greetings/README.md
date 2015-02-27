# Greetings Demo

This demo is the first one written for React Styles. All it does is show the basic workflow behind React Styles.

## Usage

Initial use requires styles to be declares in the same folder as the components. You load the styles in with the `react-styles-loader` plugin in webpack. This loader autoprefixes all the properties for you and will eventually serve as an extensible plugin that you can integrate into your build steps.

Using `stylesHelper` allows you to pass your current style sheet and a context and receive an object of components that have valid styles for the given context that you can then apply to your elements.