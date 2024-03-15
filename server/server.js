import express from 'express'
import axios from 'axios'
import cors from 'cors'
import pkg from 'pg'

const { Pool } = pkg

const app = express()

// Express middleware
app.use(cors())
app.use(express.json())
const port = 5000

const pool = new Pool({
    user: 'postgres',
    host: 'host.docker.internal',
    database: 'FieldSyncDB',
    password: 'Gobeavs0820#',
    port: 5432
})

console.log('Pool:', pool)

// Fetch typicode users
app.get('/api/fetch-typicode-users', (req, res) => {
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            res.json(response.data)
        })
        .catch(error => {
            console.log(error)
            res.send(error)
        })
})

app.get('/api/init-users-db', async (req, res) => {
    try {
        // CREATE EXTENSION
        pool.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";', (err, res) => {
            if (err) {
            console.error('Error creating extension for table', err.stack);
            } else {
            console.log('Extension "uuid-ossp" created successfully');
            }
        });
        
        // CREATE TABLE
        pool.query(`
            CREATE TABLE IF NOT EXISTS users (
            id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
            user_id INTEGER NOT NULL,
            name VARCHAR NOT NULL,
            company VARCHAR NOT NULL,
            email VARCHAR NOT NULL,
            phone VARCHAR NOT NULL
            );
        `, (err, res) => {
            if (err) {
            console.error('Error creating users table:', err.stack);
            } else {
            console.log('Table "users" created successfully');
            }
        });
        res.send('Users table created successfully')
    } catch (error) {
        console.log(error)
        res.send(error)
    }
})

// Fetch users from Postgres DB
app.get('/api/fetch-users', async (req, res) => {
    try {
        const users = await pool.query('SELECT * FROM users')
        res.json(users.rows)
    } catch (error) {
        console.log(error)
        res.send(error)
    }
})

// Persist users to Postgres DB
app.post('/api/persist-users', async (req, res) => {
    const typicodeUsers = req.body
    try {
        await pool.query('DELETE FROM users')
        typicodeUsers.forEach(async user => {
            await pool.query('INSERT INTO users (user_id, name, company, email, phone) VALUES ($1, $2, $3, $4, $5)', [user.id, user.name, user.company, user.email, user.phone])
        })
        res.send('Users persisted successfully')
    } catch (error) {
        console.log(error)
        res.send(error)
    }
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})