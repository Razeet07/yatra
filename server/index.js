const express = require('express');
const mongoose = require('mongoose');

const app = express()
const port = 3000
app.use(express.json())
const { Schema } = mongoose;
mongoose.connect('mongodb://localhost:27017/multivendorDb');

const productSchema = new Schema({
  productName: String, 
  productPrice: Number,
  productDes: String,
  category: Stringgit 
});

const Products = mongoose.model('Product', productSchema);

// POST
app.post('/products', (req, res) => {
try{
  Products.create(req.body)
  res.json({
    msg: "new product added"
  })

}catch(err){
  console.log(err)
}

  })

// GET
app.get('/products',async(req, res) => {
  const data = await Products.find()
  if(data) res.json(data)
  })

  
// PUT 
app.put('/products/:id',async(req, res) => {
const data = await Products.findByIdAndUpdate(req.params.id, req.body)
res.json({
  msg: "some changes  has been made_edit Done"
})
})


// Delete
app.delete('/products/:id',async(req, res) => {
  await Products.findByIdAndDelete(req.params.id)
  res.json({
    msg: "new has been deleted"
  })

  })



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
