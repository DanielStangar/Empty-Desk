//simple go back to prev page button
function goBack() {
  window.history.back();
}


function showPrinciple() {
  document.getElementById('principle').style.display='block';
  //document.getElementById('introduction').style.display='none';
  document.getElementById('exercise').style.display='none';
  document.getElementById('takeaway').style.display='none';
}

function showExercise() {
  document.getElementById('principle').style.display='none';
  document.getElementById('exercise').style.display='block';
  document.getElementById('takeaway').style.display='none';
}

  
function showTakeaway() {
  document.getElementById('principle').style.display='none';
  document.getElementById('exercise').style.display='none';
  document.getElementById('takeaway').style.display='block';
}


