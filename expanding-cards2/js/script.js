const sections = document.querySelectorAll(".section")

sections.forEach(section =>{
   section.addEventListener('click' ,function(){
      removeActiveClasses()
      section.classList.add("active")
   })
})



function removeActiveClasses(){
   sections.forEach(section =>{
      section.classList.remove("active")
   })
}