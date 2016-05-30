import express from 'express';
import chalk from 'chalk';
import cors from 'cors';
import twilio from 'twilio';

const router = new express.Router();

router.get('/', (req, res) => {
  const response = {
    'async': '^2.0.0-rc.5',
    'nodemon': '^1.9.2',
    'jsdom': '^9.2.0',
    'mysql': '^2.10.2',
    'request': '^2.72.0',
    'sequelize': '^3.23.2',
    'moment': '^2.13.0',
    'babel': '^6.5.2',
    'lodash': '^4.13.1',
    'babel-cli': '^6.9.0',
    'babel-eslint': '^6.0.4',
    'babel-preset-es2015': '^6.9.0',
    'babel-preset-stage-1': '^6.5.0',
    'eslint': '^2.11.0',
    'eslint-config-airbnb': '^9.0.1',
    'eslint-plugin-import': '^1.8.1',
    'eslint-plugin-jsx-a11y': '^1.2.2',
    'eslint-plugin-react': '^5.1.1',
    'yosay': '^1.1.1',
    'Already': 'installed 4 you.',
  };
  res.json(response);
});

/* Cors example routing, cors docs : https://www.npmjs.com/package/cors  */
router.get('/cors', cors(), (req, res) => {
  console.log(chalk.blue('Cors enabled!'));
  res.json({ msg: 'This is CORS-enabled for all origins!' });
});

router.get('/sms', cors(), (req, res) => {
  const client = new twilio.RestClient('ACCOUNT SID', 'AUTH TOKEN');
  client.sms.messages.create({
    to: '+TO',
    from: '+FROM',
    body: 'Hi dude',
  }, (error, message) => {
      // The HTTP request to Twilio will run asynchronously. This callback
      // function will be called when a response is received from Twilio
      // The "error" variable will contain error information, if any.
      // If the request was successful, this value will be "falsy"
      console.log(chalk.bold.red(`Error : ${JSON.stringify(error)}, Message : ${JSON.stringify(message)}`));
    if (!error) {
        console.log('Success! The SID for this SMS message is:');
        console.log(message.sid);
        console.log('Message sent on:');
        console.log(chalk.blue(message.dateCreated));
        res.json('Ok');
    } else {
        console.log('Oops! There was an error.');
    }
  });

});

module.exports = router;
