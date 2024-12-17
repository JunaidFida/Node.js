const http =require('http');
const server= http.createServer( (req,res)=>{
    if(req.url === '/'){
        res.write('AP Humare hain kon?');
        res.end();
    }
    if(req.url === '/api/courses'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }

});

// server.on('connection',(socket)=>{
//     console.log('New Connection...');
// }) will not use it ...too basic beginner level

server.listen(3000);
console.log('Listening on port 3000...')