//SELECIONAR LOS ELEMENTOS CON CLASE section 5elemetos
const sections = document.querySelectorAll('.section');
//SELECIONAR LOS ELEMENTOS CON CLASE controlls 1Elementos
const sectBtns = document.querySelectorAll('.controlls');
//SELECIONAR TODOS LOS ELEMENTOS CON LA CALSE   control 5elementos
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
        console.log(sectBtn[i]);
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            // console.log(currentBtn.className+"clase que tiene active-btn")
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    //APUNTAMOS TODOS LOS ELEMENTOS DEntro DE MAIN CONTENT 
  AllSections.addEventListener('click', (e) =>{
    const id = e.target.dataset.id;
    
        if(id){
        //rEMOVEMOS active AL ELEMENTO QUE TENGA LA TERMINACION active          
               sectBtn.forEach((btn) =>{
            btn.classList.remove('active');
        })

        /*/AGREGAMOS ACTIVE AL ELEMENTO INTERACTUADO CON CLICK
            ESTA AGREGANDO A TODOS LOS ELEMENTOS CON CLASE control AGREGANDO active
        */ 

            e.target.classList.add('active');
                console.log(id)
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
