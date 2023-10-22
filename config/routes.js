// routes.js
import express from 'express';
import { obtenerEmpleados } from '../controllers/EmpleadoController.js';
import { guardarCliente } from '../controllers/ClienteController.js';
import { actualizarMetodoPago, eliminarMetodoPago, guardarMetodoPago, listarMetodosPago, obtenerMetodoPago } from '../controllers/MetodoPagoController.js';
import { guardarServicio, obtenerServicio } from '../controllers/ServicioController.js';
import { guardarTipoServicio, obtenerTipoServicio } from '../controllers/TipoServicioController.js';
import { guardarServicioPorCita, obtenerServicioPorCita } from '../controllers/ServicioPorCitaController .js';
import { guardarCita } from '../controllers/CitaController.js';
import { guardarFactura, obtenerFactura } from '../controllers/Factura.js';

const router = express.Router();

router.get('/empleados', obtenerEmpleados);
router.post('/clientes', guardarCliente);
router.post('/citas',guardarCita);
/********Metodos de pago**********/
router.get('/metodos_pago', listarMetodosPago);
router.post('/metodos_pago', guardarMetodoPago);
router.get('/metodos_pago/:id', obtenerMetodoPago);
router.put('/metodos_pago/:id', actualizarMetodoPago);
router.delete('/metodos_pago/:id', eliminarMetodoPago);
/********************************/
router.get('/servicios', obtenerServicio);
router.post('/servicios', guardarServicio);
router.get('/tipos_servicio',obtenerTipoServicio);
router.post('/tipos_servicio', guardarTipoServicio);
router.get('/servicios_por_cita',obtenerServicioPorCita);
router.post('/servicios_por_cita', guardarServicioPorCita);
router.get('/factura',obtenerFactura);
router.post('/factura',guardarFactura);



export default router;