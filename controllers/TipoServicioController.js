// controllers/TipoServicioController.js
import TipoServicio from '../models/TipoServicio.js';

export const guardarTipoServicio = async (req, res) => {
  try {
    const { id, nombre } = req.body;
    const tipoServicio = await TipoServicio .create({ id,nombre});
    res.json({ message: 'Tipo Servicio fue creado correctamente', tipoServicioId: tipoServicio.id });
  } catch (error) {
    console.error('Error al programar el tipo servicio:', error);
    res.status(500).json({ error: 'Hubo un error al programar el tipo servicio' });
  }
};
export const obtenerTipoServicio = async (req, res) => {
  try {
    const tipoServicio = await TipoServicio.findAll();
    res.json(tipoServicio);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hubo un error al obtener el tipo servicio' });
  }
};