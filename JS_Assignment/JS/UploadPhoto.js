var username=localStorage.getItem('userName');
var dataOfImages=[];
var idOfImage=1;
document.getElementById('ImageForm').onsubmit=uploadImage;

//Upload Image
function uploadImage(){
	if(JSON.parse(localStorage.getItem('Images')!=null)){
		dataOfImages=JSON.parse(localStorage.getItem('Images'));
		idOfImage=dataOfImages.length+1;
		for(var i=0;i<dataOfImages.length;i++){
			if(dataOfImages[i].id==idOfImage){
				idOfImage=idOfImage+1;
			}
		}
		
	}
	var fileFlag=false;
	var filePath=document.getElementById('fileInput').value;
	var description=document.getElementById('description').value;
	if(filePath=='' || description==''){
		if(filePath==''){
		document.getElementById('imageErrorMsg').innerHTML = 'Please Select Image '
		document.getElementById('imageErrorMsg').style.display='block';
		}
		if(description==''){
			document.getElementById('descriptionErrorMsg').innerHTML = 'Please Enter Description'
			document.getElementById('descriptionErrorMsg').style.display='block';
			
		}
		return false;
	}
	else{
		if(filePath.slice(-3).toLowerCase() != 'jpg' && filePath.slice(-3).toLowerCase() != 'png' && filePath.slice(-4).toLowerCase() != 'jpeg'){
			document.getElementById('imageErrorMsg').innerHTML = 'Select Image Only';
			document.getElementById('imageErrorMsg').style.display='block';
			return false;
		}
		else{
			fileFlag=true;
		}

	}
	if(fileFlag==true){
		var fileName=filePath.substring(filePath.lastIndexOf("\\")+1);
		newImage={},
		newImage.id=idOfImage;
		newImage.fileName=fileName;
		newImage.userName=username;
		newImage.Description=description;
		dataOfImages.push(newImage);
		localStorage.setItem('Images', JSON.stringify(dataOfImages));
		alert("Uploaded Sucessfully");
		document.getElementById('ImageForm').action="Gallery.html";
	}

	return true;
}