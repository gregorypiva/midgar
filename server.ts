import * as express from 'express';
import * as bodyParser from 'body-parser';

console.log(__dirname);

const app  = express();

app.use('/public', express.static(__dirname + '/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(request,response) {
  response.sendFile(__dirname + "../dist/index.html");
})

app.listen(3001, () => {
  console.log('server listen to 3001');
});