const fs = require('fs');


const requestHandler = (req, res) => {
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
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body);     // testing
            const parsedBodyString = Buffer.concat(body).toString();

            console.log('parsedBody..... ', parsedBody);    // testing
            console.log('parsedBodyString..... ', parsedBodyString);
            console.log('parsedBodyString..... ', parsedBodyString.split('=')[1]);

            /*
            > writeFileSync ... [synchronous] it will block the next line until its process is finish.
            For small size file, this is OK. But, not for big size file

            > writeFile ... [asynchronous] it will NOT block the next line. It will execute asychronously.
            Normally, this is the proper function to execute generally. writeFile 3rd argument is a callback func
            that will be called upon completion of the writeFile process. The callback receive an 'error' params that
            will have a value of 'null' if no error and will pass 'error' content if there is error occurs.
            */
            
            //fs.writeFileSync('message.txt', parsedBodyString.split('=')[1]);

            fs.writeFile('message.txt', parsedBodyString.split('=')[1], (err) => {
                res.writeHead(302, {Location: '/'});
                return res.end();
            });
        });
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<header><title>First App</title></header>');
    res.write('<body><h1>Hello from NodeJS Server!!!!!</h1></body>');
    res.write('</html>');
    res.end();
};

module.exports = requestHandler;