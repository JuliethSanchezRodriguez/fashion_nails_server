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
export const obtenerFactura = async (req, res) => {
  try {
    const factura = await Factura.findAll();
    res.json(factura);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hubo un error al obtener la factura' });
  }
};