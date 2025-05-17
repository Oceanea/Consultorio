const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('¡Servidor funcionando correctamente!');
});


// Rutas
app.use('/api/pacientes', require('./routes/pacientes'));
app.use('/api/medicos', require('./routes/medicos'));
app.use('/api/citas', require('./routes/citas'));
app.use('/api/consultas', require('./routes/consultas'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});
