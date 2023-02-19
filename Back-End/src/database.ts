// Import the "createPool" function from the "mysql2/promise" module
import { createPool } from 'mysql2/promise';

// Define an asynchronous function called "connect"
export async function connect() {
    // Create a connection pool using the "createPool" function and specify the connection parameters
    const connection = await createPool({
        host: 'localhost',
        user: 'root',
        database: 'parcheciudad',
        connectionLimit: 10
    });
    // Return the connection pool
    return connection;
}
