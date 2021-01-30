var ball = document.getElementById('ball');
var box = document.getElementById('box');

var ballLeft = 0;
var ballTop = 0;

    
function anim(e){
    if(e.keyCode==39){
         ballLeft +=10;
         ball.style.left = ballLeft + 'px';
         if(ballLeft >=550){
             ballLeft -=10;
         }
    }
    if(e.keyCode==37){
         ballLeft -=10;
         ball.style.left = ballLeft + 'px';
         if(ballLeft <=0){
            ballLeft +=10; 
         }
    }
    if(e.keyCode==38){
        ballTop -=10;
        ball.style.top = ballTop + 'px';
        if(ballTop <=0){
            ballTop +=10;
        }
    }
    if(e.keyCode==40){
        ballTop +=10;
        ball.style.top = ballTop + 'px';
        if(ballTop >=550){
            ballTop -=10;
        }
    }

}



document.onkeydown = anim;