let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#resetbutton");
let newGame=document.querySelector("#newgame");
let msgContainer=document.querySelector(".messageContainer");
let msg=document.querySelector("#msg");

let turnO=true;  //to track the player turn ,ifturnO is true then Oth player will have his turn 
let count=0;
const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
//
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box is clicked");
        if(turnO)
        {
            box.innerText="O";
            count++;
            turnO=false;
        }
        else
        {
            box.innerText="X";
            turnO=true;
            count++;
        }
        box.disabled=true;//same box will not be clicked again
        checkWinner();
    });
});

const showWinner=(winner)=>{
      msgContainer.classList.remove("hide");
      msg.innerText=`✨winner✨\n player ${winner} Wins`;

    disableBoxes();
};

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};


const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const checkWinner=()=>{
    for( let pattern of winPattern)
    {
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;


    if(pos1val!=""&&pos2val!=""&&pos3val!="")
    {
        if(pos1val===pos2val&&pos2val===pos3val)
     {
            console.log("winner",pos1val);
            showWinner(pos1val);
            
     }
     else if(count==9)
     {
        msg.innerText=" Match Draw";
        msg.classList.remove("nowin");
     }
    }
  }
};

const resetGame=()=>{
turnO=true;
enableBoxes();
msgContainer.classList.add("hide");
count=0;
};

newGame.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);