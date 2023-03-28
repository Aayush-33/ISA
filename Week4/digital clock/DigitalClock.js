function startTime() {
	var today = new Date(); 
	var h = today.getHours(); 
	var m = today.getMinutes(); 
	var s = today.getSeconds(); 
	m = checkZero(m); 
	s = checkZero(s); 
	document.getElementById("clock").innerHTML = h + ":" + m + ":" + s; 
	var t = setTimeout(startTime, 500); 
  }
  
  function checkZero(i) {
	if (i < 10) { 
	  i = "0" + i; 
	}
	return i;
  }
  