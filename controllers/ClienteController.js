// controllers/ClienteController.js
import Cliente from '../models/Cliente.js';

export const guardarCliente = async (req, res) => {
  try {
    if(req.isAuthenticated()){
    const { id_cliente, nombre, apellido, fecha_nacimiento, num_telefonico, email } = req.body;
    const cliente = await Cliente.create({ id_cliente, nombre, apellido, fecha_nacimiento, num_telefonico, email });
    res.json({ message: 'Cliente registrado correctamente', clientId: cliente.id_cliente });
    }else{
      res.redirect('/login');
    }
  } catch (error) {
    console.error('Error al registrar el cliente:', error);
    res.status(500).json({ error: 'Hubo un error al registrar el cliente' });
  }
};
export const listarCliente = async (req, res) => {
  try {
    const cliente = await Cliente.findAll();
    res.json(cliente);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hubo un error al obtener el cliente' });
  }
};

export const eliminarCliente = async (req, res) => {
  try {
    const clienteId = req.params.id;
    const cliente = await Cliente.findByPk(clienteId);
    if (!clienteId) {
      console.log('No se encontró el cliente');
      return res.status(404).json({ mensaje: 'No se encontró el cliente' });
    }
    await cliente.destroy();
    console.log('cliente eliminado con éxito');
    return res.json(true);
  } catch (error) {
    console.error('Error al eliminar el cliente por ID:', error);
    throw error;
  }
};

export const actualizarCliente = async (req, res) => {
  const clientId = req.params.id;
  const nuevosDatos = req.body;

  try {
    const cliente = await Cliente.findByPk(clientId);
    if (!cliente) {
      return res.status(404).json({ mensaje: 'No se encontró el cliente ' });
    }
    await cliente.update(nuevosDatos);
    return res.json(cliente);
  } catch (error) {
    console.error('Error al actualizar el cliente por ID:', error);
    return res.status(500).json({ mensaje: 'Error en el servidor' });
  }
};

export const obtenerCliente = async (req, res) => {
  const clienteId = req.params.id;
  try {
    const cliente = await Cliente.findByPk(clienteId);
    if (!clienteId) {
      return res.status(404).json({ mensaje: 'No se encontró el cliente ' });
    }
    return res.json(cliente);
  } catch (error) {
    console.error('Error al obtener el cliente por ID:', error);
    return res.status(500).json({ mensaje: 'Error en el servidor' });
  }
};