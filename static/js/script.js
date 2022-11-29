let headerimg = document.querySelector('.hamburger')

headerimg.addEventListener("click", function(e){
    e.preventDefault()
    
    let textmenu = document.querySelectorAll('.menulist')
    for(let i = 0;i<textmenu.length;i++){
        textmenu[i].classList.toggle('hidden')
    }
})