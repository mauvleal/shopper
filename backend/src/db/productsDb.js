const connection = require('./connection');

const findAll = async () => {
    const [products] = await connection.execute('SELECT * from products');

    return products;
};

const findById = async (code) => {
    const product = await connection.execute('SELECT * FROM products WHERE code = ?', [code]);

    return product

}

const upDate = (newdata, code) => connection.execute(
    `UPDATE products 
      SET sales_price = ? WHERE code = ?`,
    [newdata.sales_price, code],
  );

module.exports = {
    findAll,
    findById,
    upDate,
}