// Function selection of button
const selectObject = (name,obj)=>{
    obj = document.getElementById(`${obj}`);
}


selectObject(pillaje);
selectObject(hacendado);
selectObject(zaguan);
selectObject(salterio)
selectObject(patriarca);
selectObject(pompaFanfarria);
selectObject(trastosJergon);
selectObject(cenefaBrocado);
selectObject(guacharos);
selectObject(claraboya);
selectObject(brios);
selectObject(antro);
selectObject(cantaros);
selectObject(hermetica);
selectObject(liquenes);
selectObject(impavidos);
selectObject(estopa);
selectObject(atisbar);
selectObject(exenta);
selectObject(desgreñadas);
selectObject(comejen);
selectObject(molienda);
selectObject(jadeo);
selectObject(barullo);
selectObject(madreperla);
selectObject(implacables);
selectObject(marmita);

// Modal function
const modalDefinition = document.querySelector('.modalDefinition-container')
const titleDefinition = document.querySelector('.title-definition');
const textDefinition = document.querySelector('.definition-modal');
const buttonModal = document.getElementById('buttonDefinitionOk')
const imgSrc = document.getElementById('definitionImg');
const videoInsert = document.querySelector('.youtubeDefinition');

const cleanHTML = ()=>{
    titleDefinition.innerHTML = '';
    textDefinition.innerHTML  = '';
    imgSrc = '';
    videoInsert.innerHTML = ''; 
}

buttonModal.addEventListener('click',()=>{
    modalDefinition.classList.remove('active');
    cleanHTML();
})




// Functions of eventListener in every button

pillaje.addEventListener('click',()=>{
    modalDefinition.classList.toggle('active');
    titleDefinition.innerHTML = 'Pillaje'
    textDefinition.innerHTML = 'Robo o saqueo realizado con violencia aprovechando un descuido o la falta de defensa, especialmente el llevado a cabo de forma colectiva.'
    
})


hacendado.addEventListener('click',()=>{
    modalDefinition.classList.toggle('active');
})


zaguan.addEventListener('click',()=>{
    modalDefinition.classList.toggle('active');
})


salterio.addEventListener('click',()=>{
    modalDefinition.classList.toggle('active');
    titleDefinition.innerHTML = 'Salterio o cítara'
    textDefinition.innerHTML = 'Instrumento de cuerda pulsada'
    imgSrc.src = 'https://media.istockphoto.com/photos/psaltery-under-the-white-background-picture-id479724570'
    videoInsert.innerHTML = '<iframe width="300" height="150" src="https://www.youtube.com/embed/MeoebeGI96Y" title="Serenata de Schubert ,Cítara" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
})



patriarca.addEventListener('click',()=>{
    modalDefinition.classList.toggle('active');
})


pompaFanfarria.addEventListener('click',()=>{
    modalDefinition.classList.toggle('active');
})



trastosJergon.addEventListener('click',()=>{
    modalDefinition.classList.toggle('active');
})


cenefaBrocado.addEventListener('click',()=>{
    modalDefinition.classList.toggle('active');
})


guacharos.addEventListener('click',()=>{
    modalDefinition.classList.toggle('active');
})


claraboya.addEventListener('click',()=>{
    modalDefinition.classList.toggle('active');
})


brios.addEventListener('click',()=>{
    modalDefinition.classList.toggle('active');
})


antro.addEventListener('click',()=>{
    modalDefinition.classList.toggle('active');
})


cantaros.addEventListener('click',()=>{
    modalDefinition.classList.toggle('active');
})
hermetica.addEventListener('click',()=>{
    modalDefinition.classList.toggle('active');
})
liquenes.addEventListener('click',()=>{
    modalDefinition.classList.toggle('active');
})
impavidos.addEventListener('click',()=>{
    modalDefinition.classList.toggle('active');
})
estopa.addEventListener('click',()=>{
    modalDefinition.classList.toggle('active');
})
atisbar.addEventListener('click',()=>{
    modalDefinition.classList.toggle('active');
})
exenta.addEventListener('click',()=>{
    modalDefinition.classList.toggle('active');
})
desgreñadas.addEventListener('click',()=>{
    modalDefinition.classList.toggle('active');
})
comejen.addEventListener('click',()=>{
    modalDefinition.classList.toggle('active');
})
molienda.addEventListener('click',()=>{
    modalDefinition.classList.toggle('active');
})
jadeo.addEventListener('click',()=>{
    modalDefinition.classList.toggle('active');
})
barullo.addEventListener('click',()=>{
    modalDefinition.classList.toggle('active');
})
madreperla.addEventListener('click',()=>{
    modalDefinition.classList.toggle('active');
})
implacables.addEventListener('click',()=>{
    modalDefinition.classList.toggle('active');
})
marmita.addEventListener('click',()=>{
    modalDefinition.classList.toggle('active');
})

