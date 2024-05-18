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

// treino de peito interativo
let supiReto = document.getElementsByTagName('video')[0]
let checked = document.getElementsByTagName('input')[1]
let crucBanco = document.getElementsByTagName('video')[1]
let checked1 = document.getElementsByTagName('input')[2]
let crucMaq = document.getElementsByTagName('video')[2]
let checked2 = document.getElementsByTagName('input')[3]
let supMaq = document.getElementsByTagName('video')[3]
let checked3 = document.getElementsByTagName('input')[4]

// treino de triceps interativo
let triBarra = document.getElementsByTagName('video')[4]
let checked4 = document.getElementsByTagName('input')[5]
let triCorda = document.getElementsByTagName('video')[5]
let checked5 = document.getElementsByTagName('input')[6]
let triFran = document.getElementsByTagName('video')[6]
let checked6 = document.getElementsByTagName('input')[7]

// treino de peito interativo

checked.addEventListener('click',done)
function done(){
    if(supiReto.style.display == 'none'){
        supiReto.style.display = 'block'
        supiReto.style.margin = 'auto'
        
    }else{
      supiReto.style.display = 'none'
      checked.style.marginTop = '15px'  
    }
    
    
}
checked1.addEventListener('click',done1)
function done1(){
    if(crucBanco.style.display == 'none'){
        crucBanco.style.display = 'block'
        crucBanco.style.margin = 'auto'
    }else{
      crucBanco.style.display = 'none'
      checked1.style.marginTop = '15px'   
    }
}
checked2.addEventListener('click',done2)
function done2(){
    if(crucMaq.style.display == 'none'){
        crucMaq.style.display = 'block'
        crucMaq.style.margin = 'auto'
    }else{
      crucMaq.style.display = 'none'  
      checked2.style.marginTop = '15px' 
    }
}

checked3.addEventListener('click',done3)
function done3(){
    if(supMaq.style.display == 'none'){
        supMaq.style.display = 'block'
        supMaq.style.margin = 'auto'
    }else{
      supMaq.style.display = 'none'  
      checked3.style.marginTop = '15px' 
    }

}

// treino de triceps interativo

checked4.addEventListener('click',done4)
function done4(){
    if(triBarra.style.display == 'none'){
        triBarra.style.display = 'block'
        triBarra.style.margin = 'auto'
    }else{
      triBarra.style.display = 'none'  
      checked4.style.marginTop = '15px' 
    }

}

checked5.addEventListener('click',done5)
function done5(){
    if(triCorda.style.display == 'none'){
        triCorda.style.display = 'block'
        triCorda.style.margin = 'auto'
    }else{
      triCorda.style.display = 'none'  
      checked5.style.marginTop = '15px' 
    }

}

checked6.addEventListener('click',done6)
function done6(){
    if(triFran.style.display == 'none'){
        triFran.style.display = 'block'
        triFran.style.margin = 'auto'
    }else{
      triFran.style.display = 'none'  
      checked6.style.marginTop = '15px' 
    }

}



