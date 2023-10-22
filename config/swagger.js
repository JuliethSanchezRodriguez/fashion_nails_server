import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  failsOnErrors:true,
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Mi Aplicación',
      version: '1.0.0',
      description: 'Documentación de la API de Mi Aplicación',
    },
    servers: [
      {
        url: 'http://localhost:3001', // Ajusta la URL de tu servidor Express
      },
    ],
  },
  apis: ['./swagger.json'], // Ruta a tus controladores
};

const specs = swaggerJsdoc(options);

export { specs, swaggerUi };
