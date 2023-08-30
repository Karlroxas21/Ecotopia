const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const history = require('connect-history-api-fallback');

// Routes

// Admin Cases Routes
const admin_case_routes = require('./routes/admin/cases/cases-routes');
const admin_causes_climate_change_routes = require('./routes/admin/cases/causes-climate-change-routes');
const admin_effects_climate_change_routes = require('./routes/admin/cases/effects-climate-change-routes');
const admin_outdated_engine_routes = require('./routes/admin/cases/outdated-engine-routes');
const admin_problem_trash_routes = require('./routes/admin/cases/problem-trash-routes');

// Admin Solutions Routes
const admin_other_solutions_routes = require('./routes/admin/solutions/other-solutions-routes');
const admin_responding_climate_change_routes = require('./routes/admin/solutions/responding-climate-change-routes');
const admin_solutions_routes = require('./routes/admin/solutions/solutions-routes');
const admin_y_take_actions_routes = require('./routes/admin/solutions/y-take-actions-routes');

// Admin Current Issue
const admin_current_issues_ph_routes = require('./routes/admin/current-issues-ph-routes');

// Admin Assessment
const admin_assessment_routes = require('./routes/admin/assessment-routes');

// Cases
const cases_routes = require('./routes/cases/cases-routes');
const causes_climate_change_routes = require('./routes/cases/causes-climate-change-routes');
const effects_climate_change_routes = require('./routes/cases/effects-climate-change-routes');
const jeep_outdated_engine_routes = require('./routes/cases/jeep-outdated-engine-routes');
const problem_trash_routes = require('./routes/cases/problem-trash-routes');

// Solutions
const other_solutions_routes = require('./routes/solutions/other-solutions-routes');
const responding_climate_change_routes = require('./routes/solutions/responding-climate-change');
const solutions_routes = require('./routes/solutions/solutions-routes');
const y_take_action_routes = require('./routes/solutions/y_take_action-routes');

// Current Issues PH 
const current_issues_ph_routes = require('./routes/current-issues-ph-routes');

// News & Features
const news_features_routes = require('./routes/news-features-routes');

// Overview of Climate Change
const overview_climate_change_routes = require('./routes/overview-climate-change-routes');

// Assessments
const assessment_trivia = require('./routes/assessment-routes');

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

// Admin Cases
app.use('/', admin_case_routes );
app.use('/', admin_causes_climate_change_routes );
app.use('/', admin_effects_climate_change_routes );
app.use('/', admin_outdated_engine_routes );
app.use('/', admin_problem_trash_routes );

// Admin Solutions Routes
app.use('/', admin_other_solutions_routes );
app.use('/', admin_responding_climate_change_routes );
app.use('/', admin_solutions_routes );
app.use('/', admin_y_take_actions_routes );

// Admin Current Issue
app.use('/', admin_current_issues_ph_routes );

// Admin Assessment
app.use('/', admin_assessment_routes);

// Cases
app.use('/', cases_routes );
app.use('/', causes_climate_change_routes );
app.use('/', effects_climate_change_routes );
app.use('/', jeep_outdated_engine_routes );
app.use('/', problem_trash_routes );

// Solutions
app.use('/', other_solutions_routes );
app.use('/', responding_climate_change_routes );
app.use('/', solutions_routes );
app.use('/', y_take_action_routes );

// Current Issues PH
app.use('/', current_issues_ph_routes );

// News & Features
app.use('/', news_features_routes );

// Overview of Climate Change
app.use('/', overview_climate_change_routes );

// Assessment
app.use('/', assessment_trivia);

app.listen(port, ()=>{
    console.log(`Listening on ${port}`);
})

