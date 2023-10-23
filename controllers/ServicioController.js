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
export const listarServicio = async (req, res) => {
  try {
    const servicio = await Servicio.findAll();
    res.json(servicio);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hubo un error al obtener el servicio' });
  }
};

export const eliminarServicio = async (req, res) => {
  try {
    const servicioId = req.params.id;
    const servicio = await Servicio.findByPk(servicioId);
    if (!servicio) {
      console.log('No se encontró el servicio');
      return res.status(404).json({ mensaje: 'No se encontró el servicio ' });
    }
    await servicio.destroy();
    console.log('servicio eliminado con éxito');
    return res.json(true);
  } catch (error) {
    console.error('Error al eliminar el servicio por ID:', error);
    throw error;
  }
};

export const actualizarServicio = async (req, res) => {
  const servicioId = req.params.id;
  const nuevosDatos = req.body; 
  try {
    const servicio = await Servicio.findByPk(servicioId);
    if (!servicio) {
      return res.status(404).json({ mensaje: 'No se encontró el servicio' });
    }
    await servicio.update(nuevosDatos);
    return res.json(servicio);
  } catch (error) {
    console.error('Error al actualizar el servicio por ID:', error);
    return res.status(500).json({ mensaje: 'Error en el servidor' });
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