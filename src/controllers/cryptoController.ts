import { Request, Response } from 'express';
import Crypto from '../models/Crypto';

export const addCrypto = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, symbol, price } = req.body;
    const newCrypto = new Crypto({ name, symbol, price });
    await newCrypto.save();
    res.status(201).json(newCrypto);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
};

export const getCryptos = async (req: Request, res: Response): Promise<void> => {
  try {
    const cryptos = await Crypto.find();
    res.status(200).json(cryptos);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
};
