
var imageList=["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"]
var randomNumber1=Math.floor(Math.random()*6);
var randomNumber2=Math.floor(Math.random()*6);
function dice1()
{
    if(randomNumber1==0){
        document.querySelector("img,img1").setAttribute("src", imageList[randomNumber1]);
    }
    else if(randomNumber1==1){
        document.querySelector("img,img1").setAttribute("src", imageList[randomNumber1]);
    }
    else if(randomNumber1==2){
        document.querySelector("img,img1").setAttribute("src", imageList[randomNumber1]);
    }
    else if(randomNumber1==3){
        document.querySelector("img,img1").setAttribute("src", imageList[randomNumber1]);
    }
    else if(randomNumber1==4){
        document.querySelector("img,img1").setAttribute("src", imageList[randomNumber1]);
    }
    else{
        document.querySelector("img,img1").setAttribute("src", imageList[5]);
    }
}
function dice2()
{

    if(randomNumber2==0){
        document.querySelector("img,img2").setAttribute("src", imageList[randomNumber2]);
    }
    else if(randomNumber2==1){
        document.querySelector("img,img2").setAttribute("src", imageList[randomNumber2]);
    }
    else if(randomNumber2==2){
        document.querySelector("img,img2").setAttribute("src", imageList[randomNumber2]);
    }
    else if(randomNumber2==3){
        document.querySelector("img,img2").setAttribute("src", imageList[randomNumber2]);
    }
    else if(randomNumber2==4){
        document.querySelector("img,img2").setAttribute("src", imageList[randomNumber2]);
    }
    else{
        document.querySelector("img,img2").setAttribute("src", imageList[5]);
    }
}

//dice1()
dice2()
