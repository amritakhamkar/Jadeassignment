//Validation for Usename field 
document.getElementById('username').addEventListener("blur", function() {
	var username=document.getElementById('username').value;
	document.getElementById('usernameErrorMsg').style.display="none";
	if(username=='')
	{
		document.getElementById('usernameErrorMsg').style.display="block";
		this.focus();
	}
});

//validation for Password field
document.getElementById('password').addEventListener("blur", function() {
	var password=document.getElementById('password').value;
	document.getElementById('passwordErrorMsg').style.display="none";
	if(password=='')
	{
		document.getElementById('passwordErrorMsg').style.display="block";
		this.focus();
	}
});

var dataOfUser=[];
document.getElementById('loginform').onsubmit=Login; 
function Login(){
	var username=document.getElementById('username').value;
	var password=document.getElementById('password').value;
	dataOfUser=JSON.parse(localStorage.getItem('user'));
	var UserValidationflag=false;
	if(username==''||password==''){
		if(username=='' ){
			document.getElementById('usernameErrorMsg').style.display="block";
		}
		if(password==''){
			document.getElementById('passwordErrorMsg').style.display="block";
	    }
	   return false;
	}
	else{
		if(dataOfUser == null){
			alert("Username does not exist");
			return false;
		}
		for(var i=0; i<dataOfUser.length; i++){
        	if((dataOfUser[i].username == username) && (dataOfUser[i].password == password)){
           		UserValidationflag=true;
        	}
		}
		if(UserValidationflag==true){
			localStorage.setItem("userName",username);
			return true;
		}
		else{
			document.getElementById('passwordErrorMsg').style.display="block";
        	document.getElementById("passwordErrorMsg").innerHTML="Incorrect Username or Password";
        	return false;
		}
		return false;
	}
	
}
