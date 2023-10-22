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