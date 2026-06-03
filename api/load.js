import { Redis } from '@upstash/redis';

const redis = Redis.fromEnv();

export default async function handler(req, res) {
  try {
    const data = await redis.get('rpPanel');
    res.status(200).json(data || {});
  } catch (error) {
    console.error('Error al cargar datos:', error);
    res.status(500).json({ error: 'Error al cargar datos' });
  }
}
