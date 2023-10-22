// controllers/DisponibilidadEmpleadoController.js
import DisponibilidadEmpleado from '../models/DisponibilidadEmpleado.js';

export const guardarDisponibilidadEmpleado = async (req, res) => {
  try {
    const { id, id_empleado, dia_semana, mes, hora_inicio,hora_final} = req.body;
    const DisponibilidadEmpleado = await DisponibilidadEmpleado.create({ id, id_empleado, dia_semana, mes, hora_inicio,hora_final });
    res.json({ message: 'disponibilidad empleado programada correctamente',  id, id_empleado});
  } catch (error) {
    console.error('Error al programar la disponibilidad empleado:', error);
    res.status(500).json({ error: 'Hubo un error al programar la disponibilidad empleado' });
  }
};
export const obtenerDisponibilidadEmpleado = async (req, res) => {
  try {
    const disponibilidadempleado = await disponibilidadempleado.findAll();
    res.json(disponibilidadempleado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hubo un error al obtener disponibilidad empleado' });
  }
};