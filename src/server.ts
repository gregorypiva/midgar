import {logger, bdd} from 'midgar';


bdd.select('SELECT * FROM telephonie LIMIT 1').then((response) => {
  console.log(response);
});