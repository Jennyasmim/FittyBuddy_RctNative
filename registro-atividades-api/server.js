const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect(`mongodb+srv://Jennyasmim:84336967@registro-api.4zk9r85.mongodb.net/registro-api?retryWrites=true&w=majority`)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Definir esquema e modelo de atividade
const atividadeSchema = new mongoose.Schema({
  date: String,
  activityType: String,
  duration: Number,
});

const Atividade = mongoose.model('Atividade', atividadeSchema);

// Rota para registrar nova atividade
app.post('/api/atividades/', async (req, res) => {
  try {
    console.log('Request body:', req.body);
    const { date, activityType, duration } = req.body;
    const newAtividade = new Atividade({ date, activityType, duration });
    const savedAtividade = await newAtividade.save();
    console.log('Saved activity:', savedAtividade);
    res.status(201).send(savedAtividade);
  } catch (error) {
    console.error('Error saving activity:', error);
    res.status(400).send(error);
  }
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
