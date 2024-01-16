## INTRODUCTION TO BACKEND/ SERVER-SIDE PROGRAMMING

Most major websites use some kind of server-side technology to dynamically display data as required. For example, imagine how many products are available on Amazon, and imagine how many posts have been written on Facebook. Displaying all of these using different static pages would be extremely inefficient, so instead such sites display static templates (built using HTML, CSS, and JavaScript), and then dynamically update the data displayed inside those templates when needed, such as when you want to view a different product on Amazon.

In the modern world of web development, learning about server-side development is highly recommended.

## Server-side programming
- Web browsers communicate with web servers using the HyperText Transfer Protocol (HTTP). When you click a link on a web page, submit a form, or run a search, an HTTP request is sent from your browser to the target server.
- The request includes a URL identifying the affected resource, a method that defines the required action (for example to get, delete, or post the resource), and may include additional information encoded in URL parameters (the field-value pairs sent via a query string), as POST data (data sent by the HTTP POST method), or in associated cookies.
- Web servers wait for client request messages, process them when they arrive, and reply to the web browser with an HTTP response message. The response contains a status line indicating whether or not the request succeeded (e.g. "HTTP/1.1 200 OK" for success).
- The body of a successful response to a request would contain the requested resource (e.g. a new HTML page, or an image), which could then be displayed by the web browser.

### Static Sites
- A basic web server architecture for a static site (a static site is one that returns the same hard-coded content from the server whenever a particular resource is requested). When a user wants to navigate to a page, the browser sends an HTTP "GET" request specifying its URL.

![Alt text](assets/static-server.png)

- The server retrieves the requested document from its file system and returns an HTTP response containing the document and a success status (usually 200 OK). If the file cannot be retrieved for some reason, an error status is returned.

### Dynamic Sites
- A dynamic website is one where some of the response content is generated dynamically, only when needed. On a dynamic website HTML pages are normally created by inserting data from a database into placeholders in HTML templates (this is a much more efficient way of storing large amounts of content than using static websites).

- A dynamic site can return different data for a URL based on information provided by the user or stored preferences and can perform other operations as part of returning a response (e.g. sending notifications).

- Most of the code to support a dynamic website must run on the server. Creating this code is known as "server-side programming" (or sometimes "back-end scripting").

- Browsers send HTTP requests to the server, then the server processes the requests and returns appropriate HTTP responses.

![Alt text](assets/dynamic-server.png)

- Requests for static resources are handled in the same way as for static sites (static resources are any files that don't change — typically: CSS, JavaScript, Images, pre-created PDF files, etc.).

**More content to be added, feel free to add any engaging content**

## Acknowledgments
- [mdn webdocs](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Introduction) - server side website programing

## Author

- Momanyi Brian - [Website](https://momanyi-brian-portfolio.vercel.app)