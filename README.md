# grunt-coffeedoc

> Grunt Plugin to execute CoffeeDoc documentation generation

## Getting Started
This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-coffeedoc --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-coffeedoc');
```

## The "coffeedoc" task

### Overview
In your project's Gruntfile, add a section named `coffeedoc` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  coffeedoc: {
    target: 'coffee sources directory',
    options: {
      // CoffeeDoc options
    }
  }
});
```

### Options

#### options.output
Type: `String`
Default value: `'docs'`

Set output directory.

#### options.ignore
Type: `String`
Default value: ``

Files or directories to ignore.

#### options.stdout
Type: `String`

If present, directs all output to stdout instead of files.

#### options.hide-private
Type: `String`

If present, do not document methods beginning with an underscore.

#### options.parser
Type: `String`
Default value: `commonjs`

Parser to use. Built-in parsers: commonjs, requirejs.

#### options.renderer
Type: `String`
Default value: `html`

Renderer to use. Built-in renderers: html, gfm, json.

#### options.indexTemplate
Type: `String`

Override the default index template for the selected renderer.

#### options.moduleTemplate
Type: `String`

Override the default module template for the selected renderer.

### Usage Examples

```js
grunt.initConfig({
  coffeedoc: {
    target: 'src',
    options: {
      output: 'doc',
      parser: 'requirejs',
      renderer: 'html'
    }
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
