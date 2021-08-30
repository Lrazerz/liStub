const express = require('express')
const cors = require('cors')

const app = express()
const port = 3001


const corsOptions = {
  origin: '*',
  methods: ['POST', 'GET', 'PATCH', 'DELETE', 'PUT', 'OPTIONS'],
  allowedHeaders: ['*'],
  credentials: true,
}
app.use(cors(corsOptions))
app.options('*', cors(corsOptions))

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//   res.header('Access-Control-Allow-Headers', '*');
//   res.header('Access-Control-Expose-Headers', '*');
//   res.header('Access-Control-Allow-Credentials', ['true']);
//   if(req.method === 'OPTIONS') {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//     res.header('Access-Control-Allow-Headers', '*');
//     res.header('Access-Control-Expose-Headers', '*');
//     res.header('Access-Control-Allow-Credentials', ['true']);
//     return res.status(200).json({});
//   }
//   next();
// });

app.get('/linkedin-accounts', (req, res) => {
  res.send({
    "accounts":[
      {
        "id":0,
        "cookieStatus":true,
        "name":"Vlad B",
        "dailyConnectionRequests":1000,
        "dailyMessages":200,
        "isSalesNavigatorEnabled":false
      },
      {
        "id":1,
        "cookieStatus":true,
        "name":"Vlad B2",
        "dailyConnectionRequests":1000,
        "dailyMessages":200,
        "isSalesNavigatorEnabled":false
      },
      {
        "id":2,
        "cookieStatus":false,
        "name":"Vlad B3",
        "dailyConnectionRequests":1000,
        "dailyMessages":200,
        "isSalesNavigatorEnabled":true
      }
    ]
  })
})

app.get('/linkedin-accounts/:id', (req, res) => {
  if(req.params.id === '0') {
    res.send({
      id: Number(req.params.id),
      name: 'Vlad',
      fullName: 'Vladyslav Bondarenko',
      cookie: 'asdasdasdasd',
      cookieStatus: null,
      isSalesNavigatorEnabled: false,
      totalDailyInteractions: 100,
      totalDailyInteractionsWithSalesNavigator: 150,
      connectionsAndMessages: 80,
      repliesDetect: 20,
      connectionAndMessagesSent: 10,
      detectsCount: 10,
    })
  };
  setTimeout(() => {
    res.send({
      id: Number(req.params.id),
      name: 'Vlad B',
      fullName: 'Vladyslav Bondarenko',
      cookie: 'asdasdasdasd',
      cookieStatus: null,
      isSalesNavigatorEnabled: false,
      totalDailyInteractions: 100,
      totalDailyInteractionsWithSalesNavigator: 150,
      connectionsAndMessages: 80,
      repliesDetect: 20,
      connectionAndMessagesSent: 10,
      detectsCount: 10,
    })
  }, 1000);
})

app.put('/linkedin-accounts/:id', (req, res) => {
  res.status(200).send();
})

app.post('/linkedin-accounts/cookie-status', (req, res) => {
  setTimeout(() =>

      res.status(500).send()

  //     res.status(200).send({
  //   cookieStatus: false,
  // })


    , 1000);
})

// create account
app.post('/linkedin-accounts', (req, res) => {

  setTimeout(() => {
    res.status(400).send({code: 1});

  }, 3000);
})

// delete
app.delete('/linkedin-accounts/:id', (req, res) => {

  setTimeout(() => {
    res.status(200).send();

  }, 3000);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})