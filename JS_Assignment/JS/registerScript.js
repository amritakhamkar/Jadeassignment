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

//validation for confirm password
document.getElementById('confirmPassword').addEventListener("blur", function() {
	var confirmPassword=document.getElementById('confirmPassword').value;
	document.getElementById('confirmPasswordErrorMsg').style.display="none";
	if(confirmPassword=='')
	{
		document.getElementById('confirmPasswordErrorMsg').style.display="block";
		this.focus();
	}
});


//Register User data
var dataOfUser=[];
document.getElementById('registerForm').onsubmit=registerUser; 
function registerUser() {
	if(JSON.parse(localStorage.getItem('user')!=null)){
		dataOfUser=JSON.parse(localStorage.getItem('user'));
	}
	var username=document.getElementById('username').value;
	var password=document.getElementById('password').value;
	var confirmPassword=document.getElementById('confirmPassword').value;
	if(username=='' || password=='' || confirmPassword==''){
		if(username=='' ){
			document.getElementById('usernameErrorMsg').innerHTML = "Please enter username";
			document.getElementById('usernameErrorMsg').style.display="block";
		}
		if(password==''){
			document.getElementById('passwordErrorMsg').style.display="block";
	    }
	    if(confirmPassword==''){
	    	document.getElementById('confirmPasswordErrorMsg').innerHTML="Please enter your password again";
			document.getElementById('confirmPasswordErrorMsg').style.display="block";
		}
		return false;
	}
	else{
		if(password!=confirmPassword){
			document.getElementById('confirmPasswordErrorMsg').style.display="block";
       		document.getElementById('confirmPasswordErrorMsg').innerHTML="Password and Confirm password must be same";
       		return false;
   		}
   		for (var i = 0; i < dataOfUser.length; i++) {
    		if(dataOfUser[i].username==username){
    			document.getElementById('usernameErrorMsg').style.display="block";
      			document.getElementById('usernameErrorMsg').innerHTML = "Username Exist Already";
      			return false;
   			 }
   		}
   	}
   	newUser={};
	newUser.username=username;
	newUser.password=password;
	dataOfUser.push(newUser);
	localStorage.setItem('user', JSON.stringify(dataOfUser));
	alert("Sign Up Sucessfully");
	window.location.href="login.html";
}