let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg"); 
const userscorepara =document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");   

const generateCompChoice=()=>{
     const options=["rock","paper","scissor"];
     let randIdx=Math.floor(Math.random()*3);
     return options[randIdx];

};

const gamedraw=()=>{
    console.log("Game Was Draw! Play Again");
    msg.innerText="Game Was Draw ! Play Again";
    msg.style.backgroundColor="#rgb(5,5,50)";

}
 const showWinner=(userWin,userchoice,compchoice)=>{
    if(userWin){
        userscore++;
        userscorepara.innerText=userscore;
        console.log("You win");
        msg.innerText=`You Win! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }else{
        compscore++;
        compscorepara.innerText=compscore;
        console.log("You lose");
         msg.innerText=`You Lose! ${compchoice} beats your${userchoice}`;
         msg.style.backgroundColor="red";
    }

}

const playgame=(userchoice)=>{
     console.log("user choice =",userchoice);
     const compchoice=generateCompChoice();
     console.log("comp choice =",compchoice);

     if(userchoice===compchoice){
        gamedraw();
     }else{
           let userWin=true;
          if(userchoice==="rock"){
             userWin= compchoice==="paper"? false : true ;
          }else if(userchoice==="paper"){
             userWin=compchoice==="scissor"? false : true ;
          }else{
             userWin=compchoice==="rock"? false : true;
          }
          showWinner(userWin,userchoice,compchoice);

     }
};


choices.forEach((choice)=>{
        console.log(choice);
        choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        //console.log("choice was clicked",userchoice);
        playgame(userchoice);
      });
});