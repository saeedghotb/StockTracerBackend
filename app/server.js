const app = require('./app');
require('dotenv').config();

let port = process.env.PORT || 5000;

app.listen(port,()=>{
  console.log(`server is up on port ${port} . . . `);
});
