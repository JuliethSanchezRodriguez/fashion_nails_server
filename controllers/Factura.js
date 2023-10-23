// controllers/FacturaController.js
import Factura from '../models/Factura.js';

export const guardarFactura = async (req, res) => {
  try {
    const { id_factura, id_cita, id_metodo_pago } = req.body;
    const factura = await factura .create({  id_factura, id_cita, id_metodo_pago});
    res.json({ message: 'la factura fue programada correctamente',facturaId: factura.id_factura });
  } catch (error) {
    console.error('Error al programar la factura:', error);
    res.status(500).json({ error: 'Hubo un error al programar la factura' });
  }
};
export const listarFactura = async (req, res) => {
  try {
    const factura = await factura.findAll();
    res.json(factura);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hubo un error al obtener la factura' });
  }
};

export const eliminarFactura = async (req, res) => {
  try {
    const facturaId = req.params.id;
    const factura = await factura.findByPk(facturaId);
    if (facturaId) {
      console.log('No se encontró la factura');
      return res.status(404).json({ mensaje: 'No se encontró la factura' });
    }
    awaitfactura.destroy();
    console.log('factura eliminada con éxito');
    return res.json(true);
  } catch (error) {
    console.error('Error al eliminar factura por ID:', error);
    throw error;
  }
};

export const actualizarFactura = async (req, res) => {
  const factura = req.params.id;
  const nuevosDatos = req.body;

  try {
    const factura = await Factura.findByPk(facturaId);
    if (!factura) {
      return res.status(404).json({ mensaje: 'No se encontró la factura ' });
    }
    await factura.update(nuevosDatos);
    return res.json(factura);
  } catch (error) {
    console.error('Error al actualizar la factura por ID:', error);
    return res.status(500).json({ mensaje: 'Error en el servidor' });
  }
};
export const obtenerFactura = async (req, res) => {
  try {
    const factura = await Factura.findAll();
    res.json(factura);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hubo un error al obtener la factura' });
  }
};