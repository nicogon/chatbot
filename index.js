const express = require('express');
const userController = require('./controllers/user.controller');
const healthController = require('./controllers/health.controller');
const authController = require('./controllers/auth.controller');
const messageController = require('./controllers/message.controller');

const handleError = (err, res) => {
  const { status, message } = err;
  // console.log(err); //for debugging
  res.send({
    message,
  }, status || 500);
};
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.post('/check', healthController.check);
// Used a ping endpoint since liveness prove is a get
app.get('/ping', healthController.ping);
app.post('/user', userController.createUser);
app.post('/login', authController.login);
app.post('/messages', messageController.send);
app.get('/messages', messageController.get);
app.use((err, req, res, next) => {
  handleError(err, res);
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`app running on port ${port}`);
  });
}

module.exports = app;
