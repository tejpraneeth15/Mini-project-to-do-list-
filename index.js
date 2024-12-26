let i=document.querySelector("#in");
let btn=document.querySelector("button");
let ul=document.querySelector("ul");

btn.addEventListener("click",function(event) {
    event.preventDefault();
    let item=document.createElement("li");
    let delbtn=document.createElement("button");
    delbtn.innerText="delete";
    delbtn.classList.add("delete");
    
    item.innerText=i.value;
    ul.appendChild(item);
    item.appendChild(delbtn);
    i.value="";

});

// let delbtns=document.querySelectorAll(".delete");
// for(delbtn of delbtns){
//    delbtn.addEventListener("click",function(){
//        let par=this.parentElement;
//        par.remove;
//     })
// }
// In this newly added delete buttons cannot be deleted,To make it work we must use  event delegation

ul.addEventListener("click",function(event){   
    if(event.target.tagName=="BUTTON"){ 
        let listItem=event.target.parentElement;
        listItem.remove();
    }
})


