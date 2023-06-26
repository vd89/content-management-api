import { Router } from 'express';

import { testAuth } from '../helper/extraHelper.js';
import { getAllContents } from '../controllers/index.js';


const apiRoutes = new Router();

apiRoutes.get('/contacts', getAllContents) //  api route -- /api/contacts --
apiRoutes.get('/contacts/:id', testAuth) // added the controller for the get individual content
apiRoutes.post('/contacts',testAuth) // create a content with the route
apiRoutes.put('/contacts/:id', testAuth) // updated the content with the data
apiRoutes.delete('/contacts/:id', testAuth) // delete the desired content

export default apiRoutes;