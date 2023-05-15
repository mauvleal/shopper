const express = require('express');
const {findAll, findById} = require('./db/productsDb')

const app = express();
app.use(express.json());

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



module.exports = app;