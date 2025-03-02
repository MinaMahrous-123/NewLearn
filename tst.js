let mybtn=document.querySelector(".smg");
let mygmail=document.querySelector(".gm");
console.log(mybtn);
mybtn.onclick=function(e){
    
    let validatgmail=/[A-Z]\w{3,}@\w{1,}.com/;
    if(validatgmail.test(mygmail.value)!==true){
        e.preventDefault();

    }
  
    
}


