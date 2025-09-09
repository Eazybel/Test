const popup=document.getElementById("popup")
const opened=document.getElementById("open")
const closed=document.getElementById("close")
opened.onclick=()=>{
    popup.showModal()
}
closed.onclick=()=>{
    popup.close()
}
