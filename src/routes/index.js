import { Router } from 'express';

import { createContents, deleteContent, getAllContents, getContentsById } from '../controllers/index.js';


const apiRoutes = new Router();

apiRoutes.get('/contacts', getAllContents) //  api route -- /api/contacts --
apiRoutes.get('/contacts/:id', getContentsById) // added the controller for the get individual content
apiRoutes.post('/contacts',createContents) // create a content with the route
apiRoutes.put('/contacts/:id', createContents) // updated the content with the data
apiRoutes.delete('/contacts/:id', deleteContent) // delete the desired content

export default apiRoutes;