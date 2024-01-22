## INTRODUCTION TO HTML

## Table of contents

- [Overview](#overview)
    - [Induction](#induction)
    - [Introduction](#introduction)
- [HTML Syntax & Structure](#html-syntax-&-structure)
- [Semantic Elements](#semantic-elements)
- [Tags](#tags)
- [Forms & Validations](#forms-&-validations)
- [Useful Resources](#useful-resources)
- [Author](#author)

## Overview

### Induction
- We will be creating a Weather API project. The project will be found at the Root Repository.

### Introduction
- HTML stands for HyperText Markup Language, is the standard language used to create and design web pages. It serves as the backbone or structure of a webpage, providing a set of elements or tags that define the different components and content within a document. HTML uses a markup structure, where tags are used to indicate the beginning and end of elements, and attributes provide additional information about these elements.

## HTML Syntax & Structure

- Structure: HTML defines the structure of a webpage, including headings, paragraphs, lists, links, images, forms, and more.
- Attributes: Tags can include attributes that provide additional information about the element. Attributes are added within the opening tag and are usually in name/value pairs (e.g., \<img src="image.jpg" alt="Description">).
- Hyperlinks: HTML enables the creation of hyperlinks using the \<a> (anchor) tag, allowing users to navigate between different pages on the web.

- HTML Structure
```HTML
<!DOCTYPE html>
<html lang="en"> <!-- Document is in english language -->
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Webpage</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is a simple webpage created with HTML.</p>
</body>
</html>

```
- In this example, the document starts with \<!DOCTYPE html> to declare it as an HTML5 document, followed by the opening and closing \<html> tags. The \<head> section contains meta information and the document title, while the \<body> section contains the visible content of the webpage.

## Semantic Elements
- HTML5 introduced semantic elements like \<header>, \<nav>, \<article>, \<section>, \<footer>, which provide a clearer structure and meaning to different parts of a webpage.
```HTML
<!-- Semantic Elements (HTML5): -->
    <header></header>
    <nav></nav>
    <article></article>
    <section></section>
    <footer></footer>
    <main></main>
    <aside></aside>
```

## Tags
- HTML uses tags to encapsulate elements. There are two types of tags, **opening tags** which typically come in pairs, with an opening tag (\<tag>) and a closing tag (\</tag>), **closing tags** which do not come in pairs such as \<br>.

```HTML
<!-- Text Formatting Tags: -->
    <b>: <!-- Bold  -->
    <i>: <!-- Italic  -->
    <u>: <!-- Underlined  -->
    <strong>: <!-- Strong emphasis (typically rendered as bold -->
    <em>: <!--Emphasized text (typically rendered as italic -->

<!-- Headings: -->
    <h1></h1> to <h6></h6>: Heading tags, where <h1> is the largest and <h6> is the smallest.

<!-- Paragraphs and Line Breaks: -->
    <p>: Paragraph
    <br>: Line break

<!-- Lists: -->
    <ul></ul>: Unordered list
    <ol></ol>: Ordered list
    <li></li>: List item

<!-- Links: -->
    <a></a>: Anchor, used for creating hyperlinks

<!-- Images: -->
    <img>: Image

<!-- Tables: -->
    <table></table>: Table
    <tr></tr>: Table row
    <td></td>: Table data (cell)
    <th></th>: Table header

<!-- Forms: -->
    <form></form>: Form
    <input>: Input field
    <textarea>: Text area
    <select>: Dropdown list
    <button></button>: Button

<!-- Metadata: -->
    <head></head>: Contains meta-information about the HTML document
    <title></title>: Sets the title of the HTML document

<!-- Division: -->
    <div></div>: Generic container, used for grouping content

<!-- Inline Elements: -->
    <span></span>: Inline container, used for applying styles or scripting to a small piece of content
```

## Forms & Validations
- They allow users to input information that can be submitted to a server for further processing. Additionally, HTML5 introduced new form input types and attributes that enhance the user experience and simplify validation.

### Form

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Form</title>
</head>
<body>
    <form action="/submit" method="post">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required>

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>

        <input type="submit" value="Submit">
    </form>
</body>
</html>
```

- The \<form> tag defines the form container, specifying the action attribute (where the form data will be sent) and the method attribute (how the data will be sent, typically "get" or "post").
- \<label> tags provide labels for the input fields, enhancing accessibility and user experience.
- \<input> tags are used for various input types, such as text (type="text"), password (type="password"), and email (type="email"). The required attribute ensures that the user must fill in these fields before submitting the form.
- The \<input type="submit"> tag creates a submit button.

### Validaton

```HTML
<input type="text" id="username" name="username" required minlength="4" maxlength="10">
```
- required: Specifies that the input field must be filled out.
- type="email": Validates that the input is a valid email address.
- type="number": Validates that the input is a number.
- min and max: Specify the minimum and maximum values for a numeric input.
- pattern: Allows you to define a regular expression pattern for the input.

## Useful Resources
- HTML - [MDN Webdocks](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes)
- HTML Tutorial - [Web Dev Simplified](https://www.youtube.com/watch?v=BvJYXl2ywUE&list=PLZlA0Gpn_vH8BoXcpCUvdmdPZFuR5y2lV&pp=iAQB)
- HTML Tutorial - [Net Ninja](https://www.youtube.com/watch?v=Y1BlT4_c_SU&list=PL4cUxeGkcC9ibZ2TSBaGGNrgh4ZgYE6Cc&pp=iAQB)
- HTML - [Frontend Roadmap](https://roadmap.sh/frontend)

**More content to be added, feel free to add any engaging content**

## Author

- Momanyi Brian - [Website](https://momanyi-brian-portfolio.vercel.app)