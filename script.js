const filterInput=document.getElementById("filterInput")
const title=document.querySelectorAll("h3")
filterInput.addEventListener("keyup",(e)=>{
    let target=e.target.value
     target=target.toLowerCase()
    title.forEach(titles=>{
        let lowered=titles.innerText
        lowered=lowered.toLowerCase()
        if (lowered.includes(target)) {
           titles.parentElement.style.display=""
        }else{
            titles.parentElement.style.display = "none";
        }
      
    })
   
})
