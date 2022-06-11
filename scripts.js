function Test(event){
	var keyCode = event.keyCode;
	if (keyCode == 13) {
		LoadTransaction();
	}
}

function LoadTransaction() {

  var transaction_field, transaction_code, text;
  transaction_field = document.getElementById("transaction_field");
  transaction_code = transaction_field.value;

  //Redirect to transaction
  if (transaction_code.toUpperCase() == 'MM01') {
  	location.href = "MM01.html";
  }
  else if(transaction_code.toUpperCase() == '/N') {
	location.href = "EASY_ACCESS.html";
  }
}

function ShowMatchCode(parameter) {
	document.getElementById(parameter).style.visibility = "visible";
}

function HideMatchCode(parameter) {
	document.getElementById(parameter).style.visibility = "hidden";
}
