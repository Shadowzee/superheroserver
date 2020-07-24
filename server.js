const express = require('express');
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.json())

const cors = require('cors')

var corsOptions = {
    origin:  'http://localhost:4200',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
  }
  
  app.use(cors(corsOptions))
app.listen(8000, () => {
    console.log('Server started!')
  })

  app.route('/superhero').post((req, res) => {
      var inputdata=req.body.input;
      var output="Invalid superhero number";
var superheroes={
    "SUPERMAN":78737626,
    "HULK":4855,
    "THOR":8467,
    "ROBIN":76246,
    "IRONMAN":4766626,
    "GHOSTRIDER":4467874337,
    "CAPTAINAMERICA":22782462637422,
    "FLASH":35274,
    "WOLVERINE":965837463,
    "BATMAN":228626,
    "BLADE":25233,
    "PHANTOM":7426866,
    "SPIDERMAN":774337626,
    "BLACKWIDOW":2522594369,
    "HELLBOY":4355269,
    "PUNISHER":78647437
}
for(var key in superheroes){
    if("0 "+superheroes[key]==inputdata){
output=key;
break;
    }
}
    res.send(201, {"result":output})
  })