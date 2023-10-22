// app.js
import express from 'express';
import bcrypt from 'bcrypt';
import cors from 'cors'; 
import { swaggerUi } from './config/swagger.js';
import definitions from './config/definitions.json' assert {type: 'json'};
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import session from 'express-session';
import routes from './config/routes.js';
import flash from 'express-flash';
import Usuario from './models/Usuario.js';

const app = express();

app.use(cors());
app.use(express.json());

// Configurar middleware
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: 'phone_a54',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

// Configura la estrategia de autenticación local
passport.use(new LocalStrategy(
  (usuario, password, done) => {
    Usuario.findOne({ where: { usuario: usuario } })
      .then(usuario => {
        if (!usuario) {
          return done(null, false, { message: 'Usuario no encontrado' });
        }
        bcrypt.compare(password, usuario.password, (err, isMatch) => {
          if (err) {
            return done(err);
          }
          if (isMatch) {
            return done(null, usuario);
          } else {
            return done(null, false, { message: 'Contraseña incorrecta' });
          }
        });
      })
      .catch(err => done(err));
  }
));

passport.serializeUser((usuario, done) => {
  done(null, usuario.usuario);
});

passport.deserializeUser((usuario, done) => {
  Usuario.findOne({ where: { usuario: usuario } })
  .then(aux => {
    if (aux) {
      return done(null, { aux });
    }else {
      return done(new Error('Usuario no encontrado'), null);
    }
  });
});

// Guardar un nuevo usuario en la base de datos
app.post('/registrar', (req, res) => {
  const { usuario, password } = req.body;
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      // Maneja errores
    } else {
      Usuario.create({ usuario, password: hash })
        .then(usuario => {
          // Usuario creado con éxito
          res.send('Usuario registrado con éxito.');
        })
        .catch(err => {
          // Maneja errores de la base de datos
        });
    }
  });
});

app.get('/login', (req, res) => res.send('Por favor, inicia sesión.'));

app.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      return next(err); // will generate a 500 error
    }
    // Generate a JSON response reflecting authentication status
    if (! user) {
      return res.send(401,{ success : false, message : 'authentication failed' });
    }
    req.login(user, function(err){
      if(err){
        return next(err);
      }
      return res.send({ success : true, message : 'authentication succeeded' });        
    });
  })(req, res, next);
});

// Ruta protegida, solo accesible para usuarios autenticados
app.get('/home', (req, res) => {
  if (req.isAuthenticated()) {
    res.send('¡Bienvenido a la home!');
  } else {
    res.redirect('/login');
  }
});

app.use('/docs', swaggerUi.serve, swaggerUi.setup(definitions));

app.use('/api', routes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});