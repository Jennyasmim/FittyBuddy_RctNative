const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;


// Middleware
app.use(bodyParser.json());
app.use(cors());

// Conectar ao MongoDB Atlas
mongoose.connect('mongodb+srv://jennyasmim:84336967@registro-api.4zk9r85.mongodb.net/?retryWrites=true&w=majority&appName=Registro-api', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Definir esquema e modelo de atividade
const atividadeSchema = new mongoose.Schema({
  date: String,
  activityType: String,
  duration: Number,
});

const Atividade = mongoose.model('Atividade', atividadeSchema);

// Rota para registrar nova atividade
app.post('/api/atividades', async (req, res) => {
  try {
    const { date, activityType, duration } = req.body;
    const newAtividade = new Atividade({ date, activityType, duration });
    await newAtividade.save();
    res.status(201).send(newAtividade);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
