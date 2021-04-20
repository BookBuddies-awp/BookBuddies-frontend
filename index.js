console.log("Hello World");
const fetch = require('node-fetch');
async function Recommended(){
const response= await fetch('https://bookbuddies-api.herokuapp.com/api/bestsellers',{headers:{
    'Authorization':'x0G4Q1Rceqa907jhTmrD'
},})/*.then(res => res.json())
.then(json => {
    console.log(json[0]);
    console.log("Name of the first Book in the array:");
    console.log(json[0].title);
    
});*/
return response.json();}
Recommended().then(data=>{console.log(data)});