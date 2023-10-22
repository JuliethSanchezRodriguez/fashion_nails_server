// controllers/ClienteController.js
import Cliente from '../models/Cliente.js';

export const guardarCliente = async (req, res) => {
  try {
    const { id_cliente, nombre, apellido, fecha_nacimiento, num_telefonico, email } = req.body;
    const cliente = await Cliente.create({ id_cliente, nombre, apellido, fecha_nacimiento, num_telefonico, email });
    res.json({ message: 'Cliente registrado correctamente', clientId: cliente.id_cliente });
  } catch (error) {
    console.error('Error al registrar el cliente:', error);
    res.status(500).json({ error: 'Hubo un error al registrar el cliente' });
  }
};