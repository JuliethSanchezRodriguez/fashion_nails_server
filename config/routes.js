// routes.js
import express from 'express';
import { actualizarEmpleado, eliminarEmpleado, guardarEmpleado, listarEmpleado, obtenerEmpleado} from '../controllers/EmpleadoController.js';
import { actualizarCliente, eliminarCliente, guardarCliente, listarCliente, obtenerCliente } from '../controllers/ClienteController.js';
import { actualizarMetodoPago, eliminarMetodoPago, guardarMetodoPago, listarMetodosPago, obtenerMetodoPago } from '../controllers/MetodoPagoController.js';
import { actualizarServicio, eliminarServicio, guardarServicio, listarServicio, obtenerServicio } from '../controllers/ServicioController.js';
import { actualizarTipoServicio, eliminarTipoServicio, guardarTipoServicio, listarTipoServicio, obtenerTipoServicio } from '../controllers/TipoServicioController.js';
import { actualizarServicioPorCita, eliminarServicioPorCita, guardarServicioPorCita, listarServicioPorCita, obtenerServicioPorCita } from '../controllers/ServicioPorCitaController .js';
import { actualizarCita, eliminarCita, guardarCita, listarCita, obtenerCita } from '../controllers/CitaController.js';
import { actualizarFactura, eliminarFactura, guardarFactura, listarFactura, obtenerFactura } from '../controllers/Factura.js';
import { actualizarDisponibilidadEmpleado, eliminarDisponibilidadEmpleado, guardarDisponibilidadEmpleado, listarDisponibilidadEmpleado, obtenerDisponibilidadEmpleado } from '../controllers/DisponibilidadEmpleadoController.js';

const router = express.Router();
/********Clientes**********/
router.get('/clientes', listarCliente);
router.post('/clientes', guardarCliente);
router.get('/clientes/:id', obtenerCliente);
router.put('/clientes/:id', actualizarCliente);
router.delete('/clientes/:id', eliminarCliente);

/********Citas**********/
router.get('/citas',listarCita);
router.post('/citas',guardarCita);
router.get('/citas/:id',obtenerCita);
router.put('/citas/:id',actualizarCita);
router.delete('/citas/:id',eliminarCita);

/********Metodos de pago**********/
router.get('/metodos_pago', listarMetodosPago);
router.post('/metodos_pago', guardarMetodoPago);
router.get('/metodos_pago/:id', obtenerMetodoPago);
router.put('/metodos_pago/:id', actualizarMetodoPago);
router.delete('/metodos_pago/:id', eliminarMetodoPago);

/**********Servicios***********/
router.get('/servicios',listarServicio);
router.post('/servicios', guardarServicio);
router.get('/servicios/:id', obtenerServicio);
router.put('/servicios/:id', actualizarServicio);
router.delete('/servicios/:id', eliminarServicio);

/********Tipos  de servicio **********/
router.get('/tipos_servicios',listarTipoServicio);
router.post('/tipos_servicio', guardarTipoServicio);
router.get('/tipos_servicio/:id',obtenerTipoServicio);
router.put('/tipos_servicio/:id',actualizarTipoServicio);
router.delete('/tipos_servicio/:id',eliminarTipoServicio);

/********Servicios por cita **********/
router.get('/servicios_por_cita',listarServicioPorCita);
router.post('/servicios_por_cita', guardarServicioPorCita);
router.get('/servicios_por_cita/:id',obtenerServicioPorCita);
router.put('/servicios_por_cita/:id',actualizarServicioPorCita);
router.delete('/servicios_por_cita/:id',eliminarServicioPorCita);

/******** Factura **********/
router.get('/factura',listarFactura);
router.post('/factura',guardarFactura);
router.get('/factura/:id',obtenerFactura);
router.put('/factura/:id',actualizarFactura);
router.delete('/factura/:id',eliminarFactura);


/********Empleado **********/
router.get('/empleados',listarEmpleado);
router.post('/empleados',guardarEmpleado);
router.get('/empleados/:id',obtenerEmpleado);
router.put('/empleados/:id',actualizarEmpleado);
router.delete('/empleados/:id',eliminarEmpleado);

/******** Disponibilidad Empleado **********/
router.get('/disponibilidad_empleado',listarDisponibilidadEmpleado);
router.post('/disponibilidad_empleado',guardarDisponibilidadEmpleado);
router.get('/disponibilidad_empleado/:id',obtenerDisponibilidadEmpleado);
router.put('/disponibilidad_empleado/:id',actualizarDisponibilidadEmpleado);
router.delete('/disponibilidad_empleado/:id',eliminarDisponibilidadEmpleado);





export default router;