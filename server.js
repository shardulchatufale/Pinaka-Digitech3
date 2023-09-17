const express = require("express")

const app = express()

//................................................GET REQUESR......................................................
app.get('/', (req, res) => {
  try{
    res.status(200);
    res.send({message:' simple message when a GET request is made tothe root ("/") endpoint'});
  }catch{
    return res.status(500).send({ status: false, message: "server error"})
  }
 
});
//.................................................POST REQUEST.....................................................

app.post('/api',  (req, res) => {
  try{
  let data = req.body

  res.status(200);
  res.send({ status: true, message: "YOUR DATA IS REACIVED SUCCESSFULLY!!" });
  console.log(data);
  }catch{
    return res.status(500).send({ status: false, message: "server error"})
  }
});
//.................................................PUT REQUEST......................................................

app.put('/api', (req, res) => {
  try{
  let data = req.body

  res.status(200);
  res.send({ status: true, message: "YOUR DATA IS UPDATED SUCCESSFULLY!!" });
  console.log(data);
  }catch{
    return res.status(500).send({ status: false, message: "server error"})
  }
});
//..................................................DELETE REQUEST...................................................

app.delete('/api', (req, res) => {
  try{
  let data = req.body

  res.status(200);
  res.send({ status: true, message: "YOUR DATA IS DELETED SUCCESSFULLY!!" });
  console.log(data)
}catch{
  return res.status(500).send({ status: false, message: "server error"})
}
});
//......................................................................................................................

app.listen(process.env.PORT || 3000, function () {
  console.log('Express app running on port ' + (process.env.PORT || 3000));
});