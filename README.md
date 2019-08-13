# Dispiro CSS
A lightweight CSS framework for use with CSS Grid using SCSS (Sass)

Getting Started
---------------

To use Dispiro CSS you will need to compile the .sass file to CSS. Dispiro CSS uses the indented syntax of SCSS. 

Follow the instructions on the [Sass website](https://sass-lang.com/install)

Or you can use NPM
```
npm install -g sass
```

If needed, it can be converted to SCSS to suit developer needs using the `sass-convert` command once you have installed the Sass CLI.
```
sass-convert dispiro.sass dispiro.scss
```

Normalize CSS
-------------

Dispiro CSS is intended for use with [Normalize CSS.](https://necolas.github.io/normalize.css/)

CSS Grid
--------

Dispiro CSS does not have a grid system, and this is intended to encourage the use of CSS Grid. CSS Grid is a powerful, easy to use layout generator. [Read more on CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/). CSS Grid makes complex layouts easy to accomplish and makes your layouts human-readable. No need to reinvent the wheel here.

Modifying the Theme
-------------------

Dispiro CSS provides basic, easy to use variables at the top of the file that can be modified from their default values. These variables are not comprehensive, and are just a basic starting point. Very different looks can be achieved by just modifying these variables.

```scss
// Fonts
$main-font-color: #000                    // Applies to body element
$main-font: Helvetica, Arial, sans-serif  // Applies to body element
$global-font-size: 100%                   // Font size is normalized below in globalFontSize() function
                                          
// Buttons & Inputs
$border-radius: 25px                      // Applies to inputs, textareas, & buttons
$text-case: default                       // Option to force capitalize buttons
$element-height: 30px                     // Applies to inputs, textareas, & buttons
$element-width: 20px                      // Applies to inputs, textareas, & buttons
                                          
// Colors
$primary-color: #3de093                   // Applies to buttons and .primary-color
$secondary-color: #d6d5d0                 // Applies to buttons and .secondary-color
```

Semantic Selectors
------------------

Where possible, Dispiro CSS uses tag selectors for styling to avoid excessive `class` selectors.

Utilities
---------

Dispiro CSS provides several common helper classes. More may be added if practical suggestions are made.

```scss
// Helper Classes
.full-width
  width: 100%

.d-none
  display: none

.float-left
  float: left

.float-right
  float: right

.clearfix::after 
  content: ""
  clear: both
  display: table
```

