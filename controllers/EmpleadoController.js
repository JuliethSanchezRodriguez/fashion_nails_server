// controllers/EmpleadoController.js
import Empleado from '../models/Empleado.js';

export const guardarEmpleado = async (req, res) => {
  try {
    const {id_empleado, nombre, apellido, num_telefonico,email,ocupacion} = req.body;
    const empleado = await Empleado.create({ id_empleado, nombre, apellido, num_telefonico,email,ocupacion,image });
    res.json({ message: 'empleado programado correctamente' ,id_empleado});
  } catch (error) {
    console.error('Error al programar el empleado:', error);
    res.status(500).json({ error: 'Hubo un error al programar el empleado' });
  }
};
export const listarEmpleado = async (req, res) => {
  try {
    const empleado = await Empleado.findAll();
    res.json(empleado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hubo un error al obtener el empleado' });
  }
};

export const eliminarEmpleado = async (req, res) => {
  try {
    const empleadoId = req.params.id;
    const empleado = await Empleado.findByPk(empleadoId);
    if (!empleadoId) {
      console.log('No se encontró el empleado');
      return res.status(404).json({ mensaje: 'No se encontró el empleado' });
    }
    await empleado.destroy();
    console.log('empleado eliminado con éxito');
    return res.json(true);
  } catch (error) {
    console.error('Error al eliminar el empleadopor ID:', error);
    throw error;
  }
};

export const actualizarEmpleado = async (req, res) => {
  const empleadoId = req.params.id;
  const nuevosDatos = req.body;

  try {
    const empleado = await Empleado.findByPk(empleadoId);
    if (!empleado) {
      return res.status(404).json({ mensaje: 'No se encontró el empleado ' });
    }
    await empleado.update(nuevosDatos);
    return res.json(empleado);
  } catch (error) {
    console.error('Error al actualizar el empleado por ID:', error);
    return res.status(500).json({ mensaje: 'Error en el servidor' });
  }
};
export const obtenerEmpleado = async (req, res) => {
  try {
    if(req.isAuthenticated()){
      const obtenerEmpleado = await ObtenerEmpleado.findAll();
      res.json(obtenerEmpleado);
    }else{
      res.redirect('/login');
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hubo un error al obtener los empleados' });
    }
  };