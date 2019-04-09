import {Database, logger} from 'midgar';
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// const server = new Server(process.env.PORT);
// server.appUse(auth.intercept);
// server.run();

const test = async () => {
    try {
        const value = await Database.insert(`INSERT INTO model
            (
                builder,
                model
            )
            VALUES (?, ?)`,
            [
                'test',
                'testok'
            ]);
        console.log(value);
    } catch (e) {
        logger.error(e);
    }

}

test();