// Import the necessary modules and classes for the router
import { Router } from "express";
// Create a new instance of the Router class
const router = Router();

// Import the controller functions for the router
import { getStaffs, createStaff, getStaff, deleteStaff, updateStaff } from "../controllers/staff.controller";

// Define the routes for the router using the HTTP verbs and the controller functions
router.route('/')
    .get(getStaffs)
    .post(createStaff);

router.route('/:staffId')
    .get(getStaff)
    .delete(deleteStaff)
    .put(updateStaff);

// Export the router as the default export of the module
export default router;

