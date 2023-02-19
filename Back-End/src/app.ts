// Import the necessary modules and classes for the application
import express, { Application } from 'express';
import morgan from 'morgan';

// Import the route handlers for the application
import IndexRoutes from './routes/index.routes';
import StaffRoutes from './routes/staff.routes';

// Define a class called "App" for the application
export class App {

    // Define a private property called "app" that holds an instance of the Express application
    private app: Application;

    // Define a constructor for the class that takes an optional port number or string as a parameter
    constructor(private port?: number | string) {
        // Initialize the Express application
        this.app = express();
        // Call the "settings" method to configure the application settings
        this.settings();
        // Call the "middlewares" method to add middleware functions to the application
        this.middlewares();
        // Call the "routes" method to add route handlers to the application
        this.routes();
    }

    // Define a method called "settings" to configure the application settings
    settings() {
        // Set the "port" setting of the application to the value of the "port" property of the class,
        // or the value of the "PORT" environment variable, or the default value of 3000
        this.app.set('port', this.port || process.env.PORT || 3000)
    }

    // Define a method called "middlewares" to add middleware functions to the application
    middlewares() {
        // Add the "morgan" middleware function with the "dev" format to log HTTP requests and responses
        this.app.use(morgan('dev'));
        // Add the "express.json" middleware function to parse JSON request bodies
        this.app.use(express.json());
    }

    // Define a method called "routes" to add route handlers to the application
    routes() {
        // Add the "IndexRoutes" handler to the application
        this.app.use(IndexRoutes);
        // Add the "StaffRoutes" handler to the application with the base path of "/staffs"
        this.app.use('/staffs', StaffRoutes);
    }

    // Define an asynchronous method called "listen" to start the application
    async listen() {
        // Call the "listen" method of the Express application with the port number from the "port" setting
        await this.app.listen(this.app.get('port'));
        // Log a message to indicate that the server has started on the specified port
        console.log('Server on port', this.app.get('port'));
    }

}
