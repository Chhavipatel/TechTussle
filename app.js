let items=document.querySelectorAll(".item");
let btn=document.querySelector("button");
let h4=document.querySelector("h4");
let winconditions=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let turnX=true;
let moves=0;
btn.addEventListener("click",()=>{
    items.forEach((item) => {
      
        item.innerText = "";
        item.clicked = false;
    });
    h4.innerText = `X's turn`;
    turnX = true;
    moves=0;
})
items.forEach((item)=>{
    item.addEventListener("click",()=>{
        if(!item.clicked){
if(turnX){
    item.innerText="X";
    h4.innerText=`0's turn`;
    turnX=false;
}
else{
    item.innerText="0";
    h4.innerText=`X's turn`;
    turnX=true;
}

item.clicked=true;
moves++;
checkwinner();
        }
        
       
    });
  
});

const checkwinner=()=>{
    for(let win of winconditions){

let posvalue1=items[win[0]].innerText;
let posvalue2=items[win[1]].innerText;
let posvalue3=items[win[2]].innerText;

if(!posvalue1=="" && !posvalue2=="" && !posvalue3==""){
if(posvalue1==posvalue2 && posvalue2==posvalue3){
    h4.innerText=`'${posvalue1}' won the game`;
  disableitem();
return;
}

}


    }
    if (moves === items.length) {
        h4.innerText = "It's a draw!";
       
    }
}
const disableitem=()=>{
    for(item of items){
item.clicked=true;

    }
    }