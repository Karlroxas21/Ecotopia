const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const News = require('./model/news.models');
const ClimateChange = require('./model/cases.model');
const ProblemTrash = require('./model/problem_trash.model');
const OutDatedEngineModel = require('./model/outdated_engine.model');
const CauseClimateChange = require('./model/cause_climate_change.model');
const EffectsClimateChange = require('./model/effects_climate_change.model');

const { async } = require('rxjs');
const history = require('connect-history-api-fallback');

const app = express();
const port = process.env.PORT || 80;
mongoose.connect('mongodb+srv://karlmarxroxas1:Mvckf9rVcnZoxP0V@website.h8t2kwr.mongodb.net/ecotopia');

// CORS Middleware
app.use(cors());

app.use(bodyParser.json());

// This causes bug in API. Enable only if dockerizing it.
// See : https://chat.openai.com/share/99b39e15-397a-496c-8689-1d023344b37d
// app.use(history());

app.use(express.static(path.join(__dirname, 'dist/ecotopia-capstone')));

app.get('/', (req, res) => {
  res.
  sendFile(path.join(__dirname, 'dist/ecotopia-capstone/index.html'));
});

// Overview of Climate Change
app.get('/overviewOfClimateChange', async(req, res) =>{
    try{
        const news = await News.find();
        res.json(news);
    }catch(err){
        console.error(err);
        res.status(500).json({ message: 'Internal server error'});
    }
});

// News & Features
app.get('/news_features', async(req, res) =>{
    try{
        const news = await News.find();
        res.json(news);
    }catch(err){
        console.error(err);
        res.status(500).json({ message: 'Internal server error'});
    }
});

// Cases 
app.get('/problems', async(req, res) =>{
    try{
        const climate_change = await ClimateChange.find();
        res.json(climate_change);
    }catch(err){
        console.error(err);
        res.status(500).json({ message: 'Internal server error'});
    }
});

// Problem with Trash
app.get('/problemtrash', async(req, res) =>{
    try{
        const problem_trash = await ProblemTrash.find();
        res.json(problem_trash);
    }catch(err){
        console.error(err);
        res.status(500).json({ message: 'Internal server error'});
    }
});

// Jeep Outdated Engine
app.get('/outdatedjeepengine', async(req, res) =>{
    try{
        const outdated_engine = await OutDatedEngineModel.find();
        res.json(outdated_engine);
    }catch(err){
        console.error(err);
        res.status(500).json({ message: 'Internal server error'});
    }
});

// Causes of Climate Change
app.get('/causesofclimatechange', async(req, res) =>{
    try{
        const cause_climate_change = await CauseClimateChange.find();
        res.json(cause_climate_change);
    }catch(err){
        console.error(err);
        res.status(500).json({ message: 'Internal server error'});
    }
});

// Effects of Climate Change
app.get('/effectsofclimatechange', async(req, res) =>{
    try{
        const effect_climate_change = await EffectsClimateChange.find();
        res.json(effect_climate_change);
    }catch(err){
        console.error(err);
        res.status(500).json({ message: 'Internal server error'});
    }
});

// Admin Problem Trash / Case 1
app.put('/admin-cases-problemtrash/:id', async (req, res) =>{
    try{
        const upstream_data = await ProblemTrash.findByIdAndUpdate(req.params.id, req.body, { new: true });

        res.send(upstream_data);
    }catch(err){
        res.status(500).send(err.message);
    }
})

app.get('/admin-cases-problemtrash', async(req, res) =>{
    try{
        const problem_trash = await ProblemTrash.find();
        res.json(problem_trash);
    }catch(err){
        console.error(err);
        res.status(500).json({ message: 'Internal server error'});
    }
});


app.listen(port, ()=>{
    console.log(`Listening on ${port}`);
})

