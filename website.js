let wrongtimes = 0;
button.addEventListener('click', function () {
   if(inputtext.value == "4"){
       resultimage.src = "goodjob.jpg";
       wrongtimes = 0;
   }
   else{
    if(wrongtimes < 2){
        resultimage.src = "yousuck.png";
        }
        else
         resultimage.src = "yousucksomuch.jpg";
         wrongtimes++;
    }
});