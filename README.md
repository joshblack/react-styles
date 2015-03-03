WIP. Move along!

# React Styles

[![Circle CI](https://circleci.com/gh/joshblack/react-styles.svg?style=svg)](https://circleci.com/gh/joshblack/react-styles)

React Styles looks to implement the best features of CSS using the best of React and JavaScript.

## Usage

Thanks to the `react-styles-parser` package, you can write styles as files besides your component. For example,

```
+-- components/
|------ Button/
|--------- index.js (where the component logic is located)
|--------- styles.js (where the styles are located)
```

The `styles.js` file will look very similar if you're used to writing `scss`.

```javascript
// styles.js

module.exports = `
  button {
    background: black;

    clicked {
      background: white;
    }
  }
`;
```

We name our top level styles as component names, and nested styles are states of the component, such as `:hover`, `:active`, `:focus`, etc.

We can even include media queries as nested styles of a component, for example:

```javascript
// styles.js

module.exports = `
  button {
    background: black;

    minWidth {
      320 {
        width: 20%;
      }
    }
  }
`;
```

We can also use variables by declaring them at the top of the file, or importing them at the top of the file, and including them in our `styles.js` file by writing `${variableName}`. This is made possible by JavaScript ES6's new template string feature.

Now, inside of our `index.js` file, we import our button styles:

```javascript
// index.js (button component)

// The react-styles! is a webpack loader that is required for
// loading our styles properly
import styles from 'react-styles!./styles';
import styleHelper from 'react-styles';

const Button = React.createClass({
  render () {
    let { button } = styleHelper(styles, this.context);

    return <button style={button}></button>
  }
})
```

### `react-styles-loader`

`react-styles-loader` is a package used by Webpack as a loader for styles written in React Styles. For any file that you want to use styles from, you specify the webpack loader before the name of the path to get a raw styles object.

### `styleHelper(stylesObject, contextObject)`

The `styleHelper` method takes in an object representing your styles and a context that will tell the function the state of the world. This means information like viewport size, or browser being used, can be used in determining what are valid styles when calling the styleHelper.

What gets returned from `styleHelper` is a style object that you can then grab properties off of and apply to React Components.

## Philosophy

React Styles takes on the philosophy that CSS has incredibly useful ideas on how to style components in an application, but implementation details prevented these useful properties from being highly valued. For example, the cascade is a very useful tool that allows developers to have a baseline look throughout their application without having to explicity declare repeated styles.

Unfortunately, you can never opt out of this cascade or change what the cascade is composed of. This ultimately leads to specificity wars and is the birthplace of `!important` due to its nature.

By harnessing the power of React's `context` feature, React Styles is able to provide style suggestions for children components that is very similar to the cascade. Children can choose to opt in to these styles, or even pick and choose the styles that they want. More importantly, children reserve the right to override specific styles, most of the base styles, or even create their own style independent of the given context.

React Styles also gives you the ability to change the context at any given component level so that children will receive a new set of suggestions regarding the base styles of components.
