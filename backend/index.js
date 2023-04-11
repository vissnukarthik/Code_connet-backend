  const express = require('express');
  const { request } = require('express');
  const { json } = require('body-parser');
  const app = express();

  const {leetcode} = require("./data/leetcode.js")
  const {codeforces} = require("./data/codeforces.js");
  const { git } = require('./data/git.js');
  const { hackerrank } =  require('./data/hackerrank.js');
  
  const cors = require('cors');
  app.use(cors())

  app.get("/",(req,res)=>{
      res.send("server is listening")
  })

  app.get('/leetcode/:user_id',leetcode)

  app.get('/codeforces/:user_id',codeforces)

  app.get('/github/:user_id',git)

  app.get("/hackerrank/:user_id",hackerrank)

  let port = 1111;
  app.listen(port, () => {  
    console.log("server listening on port")
  });
