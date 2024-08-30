import { Request, Response, NextFunction } from 'express';

const roleMiddleware = (requiredRole: string) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    if (req.role !== requiredRole) {
      res.status(403).json({ message: 'Access denied' });
      return;  // Ensure that the function exits after sending the response
    }
    next();  // Proceed to the next middleware or route handler
  };
};

export default roleMiddleware;
