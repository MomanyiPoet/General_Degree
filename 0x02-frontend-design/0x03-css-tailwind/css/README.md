## INTRODUCTION TO CSS

## Table of contents

- [Overview](#overview)
    - [Induction](#induction)
    - [Introduction](#introduction)
- [CSS Syntax](#css-syntax)
- [Adding CSS to HTML](#adding-css-to-html)
- [Colors](#colors)
- [Backgrounds](#backgrounds)
- [Borders](#borders)
- [Margins](#margins)
- [Padding](#padding)
- [Height, Width and Max-width](#height-width-and-max-width)
- [Box model](#box-model)
- [Outline](#outline)
- [Text](#text)
- [Fonts](#fonts)
- [Icons](#icons)
- [Display](#display)
- [Postion](#position)
- [z-index](#z-index)
- [Overflow](#overflow)
- [Horizontal & Vertical Align](#horizontal--vertical-align)
- [Pseudo-classes](#pseudo-classes)
- [Pseudo-elements](#pseudo-elements)
- [Units](#units)
- [Specificity](#specificity)
- [Math Functions](#math-functions)
- [Transitions](#transitions)
- [Animations](#transitions)
- [Animations](#animations)
- [Variables](#variables)
- [Media Queries](#media-queries)
- [Flex Box + Grid Layout](#flex-box--grid-layout)
- [Useful Resources](#useful-resources)
- [Author](#author)

## Overview

### Induction
- These section includes CSS.
- We will be creating a Weather API project. The Portfolio Project will be found at the Root Repository.

### Introduction
- CSS stands for Cascading Style Sheet. It is a stylesheet language used to describe the presentation of a document written in HTML or XML.
- CSS is used to define styles for your web pages, including the design, layout and variations in display for different devices and screen sizes.

## CSS Syntax
![alt text](assets/img_selector.gif)

- The selector points to the HTML element you want to style.
- The declaration block contains one or more declarations separated by semicolons.
- Each declaration includes a CSS property name and a value, separated by a colon.
- Multiple CSS declarations are separated with semicolons, and declaration blocks are surrounded by curly braces.

```CSS
/* CSS Selectors */
p { color: red; } /* element selector */

#gradone { color: red; } /* id selector */

.gradtwo { color: red; } /* class selector */

* { color: red; } /* universal selector selects all HTML elements on the page*/

h1, h2, p { color: red; } /* group selector */
```

## Adding CSS to HTML
- External Stylesheet
```HTML
<head>
    <link rel="stylesheet" href="mystyle.css">
</head>
```

- Internal Styling
```HTML
<head>
    <style>
        body {
            background-color: linen;
        }

        h1 {
            color: maroon;
            margin-left: 40px;
        }
    </style>
</head>
```

- Inline Styling
```HTML
<body>
    <h1 style="color:blue; text-align:center;">This is a heading</h1>
    <p style="color:red;">This is a paragraph.</p>
</body>
 ```

## Colors

```CSS
/* Background Color */
h1 { background-color: teal; }

/* Text Color */
h1 { color: teal; }

/* Border Color */
h1 { border:2px solid Tomato; }

/* Color Values */
h1 {
    color: teal; /* color name */
    color: rgb(255, 99, 71); /* rgb */
    color: hsl(9, 100%, 64%); /* hsl */
    color: rgba(255, 99, 71, 0.5); /* rgba */
    color: hsla(9, 100%, 64%, 0.5); /* hsla */
}
```

## Backgrounds
```CSS
/* Background Color */
h1 { 
    background-color: teal;
    background: rgba(0, 128, 0, 0.3) /* Green background with 30% opacity */
    opacity: 0.3; /*transparency of an element, value from 0.0 - 1.0*/
}

/* Background Image */
body {
  background-image: url("bgdesert.jpg"); /*image is repeated by default*/
  background-repeat: no-repeat; /*show the image only once*/
  background-position: right top; /*positions the image in the top-right corner*/
  background-attachment: scroll; /*Sets whether a background image is fixed or scrolls with the rest of the page*/
}

/*Background Shorthand property*/
h1 {
    /*  Order of the property values
        background-color
        background-image
        background-repeat
        background-attachment
        background-position
    */
    background: #ffffff url("img_tree.png") no-repeat scroll right top;
}
```

## Borders
```CSS
p.one {
  border-style: solid; /*specifies what kind of border to display*/
  border-width: 5px; /*specifies the width of the four borders in (px, pt, cm, rem, thin, medium, thick etc)*/
  border-color: red; /*set the color of the four borders*/
  border-color: red green blue yellow; /* red top, green right, blue bottom and yellow left */
  border-radius: 5px; /*rounded borders*/
}

/*Border Shorthand Property*/
p {
    /*
        border-width
        border-style (required)
        border-color
    */
  border: 5px solid red;
}
```

## Margins
- Margins are used to create space around elements, outside of any defined borders.

```CSS
p {
  margin-top: 100px;
  margin-bottom: 100px;
  margin-right: 150px;
  margin-left: 80px;
}

div {
  width: 300px;
  margin: auto; /*horizontally center the element within its container*/
  border: 1px solid red;
}

/* Margin Shorthand */
p {
  margin: 25px 50px 75px 100px; /*Four: top right bottom left*/
  margin: 25px 50px 75px; /*Three: top right and left bottom*/
  margin: 25px 50px; /*Two: top and bottom right and left*/
  margin: 25px; /*One: all four points*/
}
```

## Padding
- Padding is used to create space around an element's content, inside of any defined borders.
```CSS
p {
  padding-top: 100px;
  padding-bottom: 100px;
  padding-right: 150px;
  padding-left: 80px;
}

/* padding Shorthand */
p {
  padding: 25px 50px 75px 100px; /*Four: top right bottom left*/
  padding: 25px 50px 75px; /*Three: top right and left bottom*/
  padding: 25px 50px; /*Two: top and bottom right and left*/
  padding: 25px; /*One: all four points*/
}
```

## Height, Width and Max-width
```CSS
div {
  height: 200px;
  max-width: 500px;
  background-color: powderblue;
}
```

## Box model
- In CSS, the term "box model" is used when talking about design and layout.

    ![alt text](assets/images.png)

- Content - The content of the box, where text and images appear
- Padding - Clears an area around the content. The padding is transparent
- Border - A border that goes around the padding and content
- Margin - Clears an area outside the border. The margin is transparent

## Outline
- An outline is a line drawn outside the element's border.
```CSS
p.one {
    border: 1px solid black;
    outline-style: solid; /*specifies what kind of outline to display*/
    outline-width: 5px; /*specifies the width of the four outlines in (px, pt, cm, rem, thin, medium, thick etc)*/
    outline-color: red; /*set the color of the outline*/
    outline-offset: 15px; /**adds space between an outline and the edge/border of an element*/
}

/*outline Shorthand Property*/
p {
    /*
        outline-width
        outline-style (required)
        outline-color
    */
    outline: 5px solid red;
}
```

## Text
```CSS
/*Text color*/
h1 {
  background-color: black;
  color: white;
  text-align: center; /*center. left, right, justify*/
  text-align-last: right; /*specifies how to align the last line of a text*/
  vertical-align: text-top; /*baseline, text-top, text-bottom, sub, super*/
  text-decoration-line: overline; /*overline, line-through, underline, overline underline*/
  text-decoration-color: green;
}

/*Text align*/
h1 {
    text-align: center; /*center. left, right, justify*/
    text-align-last: right; /*specifies how to align the last line of a text*/
    vertical-align: text-top; /*baseline, text-top, text-bottom, sub, super*/
}

/*Text decoration*/
h1 {
    text-decoration-line: overline; /*overline, line-through, underline, overline underline*/
    text-decoration-color: green;
    text-decoration-style: solid;
    text-decoration-thickness: 5px;
    text-decoration: underline red double 5px; /*Shorthand: line color style thickness */
}

/*Text Transformation*/
h1 {
    text-transform: uppercase; /*uppercase, lowercase, capitalize*/
}

/*Text Spacing*/
h1 {
    text-indent: 50px; /*Indentation*/
    letter-spacing: 5px; /*letter spacing*/
    line-height: 1.8; /*line height*/
    word-spacing: 10px; /*word spacing*/
    white-space: nowrap; /*Specifies how to handle white-space inside an element*/
}

/*Text shadow*/
h1 {
  text-shadow: 2px 2px 5px red; /*horizontal vertical blur color*/
}
```

## Fonts
- If the font name is more than one word, it must be in quotation marks, like: "Times New Roman"
```CSS
.p2 {
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal; /*Font style: normal, italic, oblique */
  font-weight: normal; /*Font weight: normal, bold*/
  font-variant: normal; /*Font variant: normal, small-caps*/
  font-size: 40px;
  font: italic small-caps bold 12px/30px Georgia, serif; /*Font Shorthand: style variant weight siz/line-height family, fallback*/
}
```

## Icons
- To use the Google icons, add the following line inside the \<head> section of your HTML page
```HTML
<html>
<head>
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
</head>
<body>
  <i class="material-icons">cloud</i>
  <i class="material-icons">favorite</i>
</body>
</html>
```

## Display
```CSS
h1.hidden {
  display: none; /*The element will be hidden, and the page will be displayed as if the element is not there:*/
}

h1.hidden {
  visibility: hidden; /*The element will be hidden, but still affect the layout*/
}

h1.hidden {
  display: block; /*Displays an element as a block element*/
}

h1.hidden {
  display: inline; /*Displays an element as an inline element*/
}

h1.hidden {
  display: inline-block; /*Displays an element as an inline-level block container. The element itself is formatted as an inline element, but you can apply height and width values*/
}

h1.hidden {
  display: flex; /*	Displays an element as a block-level flex container*/
}

h1.hidden {
  display: grid; /*Displays an element as a block-level grid container*/
}

h1.hidden {
  display: inline-flex; /*Displays an element as an inline-level flex container*/
}

h1.hidden {
  display: inline-grid; /*Displays an element as an inline-level grid container*/
}

```

## Position
- The position property specifies the type of positioning method used for an element. Elements are then positioned using the top, bottom, left, and right properties

```CSS
/*
- static: positioned according to the normal flow of the page:
- relative: positioned relative to its normal position
- fixed: positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled
- absolute: positioned relative to the nearest positioned ancestor, elements are removed from the normal flow, and can overlap elements.
- sticky: positioned based on the user's scroll position
*/

div.static {
  position: static;
  border: 3px solid #73AD21;
}
```

## z-index
- The z-index property specifies the stack order of an element.
- When elements are positioned, they can overlap other elements.
- An element can have a positive or negative stack order.
- z-index only works on positioned elements (absolute, relative, fixed, or sticky) and flex items (elements that are direct children of display: flex elements).

```CSS
img {
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: -1;
}
```

## Overflow
- Specifies whether to clip the content or to add scrollbars when the content of an element is too big to fit in the specified area.
```CSS
/* 
- visible: Default. The overflow is not clipped. The content renders outside the element's box
- hidden: The overflow is clipped, and the rest of the content will be invisible
- scroll: The overflow is clipped, and a scrollbar is added to see the rest of the content
- auto: Similar to scroll, but it adds scrollbars only when necessary
 */
div {
  width: 200px;
  height: 65px;
  overflow: visible;
  overflow-x: auto;  /* specifies what to do with the left/right edges of the content. */
  overflow-y: hidden; /* specifies what to do with the top/bottom edges of the content. */
}
```

## Horizontal & Vertical Align
```CSS
.center {
  margin: auto; /* horizontally center a block element */
  width: 50%;
  border: 3px solid green;
  padding: 10px;
}

h1 {
  text-align: center; /* center the text inside an element*/
}

/* Center an Image */
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
}
```

## Combinators
```CSS
/*
- descendant selector (space): matches all elements that are descendants of a specified element.
- child selector (>): selects all elements that are the children of a specified element.
- adjacent sibling selector (+): select an element that is directly after another specific element.
- general sibling selector (~): selects all elements that are next siblings of a specified element.
*/

/*descendant selector (space): selects all <p> elements inside <div> elements */
div p { 
  background-color: yellow;
}

/*child selector (>): selects all <p> elements that are children of a <div> element */
div > p { 
  background-color: yellow;
}

/*adjacent sibling selector (+): selects all <p> elements inside <div> elements */
div p { 
  background-color: yellow;
}

/*general sibling selector (~): selects all <p> elements that are next siblings of <div> elements */
div p { 
  background-color: yellow;
}
```

## Pseudo-classes
- A pseudo-class is used to define a special state of an element, examples:
- Style an element when a user mouses over it
- Style visited and unvisited links differently
- Style an element when it gets focus

```CSS
/* unvisited link */
a:link {
  color: #FF0000;
}

/* visited link */
a:visited {
  color: #00FF00;
}

/* mouse over link */
a:hover {
  color: #FF00FF;
}

/* selected link */
a:active {
  color: #0000FF;
}

/*:first-child pseudo-class matches a specified element that is the first child of another element.*/
p i:first-child {
  color: blue;
}
```

## Pseudo-elements
- A CSS pseudo-element is used to style specified parts of an element, example:
- Style the first letter, or line, of an element.
- Insert content before, or after, the content of an element.

```CSS
/*
::after	p::after Insert content after every <p> element
::before	p::before	Insert content before every <p> element
::first-letter	p::first-letter	Selects the first letter of every <p> element
::first-line	p::first-line	Selects the first line of every <p> element
::marker	::marker	Selects the markers of list items
::selection	p::selection	Selects the portion of an element that is selected by a user
*/

selector::pseudo-element {
  property: value;
}
```

## Units
- CSS has several different units for expressing a length.

**Absolute Lengths**
- The absolute length units are fixed and a length expressed in any of these will appear as exactly that size.
- Absolute length units are not recommended for use on screen, because screen sizes vary so much. However, they can be used if the output medium is known, such as for print layout

```CSS
/* 
cm	centimeters
mm	millimeters
in	inches (1in = 96px = 2.54cm)
px *	pixels (1px = 1/96th of 1in)
pt	points (1pt = 1/72 of 1in)
pc	picas (1pc = 12 pt)
 */
```

**Relative Lengths**
- Relative length units specify a length relative to another length property. Relative length units scale better between different rendering mediums.
```CSS
/* 
em	Relative to the font-size of the element (2em means 2 times the size of the current font)	
ex	Relative to the x-height of the current font (rarely used)	
ch	Relative to width of the "0" (zero)	
rem	Relative to font-size of the root element	
vw	Relative to 1% of the width of the viewport*	
vh	Relative to 1% of the height of the viewport*	
vmin	Relative to 1% of viewport's* smaller dimension	
vmax	Relative to 1% of viewport's* larger dimension	
%	Relative to the parent element
```

## Specificity
- If there are two or more CSS rules that point to the same element, the selector with the highest specificity value will "win", and its style declaration will be applied to that HTML element.
- There are four categories which define the specificity level of a selector:

**Inline styles** - Example: \<h1 style="color: pink;">

**IDs** - Example: #navbar

**Classes, pseudo-classes, attribute selectors** - Example: .test, :hover, [href]

**Elements and pseudo-elements** - Example: h1, ::before

## !important Rule
- The !important rule in CSS is used to add more importance to a property/value than normal, it will override ALL previous styling rules for that specific property on that element!

```CSS
p {
  background-color: red !important;
}
```

## Math Functions
**calc() Function**
- Performs a calculation to be used as the property value.

```CSS
#div1 {
  position: absolute;
  left: 50px;
  width: calc(100% - 100px); /*Create a div that stretches across the window, with a 50px gap between both sides of the div and the edges of the window:*/
  border: 1px solid black;
  background-color: yellow;
  padding: 5px;
}
```

**max() Function**
- Uses the largest value, from a comma-separated list of values, as the property value.

```CSS
#div1 {
  background-color: yellow;
  height: 100px;
  width: max(50%, 300px); /*set the width to whichever value is largest, 50% or 300px:*/
}
```

**min() Function**
- Uses the smallest value, from a comma-separated list of values, as the property value.

```CSS
#div1 {
  background-color: yellow;
  height: 100px;
  width: min(50%, 300px); /*set the width to whichever value is smallest, 50% or 300px:*/
}
```

## Gradients
- Linear Gradients (goes down/up/left/right/diagonally)
- Radial Gradients (defined by their center)
- Conic Gradients (rotated around a center point)

```CSS
#grad {
  background: linear-gradient(to bottom right, red, yellow); /*Linear Gradients*/
  background-image: radial-gradient(red, yellow, green); /*Radial Gradients*/

}
```

## Transitions
- transition
- transition-delay
- transition-duration
- transition-property
- transition-timing-function

The transition-timing-function property can have the following values:

- ease - specifies a transition effect with a slow start, then fast, then end slowly (this is default)
- linear - specifies a transition effect with the same speed from start to end
- ease-in - specifies a transition effect with a slow start
- ease-out - specifies a transition effect with a slow end
- ease-in-out - specifies a transition effect with a slow start and end
- cubic-bezier(n,n,n,n) - lets you define your own values in a cubic-bezier function

```CSS
div {
  transition-property: width;
  transition-duration: 2s;
  transition-timing-function: linear;
  transition-delay: 1s;
}
```

## Animations
animation-direction property
- normal - The animation is played as normal (forwards). This is default
- reverse - The animation is played in reverse direction (backwards)
- alternate - The animation is played forwards first, then backwards
- alternate-reverse - The animation is played backwards first, then forwards

animation-timing-function property specifies the speed curve of the animation
- ease - Specifies an animation with a slow start, then fast, then end slowly (this is default)
- linear - Specifies an animation with the same speed from start to end
- ease-in - Specifies an animation with a slow start
- ease-out - Specifies an animation with a slow end
- ease-in-out - Specifies an animation with a slow start and end
- cubic-bezier(n,n,n,n) - Lets you define your own values in a cubic-bezier function

```CSS
div {
  width: 100px;
  height: 100px;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
  animation-iteration-count: 3;
  animation-direction: reverse; /*normal, reverse, alternate, alternate-reverse */
}

@keyframes example {
  from {background-color: red;}
  to {background-color: yellow;}
  /* or */
  0%   {background-color: red;}
  25%  {background-color: yellow;}
  50%  {background-color: blue;}
  100% {background-color: green;}
}
```

## Variables
```CSS
:root {
  --blue: #1e90ff;
  --white: #ffffff;
}

body { background-color: var(--blue); }

h2 { border-bottom: 2px solid var(--blue); }

button {
  --blue: #ffffff; /* local variable will override global */
  background-color: var(--white);
  color: var(--blue);
  border: 1px solid var(--blue);
  padding: 5px;
}
```

## Media Queries

```CSS
/* background-color to lightgreen if the viewport is 480 pixels wide or wider (if the viewport is less than 480 pixels, the background-color will be pink): */
body {
  background-color: pink;
}

@media screen and (min-width: 480px) {
  body {
    background-color: lightgreen;
  }
}
```

## Flex Box + Grid Layout

## Useful Resources
- CSS - [Dave Gray CSS Tutorial](https://www.youtube.com/watch?v=n4R2E7O-Ngo&list=PL0Zuz27SZ-6M1Uopt6_VL3gf3cpMnwavm&index=2)

**More content to be added, feel free to add any engaging content**

## Author

- Momanyi Brian - [Website](https://momanyi-brian-portfolio.vercel.app)