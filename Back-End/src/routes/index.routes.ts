// Import the necessary modules and classes for the router
import { Router } from 'express';
// Create a new instance of the Router class
const router = Router();

// Import the controller function for the router
import { indexWelcome } from '../controllers/index.controller';

// Define the route for the router using the HTTP verb and the controller function
router.route('/')
    .get(indexWelcome);

// Export the router as the default export of the module
export default router;
