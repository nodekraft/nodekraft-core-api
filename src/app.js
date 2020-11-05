
import express from 'express';
import bodyParser from 'body-parser';
import { getResources, createResource, updateResource, deleteResource, getRandomResource } from './api/records';

const app = express();
const router = express.Router

// Configure express to use body-parser as middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Send a GET request to /resources to READ a list of resources
app.get('/resources', async (req, res) => {
    const resources = await getResources();
    console.log("Getting list of all resources...");
    res.json(resources);
});

// Send a GET request to /resources/:id to READ(view) a resource
app.get('/resources/:id', async (req, res) => {
    const resource = await getResources(req.params.id);
    console.log("Retrieve resource with id: " + req.params.id);
    res.json(resource);
});

// Send a POST request to /resources to CREATE a new resource
app.post('/resources/:id', async (req, res) => {
    const resource = await createResource(req.params.id);
    console.log("Creating new resource...");
    res.json(resource);
});

// Send a PUT request to /resources/:id to UPDATE (edit) a resource
app.put('/resources/:id', async (req, res) => {
    const resource = await updateResource(req.params.id);
    console.log("Updating resource with id: " + req.params.id);
    res.json(resource);
});

// Send a DELETE request to /resources/:id DELETE a resource
app.delete('/resources/:id', async (req, res) => {
    const resource = await deleteResource(req.params.id);
    console.log("Deleting resource with id: " + req.params.id);
    res.json(resource);
});

// Send a GET request to /resources/resource/random to READ (view) a random resource
app.get('/resources/resource/random', async (req, res) => {
    const resource = await getRandomResource();
    console.log("Retrieving random resource...");
    res.json(resource);
});

// ============================================================================================= //

app.listen(3000, () => console.log('Nodekraft Core API listening on port 3000!'));

