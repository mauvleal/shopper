const app = require('./app');
const connection = require('./db/connection');

const PORT = 3001;

app.listen(PORT, async () => {
    console.log(`API Shopper_api está sendo executada na porta ${PORT}`);
  
   // Testando a comunicação com o MySQL
    const [result] = await connection.execute('SELECT 1');
    if (result) {
      console.log('MySQL connection OK');
    }
  });
  