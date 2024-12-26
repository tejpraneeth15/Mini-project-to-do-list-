// let i = document.querySelector("#in");
// let btn = document.querySelector("button");
// let ul = document.querySelector("ul");

// btn.addEventListener("click", function(event) {
//     // Prevent form submission if the button is inside a form
//     event.preventDefault();

//     let item = document.createElement("li");
//     let delbtn = document.createElement("button");
    
//     // Add delete button styling
//     delbtn.classList.add("delete");
//     delbtn.textContent = "Delete";  // Set button text
    
//     item.innerText = i.value.trim();  // Add task text
//     ul.appendChild(item);  // Add the new item to the list
//     item.appendChild(delbtn);  // Add the delete button to the item
    
//     i.value = "";  // Clear the input field
// });

// // Event delegation for delete buttons
// ul.addEventListener("click", function(event) {
//     if (event.target.tagName.toLowerCase() === "button") {
//         let listItem = event.target.parentElement;
//         listItem.remove();  // Remove the list item
//     }
// });




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


