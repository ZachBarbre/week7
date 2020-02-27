const express = require('express');
const es6Renderer = require('express-es6-template-engine');
const app = express();

app.listen(3333, () => {
    console.log(`Server running on port 3333`)
});
app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');

const rootController = require('./routes/index');
const catController = require('./routes/cat');
const dogController = require('./routes/dog');
const fooController = require('./routes/foo');
const personController = require('./routes/person');
const ceosController = require('./routes/ceosRoute');

app.use('/', rootController);
app.use('/cat', catController);
app.use('/dog', dogController);
app.use('/foo', fooController);
app.use('/person', personController);
app.use('/ceos', ceosController);