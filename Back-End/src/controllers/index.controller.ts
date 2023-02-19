import { Request, Response } from "express";

// Controller function for handling the welcome message
export function indexWelcome (req: Request, res: Response): Response{
    return res.json('Welcome to my API');
}
