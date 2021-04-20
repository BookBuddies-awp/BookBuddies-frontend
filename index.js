console.log("Hello World");
const fetch = require('node-fetch');
async function Recommended(){
const response= await fetch('https://bookbuddies-api.herokuapp.com/api/bestsellers',{headers:{
    'Authorization':'x0G4Q1Rceqa907jhTmrD'
},})
return response.json();}
Recommended().then(data=>{console.log(data[0])});
async function TopSearch(){
    const response= await fetch('https://bookbuddies-api.herokuapp.com/api/top-searched',{headers:{
        'Authorization':'x0G4Q1Rceqa907jhTmrD'
    },})
    return response.json();}