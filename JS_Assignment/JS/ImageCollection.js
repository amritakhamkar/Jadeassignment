var username=localStorage.getItem('userName');
document.getElementById('userNameSpan').innerHTML=username;

if(JSON.parse(localStorage.getItem('Images')!=null)){
		dataOfImages=JSON.parse(localStorage.getItem('Images'));
	}

var dataOfLikeUnlike=[];
if(JSON.parse(localStorage.getItem('Images')!=null)){
	for (var i = 0; i < dataOfImages.length; i++) {
		var existingLikeFlag=false; 
		var imagesHolder=document.getElementById('ImagesHolder');
		imagesHolder.setAttribute('class','photoHolder');
		var image_option_Div=document.createElement('div');
		var imageDiv=document.createElement('div');
		var image = document.createElement("img"); 
		var description=document.createElement('p');
		if(dataOfImages[i].Description != null)
			description.innerHTML=dataOfImages[i].Description;
		image.src='./Images/'+dataOfImages[i].fileName;
		image.setAttribute('class','photo');
		description.setAttribute('class','hideElement');
		imageDiv.appendChild(image);
		image_option_Div.appendChild(description);
		var imageOptions=document.createElement("span");
		var photoId=dataOfImages[i].id;
		imageOptions.innerHTML='<a href="ImageCollection.html" class="imageOption" id="Like'+photoId+'">Like</a><a style="display:none" href="ImageCollection.html" class="imageOption" id="Unlike'+photoId+'">Unlike</a> <a href="./Images/'+dataOfImages[i].fileName+'" id="download'+photoId+'" class="imageOption" download>Download</a>';
		image_option_Div.appendChild(imageDiv);
		image_option_Div.appendChild(imageOptions);
		image_option_Div.setAttribute('class','image_option_Div');
		imageDiv.setAttribute('id','PhotoDiv'+photoId);
		imagesHolder.appendChild(image_option_Div);
		if(localStorage.getItem('likeUnlike')!=null){
			dataOfLikeUnlike=JSON.parse(localStorage.getItem('likeUnlike'));
			for(var j=0;j<dataOfLikeUnlike.length;j++){
				if(dataOfLikeUnlike[j].UserName==username && dataOfLikeUnlike[j].photoID==photoId){
					existingLikeFlag=true;
				}
				if(dataOfLikeUnlike[j].UserName==username && dataOfLikeUnlike[j].Likeflag==true && dataOfLikeUnlike[j].photoID==photoId){
					document.getElementById('Like'+photoId).style.display='inline-block';
					document.getElementById('Unlike'+photoId).style.display='none';
				}
				if(dataOfLikeUnlike[j].UserName==username && dataOfLikeUnlike[j].Likeflag==false && dataOfLikeUnlike[j].photoID==photoId){
					document.getElementById('Like'+photoId).style.display='none';
					document.getElementById('Unlike'+photoId).style.display='inline-block';
				}
			}
		} 
		if(existingLikeFlag==false){
			var newPhotoLikeUnlike={};
			newPhotoLikeUnlike.UserName=username;
			newPhotoLikeUnlike.photoID=photoId;
			newPhotoLikeUnlike.Likeflag=true;
			dataOfLikeUnlike.push(newPhotoLikeUnlike);
		}
		localStorage.setItem('likeUnlike', JSON.stringify(dataOfLikeUnlike));
		document.getElementById('PhotoDiv'+photoId).onclick=showLargeImage;
		document.getElementById('Like'+photoId).onclick=LikeImage;
		document.getElementById('Unlike'+photoId).onclick=UnlikeImage;
	}
} 

var Imagenumber;
function showLargeImage(){
	var filepath;
	var largeImageId=(this.id).substr(8);
	for(var i=0;i<dataOfImages.length;i++){
		if(dataOfImages[i].id==largeImageId){
			filepath='./Images/'+dataOfImages[i].fileName;
			Imagenumber=i;
		}
	}
	document.getElementById('largeImage').src=filepath;
	document.getElementById('background').style.display='inline-block';
	document.getElementById('forwardbtn').style.display='inline-block';
	document.getElementById('backbtn').style.display='inline-block';
	if(Imagenumber==(dataOfImages.length-1)){
		document.getElementById('forwardbtn').style.display='none';
	}
	if(Imagenumber==0){
		document.getElementById('backbtn').style.display='none';
	}
	
}

