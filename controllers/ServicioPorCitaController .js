// controllers/ServicioPorCitaController.js
import ServicioPorCita from '../models/ServicioPorCita.js';

export const guardarServicioPorCita = async (req, res) => {
  try {
    const { id_cita, id_servicio } = req.body;
    const servicioPorCita = await ServicioPorCita .create({id_cita, id_servicio});
    res.json({ message: 'Servicio Por Cita fue creado correctamente',servicioporcitaId: servicioPorCita.id });
  } catch (error) {
    console.error('Error al programar el Servicio Por Cita:', error);
    res.status(500).json({ error: 'Hubo un error al programar el Servicio Por Cita' });
  }
};
export const listarServicioPorCita = async (req, res) => {
  try {
    res.json(servicioporcita);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hubo un error al obtener el servicio por cita ' });
  }
};

export const eliminarServicioPorCita = async (req, res) => {
  try {
    const servicioporcitaId = req.params.id;
    const servicioporcita = await ServicioPorCita.findByPk(servicioporcitaId);
    if (!servicioporcita) {
      console.log('No se encontró el servicio por cita');
      return res.status(404).json({ mensaje: 'No se encontró el servicio por cita ' });
    }
    await servicioporcita.destroy();
    console.log('servicio por cita eliminado con éxito');
    return res.json(true);
  } catch (error) {
    console.error('Error al eliminar el servicio por cita por ID:', error);
    throw error;
  }
};

export const actualizarServicioPorCita = async (req, res) => {
  const servicioporcitaId = req.params.id;
  const nuevosDatos = req.body; // Los nuevos datos se envían en el cuerpo de la solicitud

  try {
    const servicioporcita = await ServicioPorCita.findByPk(servicioporcitaId);
    if (!servicioporcita) {
      return res.status(404).json({ mensaje: 'No se encontró el servicio por cita' });
    }
    await servicioporcita.update(nuevosDatos);
    return res.json(servicioporcita);
  } catch (error) {
    console.error('Error al actualizar el servicio por cita  por ID:', error);
    return res.status(500).json({ mensaje: 'Error en el servidor' });
  }
};
export const obtenerServicioPorCita = async (req, res) => {
  try {
    const servicioPorCita = await ServicioPorCita.findAll();
    res.json(servicioPorCita);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hubo un error al obtener el Servicio Por Cita' });
  }
};