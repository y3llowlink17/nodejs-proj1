const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {
    //console.log(req.url, req.method, req.headers);
    //process.exit();

    const url = req.url;
    const method = req.method;
    
    if(url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<header><title>Enter Message</title></header>');
        res.write(`<body>
        <h1>Send Message to NodeJS Server..... </h1>
        <form action="/message" method="POST">
            <input type="text" name="message"/>
            <button type="submit">Submit</button>
        </form>
        </body>`);
        res.write('</html>');
        return res.end();
    }

    if(url === '/message' && method === 'POST') {
        const body = [];
        
        //event listener when there is incoming request data
        req.on('data', (chunk) => {
            console.log('request data..... ', chunk);
            body.push(chunk);
        });

        //event listener when the data is fully parsed
        req.on('end', () => {
            const parsedBody = Buffer.concat(body);     // testing
            const parsedBodyString = Buffer.concat(body).toString();

            console.log('parsedBody..... ', parsedBody);    // testing
            console.log('parsedBodyString..... ', parsedBodyString);
            console.log('parsedBodyString..... ', parsedBodyString.split('=')[1]);

            fs.writeFileSync('message.txt', parsedBodyString.split('=')[1]);
        });

        res.writeHead(302, {Location: '/'});
        
        /* the following lines can be shortened to 'res.writeHead(302, {Location: "/"})' 
        'statusCode = 302' means redirection, and Location property refers to location of the redirection */
        //res.statusCode = 302;
        //res.setHeader('Location', '/');
        
        return res.end();
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<header><title>First App</title></header>');
    res.write('<body><h1>Hello from NodeJS Server!!!!!</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);

