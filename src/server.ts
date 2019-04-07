//process.env.PORT = '3333';

import {app, server, auth} from 'midgar';
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });
app.use(auth.intercept);
server(app);