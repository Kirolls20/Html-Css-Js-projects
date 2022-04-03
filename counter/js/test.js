let welcomeEl = document.getElementById("welcome-el")
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let name= "kirolls"
let myGreating = "Hi, Welcome back " + name

let count= 0;
// Increment Function
function increament(){
   count++;
   countEl.textContent= count
};

// Save The Number 
function save(){
   let countStr = count + " - "
   saveEl.textContent+= countStr
   countEl.textContent=0
   count= 0
}

// Welcoming The User 
welcomeEl.innerText = myGreating




