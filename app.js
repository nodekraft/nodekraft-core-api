const express = require('express');
const app = express();

const records = require('./records');

// Send a GET request to /resources to READ a list of resources
app.get('/resources', async (req, res)=>{
    const resources = await records.getResources();
    res.json(resources);
});
// Send a GET request to /resources/:id to READ(view) a resource
app.get('/resources/:id', async (req, res)=>{
    const resource = await records.getResources(req.params.id);
    res.json(resource);
});
// Send a POST request to /resources to  CREATE a new resource
// Send a PUT request to /resources/:id to UPDATE (edit) a resource
// Send a DELETE request to /resources/:id DELETE a resource
// Send a GET request to /resources/resource/random to READ (view) a random resource

app.listen(3000, () => console.log('Core API listening on port 3000!'));

