let s1=document.getElementById("sq1");
s1.addEventListener("mouseenter",function(){
    let r=Math.floor(Math.random()*100);
    s1.innerHTML=`<h1>${r}</h1>`;
});
s1.addEventListener("mouseleave",function(){
    s1.innerHTML="<h1>1</h1>";
});

let s2=document.getElementById("sq2");
let flag=1;
s2.addEventListener("mouseenter",function(){
    if(flag==1){ 
         s2.style.backgroundColor="salmon";
         flag=0;
    }
    else {
        s2.style.backgroundColor="lightblue";
        flag=1;
    }
});
s2.addEventListener("mouseleave",function(){
  s2.style.backgroundColor="white";
});


let s3=document.getElementById("sq3");
s3.addEventListener("mouseenter",function(){
     let r1=Math.floor(Math.random()*256);
     let r2=Math.floor(Math.random()*256);
     let r3=Math.floor(Math.random()*256);
     let border=Math.floor(Math.random()*100);
     s3.style.backgroundColor=`rgb(${r1},${r2},${r3})`;
     s3.style.borderRadius=`${border}%`;
});

s3.addEventListener("mouseleave",function(){
     s3.style.backgroundColor="white";
     s3.style.borderRadius="0%";
});

let s4=document.getElementById("sq4");
s4.addEventListener("click",function(){
   s4.style.backgroundImage ="url('https://images.unsplash.com/reserve/Af0sF2OS5S5gatqrKzVP_Silhoutte.jpg?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
   s4.style.backgroundSize="cover";
   s4.style.backgroundPosition="center";    
   s4.style.backgroundRepeat="no-repeat";

});
s4.addEventListener("mouseenter",function(){
    s1.style.backgroundColor="lightpink";
    s2.style.backgroundColor="lightblue";
    s3.style.backgroundColor="lightgrey";
    
});

s4.addEventListener("mouseleave",function(){
    s1.style.backgroundColor="white";
    s2.style.backgroundColor="white";
    s3.style.backgroundColor="white";
    s4.style.backgroundImage="none";
});

