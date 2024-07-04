## INTRODUCTION TO HTML

## Table of contents

- [Overview](#overview)
    - [Induction](#induction)
    - [Introduction](#introduction)
- [HTML Syntax & Structure](#html-syntax-&-structure)
- [Semantic Elements](#semantic-elements)
- [HTML Attributes](#html-attributes)
- [Tags](#tags)
- [Style Attribute](#style-attribute)
- [Color Values](#color-values)
- [Display Value](#display-value)
- [class Attribute](#class-attribute)
- [id Attribute](#id-attribute)
- [iframe](#iframe)
- [Forms & Validations](#forms-&-validations)
- [Useful Resources](#useful-resources)
- [Author](#author)

## Overview

### Induction
- We will be creating a Weather API project. The Portfolio Project will be found at the Root Repository.

### Introduction
- HTML stands for HyperText Markup Language, is the standard language used to create and design web pages. It serves as the backbone or structure of a webpage, providing a set of elements or tags that define the different components and content within a document. HTML uses a markup structure, where tags are used to indicate the beginning and end of elements, and attributes provide additional information about these elements.

## HTML Syntax & Structure

- Structure: HTML defines the structure of a webpage, including headings, paragraphs, lists, links, images, forms, and more.
- Attributes: Tags can include attributes that provide additional information about the element. Attributes are added within the opening tag and are usually in name/value pairs (e.g., \<img src="image.jpg" alt="Description">).
- Hyperlinks: HTML enables the creation of hyperlinks using the \<a> (anchor) tag, allowing users to navigate between different pages on the web.

- HTML Structure
```HTML
<!DOCTYPE html> <!-- Declares it as an HTML5 document -->
<html lang="en"> <!-- Document is in english language -->
<head> <!-- Contains meta information about the HTML document -->
    <meta charset="UTF-8"> <!-- Character encoding -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- Viewport -->
    <title>My First Webpage</title> <!-- Title of the webpage -->
</head>
<body> <!-- Contains the visible content of the webpage -->
    <h1>Hello, World!</h1> <!-- Heading -->
    <p>This is a simple webpage created with HTML.</p> <!-- Paragraph -->
    <p>Awsome</p> <!-- HTML element -->
    <br> <!-- empty element -->
</body>
</html>

```

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
    <details></details>
    <figcaption></figcaption>
    <figure></figure>
    <mark></mark>
    <summary></summary>
    <time></time>
```

## HTML Attributes
- Attributes provide additional information about elements
- Attributes are always specified in the start tag
- Attributes usually come in name/value pairs like: name="value"
- Attributes can be used to add a class, id, style, etc. to an element
- Always Quote Attribute Values, Single or Double Quotes
- The href attribute of \<a> specifies the URL of the page the link goes to
- The src attribute of \<img> specifies the path to the image to be displayed
- The width and height attributes of \<img> provide size information for images
- The alt attribute of \<img> provides an alternate text for an image
- The style attribute is used to add styles to an element, such as color, font, size, and more
- The lang attribute of the \<html> tag declares the language of the Web page
- The title attribute defines some extra information about an element

## Tags
- HTML uses tags to encapsulate elements. There are two types of tags, **opening tags** which typically come in pairs, with an opening tag (\<tag>) and a closing tag (\</tag>), **closing tags** which do not come in pairs such as \<br>.

```HTML
<!-- Favicons -->
<head>
  <title>My Page Title</title>
  <link rel="icon" type="image/x-icon" href="/images/favicon.ico">
</head>

<!-- Text Formatting Tags: -->
    <b></b> - Bold text
    <strong></strong> - Important text
    <i></i> - Italic text
    <em></em> - Emphasized text
    <mark></mark> - Marked text
    <small></small> - Smaller text
    <del></del> - Deleted text
    <ins></ins> - Inserted text
    <sub></sub> - Subscript text
    <sup></sup> - Superscript text

<!-- Headings: -->
    <h1></h1> to <h6></h6>: Heading tags, where <h1> is the largest and <h6><h6> is the smallest.

<!-- Paragraphs and Line Breaks: -->
    <p>: Paragraph
    <br>: Line break
    <pre></pre>: preformatted text, text is displayed in a fixed-width font (usually Courier), and it preserves both spaces and line breaks.
    <hr>: thematic break in an HTML page, displayed as a horizontal rule.

<!-- Lists: -->
    <ul></ul>: Unordered list, uses the CSS list-style-type property to define the list item marker
    <ol></ol>: Ordered list, uses the HTML type attribute to define the numbering type
    <li></li>: List item
    <dl></dl>: Defines a description list
    <dt></dt>: Defines a term in a description list
    <dd></dd>: Describes the term in a description list

<!-- Links: -->
    <a></a>: Anchor, used for creating hyperlinks

<!-- Images: -->
    <img>: Image
    <map>: Defines an image map
    <area>: Defines a clickable area inside an image map
    <picture>: Defines a container for multiple image resources

<!-- Tables: -->
    <table></table>: Defines a table
    <th></th>: Defines a header cell in a table
    <tr></tr>: Defines a row in a table
    <td></td>: Defines a cell in a table
    <caption></caption>: Defines a table caption
    <colgroup></colgroup>: Specifies a group of one or more columns in a table for formatting
    <col></col>: Specifies column properties for each column within a <colgroup> element
    <thead></thead>: Groups the header content in a table
    <tbody></tbody>: Groups the body content in a table
    <tfoot></tfoot>: Groups the footer content in a table

<!-- Forms: -->
    <form></form>: Defines an HTML form for user input
    <input></input>: Defines an input control
    <textarea></textarea>: Defines a multiline input control (text area)
    <label></label>: Defines a label for an <input> element
    <fieldset></fieldset>: Groups related elements in a form
    <legend></legend>: Defines a caption for a <fieldset> element
    <select></select>: Defines a drop-down list
    <optgroup></optgroup>: Defines a group of related options in a drop-down list
    <option></option>: Defines an option in a drop-down list
    <button></button>: Defines a clickable button
    <datalist></datalist>: Specifies a list of pre-defined options for input controls
    <output></output>: Defines the result of a calculation
    

<!-- Metadata: -->
    <head></head>: Contains meta-information about the HTML document
    <title></title>: Sets the title of the HTML document

<!-- Division: -->
    <div></div>: Generic container, used for grouping content

<!-- Span: -->
    <span></span>: Inline container, used for applying styles or scripting to a small piece of content

<!-- Inline Elements: -->
    <span></span>: Inline container, used for applying styles or scripting to a small piece of content

<!-- Quotation and Citation Elements -->
    <blockquote></blockquote>: Used for quoting text from another source
    <q></q>: Used for short inline quotations
    <abbr></abbr>: Used for abbreviations
    <!-- eg -->
    <p>The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.</p>
    
    <address></address>: Used for the address of the author
    <cite></cite>: Used for the title of a work
    <dfn></dfn>: Used for the defining instance of a term
    <bdo></bdo>: Used for bi-directional override, used for embedding bidirectional override for Unicode text
    <!-- eg -->
    <p>The <bdo dir="rtl">WHO</bdo> was founded in 1948.</p>

    <kbd></kbd>: Used for keyboard input
    <code></code>: Used for computer code
    <samp></samp>: Used for sample output from a computer program
    <var></var>: Used for the variable in a mathematical expression or programming context
```

## Style Attribute
- The HTML style attribute is used to add styles to an element, such as color, font, size, and more.

```HTML
<p style="color:blue; font-size:20px;">This is a paragraph with blue color and 20px font size.</p>
```

## Color Values
- Colors can be specified by name, hexadecimal, RGB, RGBA, HSL, HSLA
- name - tomato, blue
- hexadecimal - #ff6347, #00ff00
- RGB - rgb(255, 0, 0), rgb(0, 255, 0)
- RGBA - rgba(255, 0, 0, 0.5), rgba(0, 255, 0, 0.5)
- HSL - hsl(0, 100%, 50%), hsl(120, 100%, 50%)
- HSLA - hsla(0, 100%, 50%, 0.5), hsla(120, 100%, 50%, 0.5)

## Display Value
- The display property specifies the display behavior of an element.

**None**
- The element is not displayed at all

**Block**
- The element is displayed as a block-level element
- Takes up the full width available (stretches out to the left and right as far as it can).
- Commonly used block elements are: \<p>, \<div>, \<section>, headings, lists, semantic elements

**Inline**
- The element does not start on a new line.
- Takes up only the necessary width (stretches out to the left and right as far as it can).
- Commonly used inline elements are: \<a>, \<span>, \<img>

## class Attribute
- Used to specify one or more class names for an element.
- You cannot have more than one element with the same id in an HTML document.
- Used to point to a class name in a style sheet. It can also be used by a JavaScript to access and manipulate elements with the specific class name.
- The class name is case sensitive!

## id Attribute
- Used to specify a unique id for an element.
- Used to point to a id name in a style sheet. It can also be used by a JavaScript to access and manipulate an elements with the specific id name.
- The id name is case sensitive!

## iframe
- Used to display a web page within a web page.
- The src attribute specifies the URL of the page to be displayed.
- The width and height attributes specify the width and height of the iframe.

```HTML
<iframe src="demo_iframe.htm" height="200" width="300" title="Iframe Example"></iframe>
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
    <form action="/submit" method="post" autocomplete="on" novalidate>
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
> GET:Appends the form data to the URL, in name/value pairs. NEVER use GET to send sensitive data! (the submitted form data is visible in the URL!).The length of a URL is limited (2048 characters). Useful for form submissions where a user wants to bookmark the result. GET is good for non-secure data, like query strings in Google.

> POST: Appends the form data inside the body of the HTTP request (the submitted form data is not shown in the URL). POST has no size limitations, and can be used to send large amounts of data. Form submissions with POST cannot be bookmarked

- The novalidate attribute is used to prevent the browser from validating the form when the form is submitted.
- When autocomplete is on, the browser automatically complete values based on values that the user has entered before.
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
- HTML - [Dave Gray HTML Tutorial](https://www.youtube.com/watch?v=n4R2E7O-Ngo&list=PL0Zuz27SZ-6M1Uopt6_VL3gf3cpMnwavm&index=1)
- HTML Tutorial - [Web Dev Simplified](https://www.youtube.com/watch?v=BvJYXl2ywUE&list=PLZlA0Gpn_vH8BoXcpCUvdmdPZFuR5y2lV&pp=iAQB)
- HTML Tutorial - [Net Ninja](https://www.youtube.com/watch?v=Y1BlT4_c_SU&list=PL4cUxeGkcC9ibZ2TSBaGGNrgh4ZgYE6Cc&pp=iAQB)
- HTML - [Frontend Roadmap](https://roadmap.sh/frontend)

**More content to be added, feel free to add any engaging content**

## Author

- Momanyi Brian - [Website](https://momanyi-brian-portfolio.vercel.app)