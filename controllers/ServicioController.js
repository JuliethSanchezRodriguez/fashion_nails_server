// controllers/ServicioController.js
import Servicio from '../models/Servicio.js';

export const guardarServicio = async (req, res) => {
  try {
    const { id_servicio, nombre, duracion_minutos, tecnica , id_tipo_servicio } = req.body;
    const servicio = await Servicio .create({ id_servicio,nombre,duracion_minutos,tecnica,id_tipo_servicio});
    res.json({ message: 'Servicio fue programado correctamente', servicioId: servicio.id_servicio });
  } catch (error) {
    console.error('Error al programar el servicio:', error);
    res.status(500).json({ error: 'Hubo un error al programar el servicio' });
  }
};
export const obtenerServicio = async (req, res) => {
  try {
    const servicio = await Servicio.findAll();
    res.json(servicio);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hubo un error al obtener el servicio' });
  }
};