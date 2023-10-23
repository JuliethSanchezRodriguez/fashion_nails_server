// controllers/TipoServicioController.js
import TipoServicio from '../models/TipoServicio.js';

export const guardarTipoServicio = async (req, res) => {
  try {
    const { id, nombre } = req.body;
    const tipoServicio = await TipoServicio .create({ id,nombre});
    res.json({ message: 'Tipo de servicio fue creado correctamente', tipoServicioId: tipoServicio.id });
  } catch (error) {
    console.error('Error al programar el tipo servicio:', error);
    res.status(500).json({ error: 'Hubo un error al programar el  tipo de servicio' });
  }
};
export const listarTipoServicio = async (req, res) => {
  try {
    res.json(tiposervicio);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hubo un error al obtener el tipo de servicio  ' });
  }
};

export const eliminarTipoServicio = async (req, res) => {
  try {
    const tiposervicioId = req.params.id;
    const tiposervicio = await TipoServicio.findByPk(tiposervicioId);
    if (!tiposervicio) {
      console.log('No se encontró el de tipo servicio');
      return res.status(404).json({ mensaje: 'No se encontró el tipo de servicio  ' });
    }
    await tiposervicio.destroy();
    console.log(' tipo de servicio  eliminado con éxito');
    return res.json(true);
  } catch (error) {
    console.error('Error al eliminar el tipo de servicio por ID:', error);
    throw error;
  }
};

export const actualizarTipoServicio= async (req, res) => {
  const tipoServicioId = req.params.id;
  const nuevosDatos = req.body; 
  try {
    const tipoServicio = await TipoServicio.findByPk(tipoServicioId);
    if (!tipoServicio) {
      return res.status(404).json({ mensaje: 'No se encontró el  tipo de servicio' });
    }
    await tiposervicio.update(nuevosDatos);
    return res.json(tiposervicio);
  } catch (error) {
    console.error('Error al actualizar el tipo de servicio por ID:', error);
    return res.status(500).json({ mensaje: 'Error en el servidor' });
  }
  }

export const obtenerTipoServicio = async (req, res) => {
  try {
    const tipoServicio = await TipoServicio.findAll();
    res.json(tipoServicio);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hubo un error al obtener el tipo de servicio' });
  }
};