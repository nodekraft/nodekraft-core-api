const fs = require('fs');

function generateRandomId(){
  return Math.floor(Math.random() * 10000);
}

function save(data){
  return new Promise((resolve, reject) => {
    fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

/**
 * Gets all resources
 * @param None
 */
function getResources(){
  return new Promise((resolve, reject) => {
    fs.readFile('data.json', 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        const json = JSON.parse(data);
        resolve(json);
      }
    });
  });
}

/**
 * Gets a specific resource by ID
 * @param {number} id - Accepts the ID of the specified resource.
 */
async function getResource(id){
  const resources = await getResources();
  return resources.records.find(record => record.id == id);
}
/**
 * Gets a random resource 
 * @param None
 */
async function getRandomResource(){
  const resources = await getResources();
  const randNum = Math.floor(Math.random() * resources.records.length);
  return resources.records[randNum];
}

/**
 * Creates a new resource record 
 * @param {Object} newRecord - Object containing info for new resource: the resource text, author and year 
 */
async function createResource(newRecord) {
  const resources = await getResources(); 
  
  newRecord.id = generateRandomId(); 
  resources.records.push(newRecord);
  await save(resources); 
  return newRecord; 
}

/**
 * Updates a single record 
 * @param {Object} newResource - An object containing the changes to resource: resource, author, year (all optional)
 */
async function updateResource(newResource){
  const resources = await getResources();
  let resource = resources.records.find(item => item.id == newResource.id);
  
  resource.resource = newResource.resource;
  resource.author = newResource.author;
  resource.year = newResource.year;
 
  await save(resources);
}

/**
 * Deletes a single record
 * @param {Object} record - Accepts record to be deleted. 
 */
async function deleteResource(record){
  const resources = await getResources();
  resources.records = resources.records.filter(item => item.id != record.id);
  await save(resources);
}

module.exports = {
  getResources,
  getResource, 
  createResource, 
  updateResource, 
  deleteResource,
  getRandomResource
}
