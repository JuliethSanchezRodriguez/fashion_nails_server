// controllers/EmpleadoController.js
import Empleado from '../models/Empleado.js';

export const obtenerEmpleados = async (req, res) => {
  try {
    if(req.isAuthenticated()){
      const empleados = await Empleado.findAll();
      res.json(empleados);
    }else{
      res.redirect('/login');
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hubo un error al obtener los empleados' });
  }
};