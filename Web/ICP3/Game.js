// Random genertor 
function Rgen()
{
var hv=4,lv=1;
return Math.floor(Math.random()*(hv-lv)+lv)
}
// comparing the players
function comp(a,b,playerA,playerB){
    
    if (a==b){
         console.log(0);
    }
    if(a==1)
    {
    if(b==2){
        playerB=playerB+1;
        console.log("Scorecard of PlayerB" + playerB);
    }
    else if(b==3){
        playerA=playerA+1;
        console.log("Scorecard of PlayerA" + playerA);
    }
}
    if(a==2)
    {
    if(b==3){
        playerB=playerB+1;
        console.log("Scorecard of PlayerB" + playerB);
    }
    else if(b==1){
        playerA=playerA+1;
        console.log("Scorecard of PlayerA" + playerA);
    }
}
    if(a==3)
    {
    if(b==1){
        playerB=playerB+1;
        console.log("Scorecard of PlayerB" + playerB);
    }
    else if(b==2){
        playerA=playerA+1;
        console.log("Scorecard of PlayerA" + playerA);
    }
}
}
    


function scorecard(a,b){
    

}




function game(clickvalue)
{
    var Random=Rgen();
    console.log(Random);
    let playerA=0;
    let playerB=0;
    comp(clickvalue,Random,playerA,playerB);
    
}