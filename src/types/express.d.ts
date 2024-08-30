// src/types/express.d.ts

import { Request } from 'express';

declare module 'express-serve-static-core' {
  export interface Request {
    userId?: string;
    role?: string;
  }
}
