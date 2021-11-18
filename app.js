const path = require('path')
const fs = require('fs')
const app = require('fastify')(
    {
        logger:{
            level: 'error',
            file: 'error.log' 
        },
    }
);

app.register(require('fastify-cors'), { 
    // put your options here
  })
app.register(require('fastify-static'), {
    root: path.join(__dirname, 'public'),
  })
app.register(require('./interfaces/routes/article_routes'));
app.listen(8000,"0.0.0.0", function (err, address) {
    if (err) {
        console.error(err)
       // process.exit(1)
    }
    console.log(`Server listening on ${address}`)
})
