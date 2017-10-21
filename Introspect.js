var images =[];
var index = 0;


function rightchangeImage()
{
	var img = document.getElementById("photo");
	
	index=index+1;

	if(index >= images.length){
		index=0;
	}
	photo.src = images[index];
}
function leftchangeImage()
{
	var img = document.getElementById("photo");
	index=index-1;

	if(index <0){
		index=images.length-1;
	}
	photo.src = images[index];
}


images[0]= "IntrospectPhoto1.jpg";
images[1]= "IntrospectPhoto2.jpg";
images[2]="IntrospectPhoto3.jpg";
images[3]="IntrospectPhoto4.jpg";
images[4]="IntrospectPhoto5.jpg";
images[5]="IntrospectPhoto6.jpg";
images[6]="IntrospectPhoto7.jpg";



document.getElementById('leftarrow').onclick = leftchangeImage;
document.getElementById('rightarrow').onclick = rightchangeImage;
