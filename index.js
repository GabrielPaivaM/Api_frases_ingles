const express = require('express');
const server = express();
const port = 3000;
const fs = require('fs');

const exerciciosData = JSON.parse(fs.readFileSync('./src/data/exercises.json'));

server.get('/random_exercise/:level', (req, res) => {
    const level = parseInt(req.params.level);
    if (level < 1 || level > 3) {
        return res.status(400).json({ error: 'Invalid level...' });
    }

    let selectedLevel;
    switch (level) {
        case 1:
            selectedLevel = 'basicos';
            break;
        case 2:
            selectedLevel = 'intermediarios';
            break;
        case 3:
            selectedLevel = 'avancados';
            break;
    }

    const exercises = exerciciosData[selectedLevel];
    randomExercise = exercises[Math.floor(Math.random() * exercises.length)];

    res.json({ random_exercise: randomExercise });
})

server.listen(port, () => {
    console.log('server is working')
});