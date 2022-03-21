//SELECIONAR LOS ELEMENTOS CON CLASE section
const sections = document.querySelectorAll('.section');
//SELECIONAR LOS ELEMENTOS CON CLASE controlls
const sectBtns = document.querySelectorAll('.controlls');
//SELECIONAR TODOS LOS ELEMENTOS CON LA CALSE   control

const sectBtn = document.querySelectorAll('.control');
//SELECCIONAR TODOS LOS ELEMENTOS DEntro del elemento con LA CLASE main-content
const AllSections = document.querySelector('.main-content')




console.log("existe " + sections.length + " con clase section");
console.log("existe " + sectBtns.length + " con clase controls");
console.log("existe " + sectBtn.length + " con clase control");

function PageTransitions() {
  //cuando dan click en btn


    //Button click active class
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

  AllSections.addEventListener('click', (e) =>{
    const id = e.target.dataset.id;
    
    console.log(id)
    if(id){
        //rEMOVEMOS active AL ELEMENTO QUE TENGA LA TERMINACION active
        sectBtns.forEach((btn) =>{
            btn.classList.remove('active');
        })
        //AGREGAMOS ACTIVE AL ELEMENTO INTERACTUADO CON CLICK
        e.target.classList.add('active');

        //ocultar otras secciones
        sections.forEach((section)=>{
            section.classList.remove('active');
        })

        const element = document.getElementById(id);
        element.classList.add('active');
    }
})

}


PageTransitions();