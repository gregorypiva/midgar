const routes = require('express').Router();

routes.get('/', (req: any, res: any) => {
  res.status(200).json({ message: 'Connected!' });
});

module.exports = routes;

// module.exports = (req: any, res: any) => {
//     res.send('saluitttt');
// }