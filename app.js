require('dotenv').config();
const express = require('express');
const indexRouter = require('./src/routes/indexRoutes');
const cors = require('cors')
const app = express();
const { seedProducts } = require('./src/seeders/productSeeder');
const { getAllProducts } = require('./src/services/productService');
const AppDataSource = require('./src/utils/db');

app.use(express.json());

app.use(cors(
    {
        origin: 'http://localhost:3001',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials: true,
    }
))

app.use(indexRouter)

const PORT = process.env.PORT || 3000;

AppDataSource.initialize().then(async () => {
    console.log('Database connected');
    await seedProducts(); 

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}).catch(error => console.log('Error during Data Source initialization', error));