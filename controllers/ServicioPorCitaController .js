// controllers/ServicioPorCitaController.js
import ServicioPorCita from '../models/ServicioPorCita.js';

export const guardarServicioPorCita = async (req, res) => {
  try {
    const { id,id_cita, id_servicio } = req.body;
    const ServicioPorCita = await ServicioPorCita .create({id,id_cita, id_servicio});
    res.json({ message: 'Servicio Por Cita fue creado correctamente',id,id_cita, id_servicio });
  } catch (error) {
    console.error('Error al programar el Servicio Por Cita:', error);
    res.status(500).json({ error: 'Hubo un error al programar el Servicio Por Cita' });
  }
};
export const obtenerServicioPorCita = async (req, res) => {
  try {
    const ServicioPorCita = await ServicioPorCita.findAll();
    res.json(ServicioPorCita);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hubo un error al obtener el Servicio Por Cita' });
  }
};