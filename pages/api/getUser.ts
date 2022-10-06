import fs from 'graceful-fs';
import type { NextApiRequest, NextApiResponse } from 'next';
import type { Database } from '../../types/db';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') { return res.status(405).end(); }
  const { username } = req.query;
  const db: Database = JSON.parse(fs.readFileSync('db.json', 'utf-8'));
  try {
    return res.status(200).send(JSON.stringify(db.users.find((it) => it.username === username)));
  } catch (e: any) {
    return res.status(500).send(e);
  }
}