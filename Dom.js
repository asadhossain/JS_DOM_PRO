

var text = document.getElementById("text");

var ourImg = document.getElementById("images");
function thisIsAsadImage(){
    ourImg.src = "Asad-Hossain (1) (1).jpg"
    text.innerHTML = "This is Asad's Image";
}
var ourImg1 = document.getElementById("images1");
function thisIsDolonImage(){
    ourImg1.src = "color.jpg"
    text.innerHTML = "This is Dolon's Image";

}
function add() {
    var n1 = parseInt(document.getElementById("n1").value);
    var n2 = parseInt(document.getElementById("n2").value);
    var result= n1+n2;
    console.log(result);
    document.getElementById('result').innerHTML=result;
}
