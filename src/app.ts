import express, { Request, Response } from 'express';

const app = express();
const port = 5000; 

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'The server was inicializate!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
