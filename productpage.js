let quan=document.querySelector(".quantity");
number=Number(quan.innerHTML);
let sub=document.querySelector(".minus");
let add=document.querySelector(".plus");

add.addEventListener("click",()=>{
    number=Number(quan.innerHTML);
    quan.innerHTML=number+1;
})
if(number<=0){
    sub.style.color="grey";
sub.style.cursor="disabled";
    }
sub.addEventListener("click",()=>{
    number=Number(quan.innerHTML);
    if(number<=0){
    sub.style.color="grey";
sub.style.cursor="disabled";
    }
else{
    quan.innerHTML=number-1;
}
})