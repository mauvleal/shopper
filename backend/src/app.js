const express = require('express');
const {findAll, findById, upDate} = require('./db/productsDb')
const cors = require('cors');

const app = express();
app.use(express.json());

app.use(cors());

app.get('/products', async (_req, res) => {
    try {
      const result = await findAll();
      res.status(200).json({result});
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: err.sqlMessage });
    }
  });

app.get('/products/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const [[result]] = await findById(id);
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(404).json({ message: 'Produto não encontrado' });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: err.sqlMessage });
    }
  });

  app.put('/products/:id', async (req, res) => {
    const { id } = req.params;
    const newData = req.body;
      
    const [result] = await upDate(id, newData);
  
    if (!result) {
      res.status(404).json({ message: 'Product not Found' });
    }
  
    res.status(201).json({ product: newData });
  });



module.exports = app;