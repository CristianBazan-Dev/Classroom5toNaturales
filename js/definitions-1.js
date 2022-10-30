

// Function selection of button
const selectObject = (obj)=>{
    obj = document.getElementById(`${obj}`);
}


selectObject(desfachatadas);
selectObject(comadres);
selectObject(mantillaEspañola)
selectObject(lejia);
selectObject(quinque);
selectObject(fechoria);
selectObject(plazaDeArmas);
selectObject(cinchaDeCuero);
selectObject(incertidumbre);
selectObject(inmisericorde);
selectObject(austero);


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

buttonFunction(desfachatadas,'Desfachatadas','Actitud de la persona que obra o habla con excesiva desvergüenza y falta de comedimiento o de respeto.')
buttonFunction(comadres,'Comadre','Madrina de un niño respecto a los padres y padrino de este.');
buttonFunction(mantillaEspañola,'Mantilla española', '','https://www.elrocio.es/3017-large_default/mantilla-mod-31a31.jpg');
buttonFunction(lejia,'Lejía','Lavandina','https://ayudin.clorox.com/wp-content/uploads/2019/05/AR_Lavandina_Clasica_1L_Covid-copy-1.png');
buttonFunction(quinque, 'Quinqué','Lámpara de combustible líquido','https://correos-marketplace.ams3.cdn.digitaloceanspaces.com/prod-new/uploads/correos-marketplace-shop/1/product/17296-n2puhxag-spearhead-pack-quinque-de-barco-rojo-rojo-spearhead-3.jpg');
buttonFunction(fechoria, 'Fechoría', 'Acción mala o delictiva.');
buttonFunction(plazaDeArmas, 'Plaza de armas','Dícese también Plaza de Armas de la ciudad o fortaleza que se elige en el paraje donde se hace la guerra,<br> a fin de poner en ella las armas. Esta es la plaza de armas de Lima, Perú: ','https://dc3.com.pe/wp-content/uploads/2021/01/DC3-Plaza-mayor-de-Lima-01.jpg');
buttonFunction(cinchaDeCuero, 'Cincha de cuero','Faja con que se asegura la silla o albarda sobre la cabalgadura','https://http2.mlstatic.com/D_NQ_NP_620705-MLA44495656374_012021-O.jpg');
buttonFunction(incertidumbre,'Incertidumbre','Falta de seguridad, de confianza o de certeza sobre algo, especialmente cuando crea inquietud');
buttonFunction(inmisericorde, 'Inmisericorde', 'Que no se compadece por nadie');
buttonFunction(austero,'Austero','Que es sencillo y sin alardes ni adornos superfluos.');

// Redirection button of activities

const buttonActivities = document.getElementById('activityButton');

buttonActivities.addEventListener('click',()=>{
    document.location.href="./activities/1-act.php";
})

