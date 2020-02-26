const express = require('express');
const app = express();

app.listen(3333, () => {
    console.log(`Server running on port 3333`)
});

const rootController = require('./routes/index');
const catController = require('./routes/cat');
const dogController = require('./routes/dog');
const fooController = require('./routes/foo');
const personController = require('./routes/person');

app.use('/', rootController);
app.use('/cat', catController);
app.use('/dog', dogController);
app.use('/foo', fooController);
app.use('/person', personController);