import fs from 'graceful-fs';
import type { NextApiRequest, NextApiResponse } from 'next';
import type { Database } from '../../types/db';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') { return res.status(405).end(); }
  try {
    const { location, pronouns, website, timezone, username } = req.body;
    const db: Database = JSON.parse(fs.readFileSync('db.json', 'utf-8'));
    db.users.push({ location, pronouns, website, timezone, username });
    fs.writeFileSync('db.json', JSON.stringify(db, null, 2))
    return res.status(200).end();
  } catch (e: any) {
    return res.status(500).send(e);
  }
}
