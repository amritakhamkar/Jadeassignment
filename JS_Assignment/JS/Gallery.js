var username=localStorage.getItem('userName');

if(JSON.parse(localStorage.getItem('Images')!=null)){
		dataOfImages=JSON.parse(localStorage.getItem('Images'));
	}

if(JSON.parse(localStorage.getItem('Images')!=null)){
	for (var i = 0; i < dataOfImages.length; i++) {
		if(dataOfImages[i].userName==username){
			var imagesHolder=document.getElementById('ImagesHolder');
			var imageDiv=document.createElement('div');
			var image = document.createElement("img"); 
			var description=document.createElement('p');
			if(dataOfImages[i].Description != null)
				description.innerHTML=dataOfImages[i].Description;
			image.src='./Images/'+dataOfImages[i].fileName;
			image.setAttribute('class','image');
			imageDiv.appendChild(image);
			imageDiv.appendChild(description);
			var imageOptions=document.createElement("span");
			var photoId=dataOfImages[i].id;
			description.setAttribute('id','description'+photoId);
			imageOptions.innerHTML='<a href="#" class="imageOption editDeleteoption" id="edit'+photoId+'">Edit</a><a href="Gallery.html" class="imageOption editDeleteoption" id="delete'+photoId+'">Delete</a>';
			imageDiv.appendChild(imageOptions);
			imageDiv.setAttribute('class','imageBox');
			imagesHolder.appendChild(imageDiv);
			document.getElementById('delete'+photoId).onclick=deleteImage;
			document.getElementById('edit'+photoId).onclick=editImage;
		}
	}
} 

function deleteImage(){
	var deleteImageId=(this.id).substr(6);
	for(var i=0; i<dataOfImages.length;i++){
		if(dataOfImages[i].id==deleteImageId){
			dataOfImages.splice(i,1);
			localStorage.setItem('Images', JSON.stringify(dataOfImages))
			alert("deleted Sucessfully");

		}
	}

	if(localStorage.getItem('likeUnlike')!=null){
		var dataOfLikeUnlike=JSON.parse(localStorage.getItem('likeUnlike'));
		for(var j=0;j<dataOfLikeUnlike.length;j++){
			if(dataOfLikeUnlike[j].photoID==deleteImageId){
				dataOfLikeUnlike.splice(j,1);
				localStorage.setItem('likeUnlike', JSON.stringify(dataOfLikeUnlike));
			}
		}
	}

	if(JSON.parse(localStorage.getItem('Likes')!=null)){
		dataOfLikes=JSON.parse(localStorage.getItem('Likes'));
		for(var i=0;i<dataOfLikes.length;i++){
			if(deleteImageId==dataOfLikes[i].ImageId){
				dataOfLikes.splice(i,1);
				localStorage.setItem('Likes', JSON.stringify(dataOfLikes));
			}
		}
	}
	
	
}


function editImage(){
	document.getElementById(this.id).style.display='none';
	var editImageId=(this.id).substr(4);
	for(var i=0;i<dataOfImages.length;i++){
		if(dataOfImages[i].id==editImageId){
			var descriptionData=document.getElementById('description'+editImageId).innerHTML;
			document.getElementById('description'+editImageId).innerHTML='<form id=editform method=post><textarea class=descriptionTextArea id=descriptionTextArea'+editImageId+'>'+descriptionData+'</textarea><label class="errorMsg" id="errorMsg">Description should not be empty</label><input type=submit class=savebutton value=Save id=Save'+editImageId+'></form>';
		}
	}
	document.getElementById('Save'+editImageId).onclick=saveDescription;

}


function saveDescription(){
	document.getElementById('errorMsg').style.display='none';
	var saveImageId=(this.id).substr(4);
	var description=document.getElementById('descriptionTextArea'+saveImageId).value;
	if(description==''){
		document.getElementById('errorMsg').style.display='inline-block';
		return false;
	}
	else{
		for(var i=0;i<dataOfImages.length;i++){
			if(dataOfImages[i].id==saveImageId){
				dataOfImages[i].Description=description;
				localStorage.setItem('Images', JSON.stringify(dataOfImages));
			}
		}
		alert("data updated Sucessfully");
		document.getElementById('editform').action="Gallery.html";
		return true;
	}
}

