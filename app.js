const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const app = express();

app.use('/graphql', graphqlHTTP({
schema,
graphiql: true

}));
// app.get('/',(req, res) =>{
//     res.send('hello');
// });
app.listen(3000, () =>{
    console.log('server started ...at port 3000');
});