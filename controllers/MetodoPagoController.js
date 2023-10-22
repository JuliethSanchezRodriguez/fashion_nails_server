// controllers/MetodoPagoController.js
import { json } from 'sequelize';
import MetodoPago from '../models/MetodoPago.js';

export const guardarMetodoPago = async (req, res) => {
  try {
    if (req.isAuthenticated()) {
      const { id_metodo_pago, nombre } = req.body;
      const metodoPago = await MetodoPago.create({ id_metodo_pago, nombre });
      res.json({ message: 'Metodo pago creado correctamente', metodoPagoId: metodoPago.id_metodo_pago });
    } else {
      res.redirect('/login');
    }
  } catch (error) {
    console.error('Error al crear el metodo de pago:', error);
    res.status(500).json({ error: 'Hubo un error al crear el metodo de pago' });
  }
};

export const listarMetodosPago = async (req, res) => {
  try {
    const metodosPago = await MetodoPago.findAll();
    res.json(metodosPago);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hubo un error al obtener los metodos de pago' });
  }
};

export const eliminarMetodoPago = async (req, res) => {
  try {
    const metodoPagoId = req.params.id;
    const metodoPago = await MetodoPago.findByPk(metodoPagoId);
    if (!metodoPago) {
      console.log('No se encontró el método de pago');
      return res.status(404).json({ mensaje: 'No se encontró el método de pago' });
    }
    await metodoPago.destroy();
    console.log('Método de pago eliminado con éxito');
    return res.json(true);
  } catch (error) {
    console.error('Error al eliminar el método de pago por ID:', error);
    throw error;
  }
};

export const actualizarMetodoPago = async (req, res) => {
  const metodoPagoId = req.params.id;
  const nuevosDatos = req.body; // Los nuevos datos se envían en el cuerpo de la solicitud

  try {
    const metodoPago = await MetodoPago.findByPk(metodoPagoId);
    if (!metodoPago) {
      return res.status(404).json({ mensaje: 'No se encontró el método de pago' });
    }
    await metodoPago.update(nuevosDatos);
    return res.json(metodoPago);
  } catch (error) {
    console.error('Error al actualizar el método de pago por ID:', error);
    return res.status(500).json({ mensaje: 'Error en el servidor' });
  }
};

export const obtenerMetodoPago = async (req, res) => {
  const metodoPagoId = req.params.id;
  try {
    const metodoPago = await MetodoPago.findByPk(metodoPagoId);
    if (!metodoPago) {
      return res.status(404).json({ mensaje: 'No se encontró el método de pago' });
    }
    return res.json(metodoPago);
  } catch (error) {
    console.error('Error al obtener el método de pago por ID:', error);
    return res.status(500).json({ mensaje: 'Error en el servidor' });
  }
};