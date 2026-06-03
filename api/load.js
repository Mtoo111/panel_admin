import { kv } from '@vercel/kv';

export default async function handler(req, res) {
  // Permitir solo GET
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  try {
    const data = await kv.get('rpPanel');
    res.status(200).json(data || {});
  } catch (error) {
    console.error('Error al cargar datos:', error);
    res.status(500).json({ error: 'Error al cargar datos' });
  }
}
