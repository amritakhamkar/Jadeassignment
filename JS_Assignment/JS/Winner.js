if(localStorage.getItem('Likes')!=null){
	dataOflikes=JSON.parse(localStorage.getItem('Likes'));
	var maxCount=0;
	var photoId;
	var maxlikeImages=[];
	for(var i=0;i<dataOflikes.length;i++){
		if(maxCount < dataOflikes[i].count){
			maxCount=dataOflikes[i].count;
			photoId=dataOflikes[i].ImageId;
		}
	}
	if(maxCount != 0){
		for(var i=0;i<dataOflikes.length;i++){
			if(maxCount==dataOflikes[i].count){
				maxlikeImages.push(dataOflikes[i].ImageId);
			}
		}
	}
}

var username,fileName;

if(localStorage.getItem('Images')!=null){
	dataofImages=JSON.parse(localStorage.getItem('Images'));
	for(var j=0;j<maxlikeImages.length;j++){
		for(var i=0;i<dataofImages.length;i++){
			if(dataofImages[i].id==maxlikeImages[j]){
				username=dataofImages[i].userName;
				fileName=dataofImages[i].fileName;
				var ImagesHolder=document.getElementById('ImagesHolder');
				var imageDiv=document.createElement('div');
				var userNameSpan=document.createElement('h1');
				userNameSpan.innerHTML='<span class=winnerName>'+username+'</span> with Image';
				var image=document.createElement('img');
				imageDiv.setAttribute('class','imageBox');
				image.src='./Images/'+fileName;
				image.setAttribute('class','image');
				imageDiv.appendChild(userNameSpan)
				imageDiv.appendChild(image);
				
				//ImagesHolder.appendChild();
				ImagesHolder.appendChild(imageDiv);
			}	
		}
	}
}