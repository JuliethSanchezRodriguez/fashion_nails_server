// controllers/CitaController.js
import Cita from '../models/Cita.js';

export const guardarCita = async (req, res) => {
  try {
    const { id_cliente, id_empleado, fecha_hora_cita, fecha_hora_servicio, estado, nota } = req.body;
    const cita = await Cita.create({ id_cliente, id_empleado, fecha_hora_cita, fecha_hora_servicio, estado, nota });
    res.json({ message: 'Cita programada correctamente', citaId: cita.id_cita });
  } catch (error) {
    console.error('Error al programar la cita:', error);
    res.status(500).json({ error: 'Hubo un error al programar la cita' });
  }
};

export const listarCita = async (req, res) => {
  try {
    const cita = await Cita.findAll();
    res.json(cita);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hubo un error al obtener  la cita' });
  }
};

export const eliminarCita = async (req, res) => {
  try {
    const citaId = req.params.id;
    const cita = await cita.findByPk(citaId);
    if (!citaId) {
      console.log('No se encontró la cita');
      return res.status(404).json({ mensaje: 'No se encontró la cita' });
    }
    await cita.destroy();
    console.log('cita eliminada con éxito');
    return res.json(true);
  } catch (error) {
    console.error('Error al eliminar la cita por ID:', error);
    throw error;
  }
};

export const actualizarCita = async (req, res) => {
  const cita = req.params.id;
  const nuevosDatos = req.body; // Los nuevos datos se envían en el cuerpo de la solicitud

  try {
    const cita = await Cita.findByPk(citaId);
    if (!cita) {
      return res.status(404).json({ mensaje: 'No se encontró la cita ' });
    }
    await cita.update(nuevosDatos);
    return res.json(cita);
  } catch (error) {
    console.error('Error al actualizarla cita por ID:', error);
    return res.status(500).json({ mensaje: 'Error en el servidor' });
  }
};

export const obtenerCita = async (req, res) => {
  const citaId = req.params.id;
  try {
    const cita = await Cita.findByPk(citaId);
    if (!cita) {
      return res.status(404).json({ mensaje: 'No se encontró la cita' });
    }
    return res.json(cita);
  } catch (error) {
    console.error('Error al obtener la cita por ID:', error);
    return res.status(500).json({ mensaje: 'Error en el servidor' });
  }
};