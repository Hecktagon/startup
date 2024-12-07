const express = require('express');
const uuid = require('uuid');
const app = express();
app.use(express.json());
const port = process.argv.length > 2 ? process.argv[2] : 4000;

let figures = [];
let users = {};
let userProfilePic = '';

app.use(express.static('public'));

var apiRouter = express.Router();
app.use(`/api`, apiRouter);


apiRouter.post('/auth/create', async (req, res) => {
    const user = users[req.body.username];
    if (user) {
      res.status(409).send({ msg: 'Existing user' });
    } else {
      const user = { email: req.body.email, password: req.body.password, token: uuid.v4() };
      users[user.email] = user;
  
      res.send({ token: user.token });
    }
  });

  apiRouter.post('/auth/login', async (req, res) => {
    const user = users[req.body.username];
    if (user) {
      if (req.body.password === user.password) {
        user.token = uuid.v4();
        res.send({ token: user.token });
        return;
      }
    }
    res.status(401).send({ msg: 'Unauthorized' });
  });

  apiRouter.delete('/auth/logout', (req, res) => {
    const user = Object.values(users).find((u) => u.token === req.body.token);
    if (user) {
      delete user.token;
    }
    res.status(204).end();
  });

 

  // fetchFigures
apiRouter.get('/figures', (_req, res) => {
    res.send(figures);
  });
  
  // addFigure
  apiRouter.post('/figure', (req, res) => {
    figures = updateFigures(req.body, figures);
    res.send(figures);
  });

  apiRouter.post('/change_figures', (req, res) => {
    figures = req.body
    res.send(figures);
  });

  app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
  });
  

  app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});



  // updateFigures adds new figures to figures.
  function updateFigures(newFigure, figures) {
    figures.push(newFigure);
    return figures
  }

  

