const myObserver = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
    })
})

const elements = document.querySelectorAll('.hidden')

elements.forEach((element) => myObserver.observe(element))

const menu = document.querySelector('#menu-icone').addEventListener('click',clickMenu)


function clickMenu(){
    if (itens.style.left == '-500px'){
        itens.style.left = '-10px'
    }else {
        itens.style.left = '-500px'
    }
}