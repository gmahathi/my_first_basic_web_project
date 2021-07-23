function required() {
var emp=document.form1.fname.value;
if (emp==""){
alert("Full Name is missing.");
}
else{
alert(emp);
}
if(document.getElementById('male').checked==true){
alert("gender:male");
}
else if(document.getElementById('female').checked==true){
alert("gender:female");
}
else{
alert("gender :not selected");
}
}
		 