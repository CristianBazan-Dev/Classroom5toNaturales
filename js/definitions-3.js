

// Function selection of button
const selectObject = (obj)=>{
    obj = document.getElementById(`${obj}`);
}


selectObject(galardon);
selectObject(organza);
selectObject(punitiva);
selectObject(bullicio);
selectObject(primorosos);
selectObject(horchata);
selectObject(monjasCarmelitas);
selectObject(estigma);
selectObject(halo);
selectObject(verdugo);
selectObject(bramante);
selectObject(fanfarria);


// Modal function
const modalDefinition = document.querySelector('.modalDefinition-container')

const titleDefinition = document.querySelector('.title-definition');
const textDefinition = document.querySelector('.definition-modal');

const titleDefinition2 = document.querySelector('.title-definition2');
const textDefinition2 = document.querySelector('.definition-modal2');

const buttonModal = document.getElementById('buttonDefinitionOk')
const imgSrc = document.getElementById('definitionImg');
const videoInsert = document.querySelector('.youtubeDefinition');

const cleanHTML = ()=>{
    titleDefinition.innerHTML = '';
    textDefinition.innerHTML  = '';
    titleDefinition2.innerHTML = '';
    textDefinition2.innerHTML = '';
    imgSrc.src = '';
    videoInsert.innerHTML = ''; 
}

buttonModal.addEventListener('click',()=>{
    modalDefinition.classList.remove('active');
    cleanHTML();
})
// Functions of eventListener in every button

const buttonFunction = (buttonTitle,title,text,img,video)=>{
    buttonTitle.addEventListener('click',()=>{
        modalDefinition.classList.toggle('active');
        titleDefinition.innerHTML =  `${title}`;
        textDefinition.innerHTML = `${text}`;
        if(img){
            imgSrc.src = `${img}`;
        }
        
        if(video){
            videoInsert.innerHTML = `${video}`;
        }
    });
}

buttonFunction(galardon,'Galardón','Premio, generalmente honorífico, que se concede a alguien por sus méritos o por haber prestado determinados servicios.')
buttonFunction(organza,'Organza','El organdí y la organza son muselinas de tejido de algodón que pueden ser blancas o teñidas de colores pálidos.','https://www.dhresource.com/0x0/f2/albu/g8/M01/3D/D9/rBVaV1xUJYiAe_3cAAGUxLBvH84291.jpg');
buttonFunction(punitiva,'Punitivo', 'Del castigo o que implica castigo.');
buttonFunction(bullicio,'Bullicio', 'Ruido confuso de gritos y voces producido por un grupo de personas, generalmente en la calle o reunidas en un lugar muy amplio.');
buttonFunction(primorosos,'Primorosas','Que es bello y está hecho con habilidad, cuidado o delicadeza.');
buttonFunction(horchata, 'Horchata','Bebida que se prepara con harina de arroz, agua, azúcar y canela.','https://www.196flavors.com/wp-content/uploads/2018/09/horchata-1-FP.jpg');
buttonFunction(monjasCarmelitas, 'Monjas carmelitas', '','https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Nun_and_novice_discalced_carmelites_in_Porto_Alegre_Brazil_20101129.jpeg/200px-Nun_and_novice_discalced_carmelites_in_Porto_Alegre_Brazil_20101129.jpeg');
buttonFunction(estigma, 'Estigma','Marca o señal en el cuerpo, especialmente la impuesta con un hierro candente como signo de esclavitud o de infamia. ');
buttonFunction(halo, 'Halo','Círculo luminoso que rodea a algunos astros, especialmente al Sol y a la Luna.','https://img.asmedia.epimg.net/resizer/daXNM38JcSR0rOaUTtiG5f6ZfUM=/1952x1098/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/PM5IJ6XYPFKHXBOYFKZUZNEZCI.jpg');
buttonFunction(verdugo,'Verdugo','Persona que se encarga de ejecutar a los condenados a muerte o, antiguamente, de aplicar los castigos corporales que dictaba la justicia.','https://definicion.de/wp-content/uploads/2015/03/verdugo.jpg');
buttonFunction(bramante, 'Bramante', 'Tipo de tela ','https://scontent.frcu3-1.fna.fbcdn.net/v/t1.6435-9/74794789_713266725831881_8046664200203796480_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeE0EnbWSgtpp48l5aklQ72MnzVVQr93XY6fNVVCv3ddjvR_9wEdyNh7rtyQxU1Ww_8Vs7GW0ol7vjiProOyqjvj&_nc_ohc=ThyGQ4KVyV8AX9vQkoU&_nc_ht=scontent.frcu3-1.fna&oh=00_AfCmCoisS6pJS0xGQ8OWNogtAYKDVWP6ByZ3Flc1TOqY-w&oe=63824BC3');
buttonFunction(fanfarria,'Fanfarria','Banda de música formada por instrumentos de metal, en ocasiones acompañados de percusión, y que suele tocar por las calles en las fiestas populares y en ocasiones ceremoniosas.');

// Redirection button of activities

const buttonActivities = document.getElementById('activityButton');

buttonActivities.addEventListener('click',()=>{
    document.location.href="./activities/3-act.php";
})

