// controllers/DisponibilidadEmpleadoController.js
import DisponibilidadEmpleado from '../models/DisponibilidadEmpleado.js';

export const guardarDisponibilidadEmpleado = async (req, res) => {
  try {
    const { id, id_empleado, dia_semana, mes, hora_inicio,hora_final} = req.body;
    const disponibilidadEmpleado = await DisponibilidadEmpleado.create({ id, id_empleado, dia_semana, mes, hora_inicio,hora_final });
    res.json({ message: 'disponibilidad empleado programada correctamente',  id, id_empleado});
  } catch (error) {
    console.error('Error al programar la disponibilidad empleado:', error);
    res.status(500).json({ error: 'Hubo un error al programar la disponibilidad empleado' });
  }
};
export const listarDisponibilidadEmpleado= async (req, res) => {
  try {
    const disponibilidadempleado = await DisponibilidadEmpleado.findAll();
    res.json(disponibilidadempleado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hubo un error al obtener  la disponibilidad del empleado' });
  }
};

export const eliminarDisponibilidadEmpleado = async (req, res) => {
  try {
    const disponibilidadempleadoId = req.params.id;
    const disponibilidadempleado = await DisponibilidadEmpleado.findByPk(disponibilidadempleadoId);
    if (!disponibilidadempleadoId) {
      console.log('No se encontró la disponibilidad de empleado ');
      return res.status(404).json({ mensaje: 'No se encontró la disponibilidad de empleado ' });
    }
    await disponibilidadempleado.destroy();
    console.log('disponibilidad de empleado eliminado con éxito');
    return res.json(true);
  } catch (error) {
    console.error('Error al eliminar la disponibilidad de empleado  por ID:', error);
    throw error;
  }
};

export const actualizarDisponibilidadEmpleado = async (req, res) => {
  const disponibilidadempleado  = req.params.id;
  const nuevosDatos = req.body; 

  try {
    const disponibilidadempleado = await DisponibilidadEmpleado.findByPk(disponibilidadempleadoId);
    if (!disponibilidadempleado) {
      return res.status(404).json({ mensaje: 'No se encontró la disponibilidad empleado ' });
    }
    await disponibilidadempleado.update(nuevosDatos);
    return res.json(disponibilidadempleado);
  } catch (error) {
    console.error('Error al actualizar la disponibilidad empleado por ID:', error);
    return res.status(500).json({ mensaje: 'Error en el servidor' });
  }
};

export const obtenerDisponibilidadEmpleado = async (req, res) => {
  try {
    const disponibilidadempleado = await DisponibilidadEmpleado.findAll();
    res.json(disponibilidadempleado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hubo un error al obtener disponibilidad empleado' });
  }
};