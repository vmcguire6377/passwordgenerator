
var eventDescription = {};
var btn = document.getElementById("save")
btn.addEventListener("click", saveEventDescription);
var schedInput = document.getElementById("9am");
var savedInfo = [];
var results = localStorage.getItem("schedData");

//this is not working***
function displayItems () {
  results = localStorage.getItem("schedData");
  document.getElementById("schedInput").innerHTML = schedInput;
}


//enter the save event function
function saveEventDescription (event) {
  event.preventDefault();

  var allInputs = document.querySelectorAll(".schedInput")
  console.log(allInputs);

 

  for(var i = 0; i < allInputs.length; i++) {
    var endPoint = {}
    endPoint.name = allInputs[i].id
    endPoint.value= allInputs[i].value
    savedInfo.push(endPoint);
    
  }

//event is stored in local storage so that upon browser reload it persists
 localStorage.getItem("savedInfo");
 localStorage.setItem("schedData", JSON.stringify(savedInfo));


 
}





/*to begin to evaluate whether time blocks displayed are past, present, or future in relation to current time when page loads; then color code them accordingly
the following was a test to determine how to evaluate now timer vs time block times
if moment(now)=present, color timeblock red. if moment(now)<timeblock, color timeblock green for future. if moment(now)>timeblock, color timeblock gray for past.
let present = moment();
let past = moment()>pastMomentTime
let future = moment()<futureMomentTime

if(moment() === present) {
  color that timeblock red
}
if(moment() > past) {
  color that timeblock gray
}
else {//color the timeblock green}
  
}
*/