document.getElementById('close').addEventListener("click", function() {
	document.getElementById('background').style.display='none';
});


document.getElementById('forwardbtn').addEventListener("click", function() {
	document.getElementById('backbtn').style.display='inline-block';
	if(Imagenumber==(dataOfImages.length-2)){
		document.getElementById('forwardbtn').style.display='none';
	}
	if(Imagenumber<(dataOfImages.length-1)){
		Imagenumber=Imagenumber+1;
		filepath='./Images/'+dataOfImages[Imagenumber].fileName;
		document.getElementById('largeImage').src=filepath;
	}
	document.getElementById('background').style.display='inline-block';
});


document.getElementById('backbtn').addEventListener("click", function() {
	document.getElementById('forwardbtn').style.display='inline-block';
	if(Imagenumber==1){
		document.getElementById('backbtn').style.display='none';
	}
	if(Imagenumber>0){
		Imagenumber=Imagenumber-1;
		filepath='./Images/'+dataOfImages[Imagenumber].fileName;
		document.getElementById('largeImage').src=filepath;
	}
	document.getElementById('background').style.display='inline-block';
});

var dataOfLikes=[];
function LikeImage(){
	var existingImageFlag=false;
	var LikeImageId=(this.id).substr(4);
	if(JSON.parse(localStorage.getItem('Likes')!=null)){
		dataOfLikes=JSON.parse(localStorage.getItem('Likes'));
		for(var i=0;i<dataOfLikes.length;i++){
			if(LikeImageId==dataOfLikes[i].ImageId){
				existingImageFlag=true;
				dataOfLikes[i].count=dataOfLikes[i].count+1;
			}
		}
	}
	if(existingImageFlag==false){
		var newPhotolike={};
		newPhotolike.ImageId=LikeImageId;
		newPhotolike.count=1;
		dataOfLikes.push(newPhotolike);
		
	}
	localStorage.setItem('Likes', JSON.stringify(dataOfLikes));
	if(localStorage.getItem('likeUnlike')!=null){
				dataOfLikeUnlike=JSON.parse(localStorage.getItem('likeUnlike'));
				for(var j=0;j<dataOfLikeUnlike.length;j++){
					if(dataOfLikeUnlike[j].UserName==username && dataOfLikeUnlike[j].photoID==LikeImageId){
						dataOfLikeUnlike[j].Likeflag=false;
					}
				}
	}
	localStorage.setItem('likeUnlike', JSON.stringify(dataOfLikeUnlike));

}


function UnlikeImage(){
	var UnLikeImageId=(this.id).substr(6);
	if(JSON.parse(localStorage.getItem('Likes')!=null)){
		dataOfLikes=JSON.parse(localStorage.getItem('Likes'));
		for(var i=0;i<dataOfLikes.length;i++){
			if(UnLikeImageId==dataOfLikes[i].ImageId){
				if(dataOfLikes[i].count>0){
					 dataOfLikes[i].count=dataOfLikes[i].count-1;
				}
			}
		}
	}
	localStorage.setItem('Likes', JSON.stringify(dataOfLikes));
	if(localStorage.getItem('likeUnlike')!=null){
				dataOfLikeUnlike=JSON.parse(localStorage.getItem('likeUnlike'));
				for(var j=0;j<dataOfLikeUnlike.length;j++){
					if(dataOfLikeUnlike[j].UserName==username && dataOfLikeUnlike[j].photoID==UnLikeImageId){
						dataOfLikeUnlike[j].Likeflag=true;
					}
				}
	}
	localStorage.setItem('likeUnlike', JSON.stringify(dataOfLikeUnlike));
}


