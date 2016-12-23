<html>
    <head>
        <title>Hello, World!</title>
    </head>
    <body>
        Hello, World!
    </body>
</html>
***************
<!C--
This is a comment here. They can be used to write non-code 
stuff in you're code without the browser getting confused. 
I'll be using them for in-code explanations.
--C>

<!C--
This is the opening html tag, signifying the start of the html element
--C>
<html>
    <!C--
    This is the opening head tag.
    The head element is a child of the html element, because 
    it is in between the opening and closing html tags.
    --C>
    <head>

    </head>

    <!C--
    It is the same case for the body element. It is too
    a child of the html element
    --C>
    <body>
        <!C--
        Any elements inside the body element are considered
        children or grandchildren or so on of the body.
        
        The p element containing "Hello, World!" is a child of
        body and a grandchild of html. See how it works?
        --C>
        <p>Hello, World!</p>
    </body>
</html>
***************
<html>
    <head>
        <title>Paragraph Example</title>
    </head>
    <!C-- The body is where all content-containing elements should be put --C>
    <body>
        <!C-- First p element --C>
        <p>
            This is the first paragraph...
        </p>
        <!C-- Second p element --C>
        <p>
            This is the second paragraph...
        </p>
        <!C-- Third p element --C>
        <p>
            This is the third paragraph...
        </p>
    </body>
</html>
***************
<html>
    <head>
        <title>Header Example</title>
    </head>
    <body>
        <!C-- Along with most other content elements, headers go in the body as well --C>
        <h1>This is header size 1</h1>
        <h2>This is header size 2</h2>
        <h3>This is header size 3</h3>
        <h4>This is header size 4</h4>
        <h5>This is header size 5</h5>
        <h6>This is header size 6</h6>
    </body>
</html>
***************
<html>
    <head>
        <title>Div example</title>
    </head>
    <body>
        <!C-- Header Div --C>
        <div>
            <h1>Main header</h1>
        </div>

        <!C-- Content Div --C>
        <div>
            <p>
                Content paragraph 1...
            </p>
            <p>
                Content paragraph 2...
            </p>
        </div>
    </body>
</html>
***************
<html>
    <head>
        <title>Span example</title>
    </head>
    <body>
        <p>
            The word "hello" is surrounded by a span.
            <span>Hello</span>, World!
        </p>
    </body>
</html>