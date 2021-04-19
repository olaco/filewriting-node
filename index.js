const http= require('http');



const fs= require('fs');

const fetch= require('node-fetch');

const url= 'http://jsonplaceholder.typicode.com/posts';



let uri= fetch(url, {

    headers: {
        "Content-type":"application/json"
    }
})
  .then(response => response.json())
  .then(data => {

    const stringifiedUri= JSON.stringify(data);

    fs.writeFile('./posts.json', stringifiedUri,
    (err) => {

      if(err) throw err

      console.log('data saved');
    })


  })

 

  

const server= http.createServer(function(req, res){

  

    res.writeHead(200, 'Content-Type', 'application/json'),

    res.end('Data retrieve successful')

})


server.listen(8080, function(){

    console.log('server is up and running')
})