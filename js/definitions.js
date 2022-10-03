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

pillaje.addEventListener('click',()=>{
    modalDefinition.classList.toggle('active');
    titleDefinition.innerHTML = 'Pillaje'
    textDefinition.innerHTML = 'Robo o saqueo realizado con violencia aprovechando un descuido o la falta de defensa, especialmente el llevado a cabo de forma colectiva.'
    
})


hacendado.addEventListener('click',()=>{
    modalDefinition.classList.toggle('active');
    titleDefinition.innerHTML = 'Hacendado'
    textDefinition.innerHTML = 'Que tiene muchas tierras y propiedades.'
})


zaguan.addEventListener('click',()=>{
    modalDefinition.classList.toggle('active');
    titleDefinition.innerHTML = 'Zaguán';
    textDefinition.innerHTML = 'Sala o pieza de una casa inmediata a la puerta principal de entrada.';
    imgSrc.src = 'data:image/jpeg;base64,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'
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
    titleDefinition.innerHTML = 'Patriarca'
    textDefinition.innerHTML = 'Hombre que por su experiencia o sabiduría es respetado por un grupo familiar o una comunidad en los cuales goza de autoridad.'
    imgSrc.src = 'https://i.pinimg.com/474x/e7/bd/8c/e7bd8c35cfa362fc3693c51bca84862a.jpg'
})


pompaFanfarria.addEventListener('click',()=>{
    modalDefinition.classList.toggle('active');
    titleDefinition.innerHTML = 'Pompas';
    textDefinition.innerHTML = 'Exhibición gratuita o alarde de medios que denotan riqueza o importancia, especialmente la que acompaña un acto o una ceremonia.';
    titleDefinition2.innerHTML = '<br>Fanfarrias';
    textDefinition2.innerHTML = 'Banda de música formada por instrumentos de metal, en ocasiones acompañados de percusión, y que suele tocar por las calles en las fiestas populares y en ocasiones ceremoniosas.';
})



trastosJergon.addEventListener('click',()=>{
    modalDefinition.classList.toggle('active');
    titleDefinition.innerHTML = 'Trastos';
    textDefinition.innerHTML = 'Herramientas o utensilios que se emplean habitualmente en un oficio o una actividad.';
    titleDefinition2.innerHTML = 'Jergon';
    textDefinition2.innerHTML = 'Colchón relleno de paja, hierba o esparto sin puntadas o bastas que mantengan repartido y sujeto el relleno.';
    imgSrc.src = 'https://raicesdeperaleda.com/recursos/diccionario/5303ae117684378099e39c7443f1b78e.jpg';
})


cenefaBrocado.addEventListener('click',()=>{
    modalDefinition.classList.toggle('active');
    titleDefinition.innerHTML = 'Cenéfa de brocado';
    imgSrc.src = 'https://www.picclickimg.com/d/l400/pict/313131555021_/Chenille-BAROQUE-UPHOLSTERY-Fabric-Jacquard-Damask-54-wide.jpg';
})


guacharos.addEventListener('click',()=>{
    modalDefinition.classList.toggle('active');
    titleDefinition.innerHTML = 'Guácharo';
    imgSrc.src = 'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/69436981/1800';
})


claraboya.addEventListener('click',()=>{
    modalDefinition.classList.toggle('active');
    titleDefinition.innerHTML = 'Claraboya de ventilación';
    imgSrc.src = 'https://www.consumer.es/app/uploads/2019/07/img_claraboya.jpg';
})


brios.addEventListener('click',()=>{
    modalDefinition.classList.toggle('active');
    titleDefinition.innerHTML = 'Brío';
    textDefinition.innerHTML = 'Ánimo, energía o decisión con que se hace algo.';
})


antro.addEventListener('click',()=>{
    modalDefinition.classList.toggle('active');
    titleDefinition.innerHTML = 'Antro';
    textDefinition.innerHTML = 'Local frecuentado por delincuentes y personas de mala reputación.';
})


cantaros.addEventListener('click',()=>{
    modalDefinition.classList.toggle('active');
    titleDefinition.innerHTML = 'Cántaro';
    textDefinition.innerHTML = 'Vasija o recipiente utilizado para guardar, conservar y transportar líquidos.';
    imgSrc.src = 'https://upload.wikimedia.org/wikipedia/commons/1/19/C%C3%A1ntaro_de_La_Rambla_%28C%C3%B3rdoba%29.JPG';
})

hermetica.addEventListener('click',()=>{
    modalDefinition.classList.toggle('active');
    titleDefinition.innerHTML = 'Hermética';
    textDefinition.innerHTML = 'En este caso: que es difícil de conocer, entender o descifrar.';
    textDefinition2.innerHTML = '<br><br><br>(Y la mejor banda de heavy metal argentino lml )'
})

liquenes.addEventListener('click',()=>{
    modalDefinition.classList.toggle('active');
    titleDefinition.innerHTML = 'Líquenes';
    textDefinition.innerHTML = 'Organismos complejos formados por la unión íntima –simbiosis– de un hongo y, al menos, un organismo fotosintético: un alga verde (clorofícea) o una cianobacteria.';
    imgSrc.src = 'https://imagenes.elpais.com/resizer/EDQ1BMz7Ul5ZKT21jomjFsGJZtE=/414x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/RVUT7D4FBULDEWINC645MPV4LQ.jpg';
})

impavidos.addEventListener('click',()=>{
    modalDefinition.classList.toggle('active');
    titleDefinition.innerHTML = 'Impávido';
    textDefinition.innerHTML = '[persona] Que no se altera, perturba o muestra emoción alguna ante una impresión o estímulo externo que normalmente producen turbación, desencadenan una emoción o inducen a determinada acción.';
})

estopa.addEventListener('click',()=>{
    modalDefinition.classList.toggle('active');
    titleDefinition.innerHTML = 'Estopa';
    textDefinition.innerHTML = 'Parte basta o gruesa del lino o del cáñamo que se emplea en la fabricación de cuerdas y tejidos.';
    imgSrc.src = 'https://ferramsur.com.ar/wp-content/uploads/2021/03/5750-1280x720.jpg'
})

atisbar.addEventListener('click',()=>{
    modalDefinition.classList.toggle('active');
    titleDefinition.innerHTML = 'Atisbar';
    textDefinition.innerHTML = 'Ver confusamente o de forma imprecisa una cosa por la distancia o la falta de luz.';
})

exenta.addEventListener('click',()=>{
    modalDefinition.classList.toggle('active');
    titleDefinition.innerHTML = 'Exenta';
    textDefinition.innerHTML = 'Que está o queda libre o de una carga, obligación, culpa o compromiso.';
})

desgreñadas.addEventListener('click',()=>{
    modalDefinition.classList.toggle('active');
    titleDefinition.innerHTML = 'Desgreñadas';
    textDefinition.innerHTML = 'Despeinadas o con el cabello revuelto.';
})

comejen.addEventListener('click',()=>{
    modalDefinition.classList.toggle('active');
    titleDefinition.innerHTML = 'Comejen';
    textDefinition.innerHTML = 'Termita.';
    imgSrc.src = 'https://mejorconsalud.as.com/wp-content/uploads/2018/04/comejen..jpg'
})

molienda.addEventListener('click',()=>{
    modalDefinition.classList.toggle('active');
    titleDefinition.innerHTML = 'Molienda';
    textDefinition.innerHTML = 'Proceso que consiste en desmenuzar una materia sólida, especialmente granos o frutos, golpeándola con algo o frotándola entre dos piezas duras hasta reducirla a trozos muy pequeños, a polvo o a líquido.';
})

jadeo.addEventListener('click',()=>{
    modalDefinition.classList.toggle('active');
    titleDefinition.innerHTML = 'Jadeo';
    textDefinition.innerHTML = 'Respiración anhelosa por efecto del cansancio, la excitación, el calor excesivo o alguna dificultad debida a enfermedad.';
})

barullo.addEventListener('click',()=>{
    modalDefinition.classList.toggle('active');
    titleDefinition.innerHTML = 'Barullo';
    textDefinition.innerHTML = 'Ruido, desorden y confusión grandes, generalmente provocados por un grupo de muchas personas que hablan o se mueven al mismo tiempo.';
})

madreperla.addEventListener('click',()=>{
    modalDefinition.classList.toggle('active');
    titleDefinition.innerHTML = 'Madreperla o nácar';
    textDefinition.innerHTML = 'Molusco marino de valvas casi circulares, rugosas y de color pardo oscuro; vive en los fondos rocosos de los mares tropicales y se pesca para recoger las perlas que se forman en su interior y aprovechar el nácar de la valva.';
    imgSrc.src = 'https://upload.wikimedia.org/wikipedia/commons/0/08/NautilusCutawayLogarithmicSpiral.jpg'
})

implacables.addEventListener('click',()=>{
    modalDefinition.classList.toggle('active');
    titleDefinition.innerHTML = 'Implacable';
    textDefinition.innerHTML = 'Que no puede ser aplacado, contenido o suavizado.';
})

marmita.addEventListener('click',()=>{
    modalDefinition.classList.toggle('active');
    titleDefinition.innerHTML = 'Marmita';
    textDefinition.innerHTML = 'Olla de metal, con tapa herméticamente ajustada, empleada principalmente para cocinar alimentos.';
     imgSrc.src = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgVFhUZGBgZGhoaHBwaGBgaGBoYGBgZGRgYGhgcIS4lHCErIRgYJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QHhISGjQhJCE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQxNDQ0NDQ0PzQ/NDQ0NDExMf/AABEIAL0BCgMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAACAwEEBQYAB//EAD8QAAEDAgQDBAgDBQgDAAAAAAEAAhEDIQQSMUEFUWEicYGRBhMyobHB0fBCkuEjUnKC8RQWNGJjc7LCFSRD/8QAGAEAAwEBAAAAAAAAAAAAAAAAAAECAwT/xAAfEQEBAQEAAgMBAQEAAAAAAAAAAQIRITESQVEDMiL/2gAMAwEAAhEDEQA/ANZgTA1A1OamSQEbD9/NQAphAWGiU6mUljk4BICqU1NB2xRsulvbB+/JAWITAEmm+U9hQYmNRNYhUygIDUwNXmuXs6QDEKWonuBQgoN4hTC9K80oASFIYilFmQC8q9lTHPQEoAS1RKkoSUAD0rLKa7kohADCQ9WHlIhBIhKcE5yAhAJLUBanEICEyKIQx3JpCmEGzmhMCBqcG7pkkKULSExovH1QBNVim5IAhMDSgHNsnkSEloR03kWIQC/ZKssclYiAJJAjc296yn8ZY32AX90AeZ1StkOS303QZQVMSxo7b2t7yAuWr8VqP3yDk0x79VSBEkyO/fz1Kzu40z/O10tXj1MWbmf/AAi3mUH/AJ2dGR3uHyXPGsBeSfFJxOLytcehhRf6Ln8o1MZ6TvbORgMGJAJbPKeapf3ixjvZYB/J8yVQwDy1g0587nX77lcbiVPyv6uYz+DHEsc7V4Z4M+iNnEcW25qg9CBBSTjD9hT/AG4hHT+M/GxhvSF5OVzBmESL76EEG4KuN45zZ5O+RC45uKiuXETmaAPD+ivDiAPLz+Sc1f1Pwz+Oto8Xpu3Lf4h8xZXGVg4SCD3GVxP9rB090Qjp4kg2MO5ixVTd+03+X47WUJK5ujxl7dYePIq/Q4zTdZ0sPXTz+qualZ6xqNOV4qGmbrzyqQB5UBeUlALchKIhQQmRZUEIyhKAAhRCNBIQGaQm0zshhE1MCcN0xl0KhkhAPHLdTTOy826Mie9ASx0KrxTijKYj2n7AbdTyVfjXEvVMsJe6wHxcuONdzpLrT4nzKz1rniNMY+TRxnEn1T2zYaDQKtSqEXkRySGjb+iim6N5+CwuuuiZ4uuqrz3wOaQHWlA5phR1pwT8R1ASal295AAESe4T8UT67iA0ve4NEAFxIA5NB0HRLe4xlzGNYm06TGic4mymOeW2zBD613MqtSYY1Tg0/dk7YJm/Yy93MqJPNLLwNSPikPqDYE+4JfJXxhtGvJIgGNynuAMWg7nMb8lWwzYmd1ZY/ol8i+EOoi/6K6x55qk16Y2sldKmYuOqkGUbK+aZ20KzziFDKpA2Tmh8W3g+IuZ7L7fum7fLbwXQYLiDaotYjUcvqFwTKru496tYXFuY5r2m48iOR6K8/wBLPbLf8pfT6A0KHJWDxTajGvbv7joR5ppC6Y5AAIXJhCEhMAKEonKCEiAQohGQohAZzUNSo1vtOa2dJIExylE0rK45wg1wHNcA9ogZhLSCZM2kFVQ1mVAdHA9xCYBK4U+jFfnSPmP+qkcAxLdGMP8AC8j6Ke38Pkd80o3VWAwXNaergPivnWLZiaIBeHMDjAcKrjeJsA7kFHDaj6pdkwzase050lxJ/wA2YSldWXki85lnbeNb0nxX7cg6BrY5Xv8ANY5xQOuiTj2uDnZmBhBuwCMvT3jzVQDmsNeb5b4sk5GtRe3Z1l55EyB4rMa/wRZzuZCjjWWL/rANCh9eRuqnr+iHMTukpb9ZPM+KIVBGiqtajgoBj+ll71c6n3pYaSjDDCQeLB9lCAiyHkoDSgPF8aom1EotKkgBBwxta+q87EiUkwosjhdqx68HmnNrhVfWAbIRc205o4OrJrCVPrm/hP0VV9u7klPfAsLlVM9Tbx3/AKF1ZpvYfwvkfzNa75rpF8y4Vx5+GD2jIJcPaDnHstDIABA/CixPHH1XsxAeGmkWgZQ4CHF09mTMwQfBb51JOOPWb3r6UUKXRqh7Q9pBDgCCNCCiJWqHigKKUJCA9CCERlRKCZgRBA0o2lMPQjQPsQmBqAyfSXAmrS7Al7HZwB+IQQ4d8H3LO9EcYykxzHuDZdIJBg2ggnYiN11LQsziHAKdY5u0x51cwgE940Kiy97FS+OVg+lGJp1XSwg9mC4A+0Dbv2XJGpGog+4n5LqeNcHZhmtDXveXzJcR+HSwFtSuVrC/ios8+WmbyeDGVJTmu6rJDyHa6q5VrOdcmTzOvnupuV52ugjkiDhyVNlSIlWKLgd/CPJZ2cazRufwRByUySYEGOo+Eqwyk792e6/wUr6lrymschbQfPsP/K76KzS4fUJj1b/yO2vySV1XcZXi5aNHhOIfJbSJAsSYAB5EnRRieE1mWe1rTaxfTm/TN1RwvkynOOwSy47yPBaFSg8CXZe7MJ8lXczXtttvJg7Wt1TgqvlXsxGw96irbR4PPWAeV7nmgzkRBJO9hF/NPiLTRVHIBDVxAFpJ7rD6+5Va+IJJ25C8ckg1CRb7lVMpu/w+rjI0t7z77BVqFZznQdz1nokvpncp/CwM7Z0B+C0mZIyutW+W3wrg9es92RklrhLy5oa2QDcm/kEXG8LXa/JVYRlAGYDsmIgh2h/RX+E4jE0XVPVMc9gyZ8rQ4yWhw7Ops7YJz8LjMW4ZmPY3dzxkgbw038gmjvkvgHpL6ilkLmES6MzX9mToHNBBG60f76T+Gkf5qg/6LpeHcOZRptptEhu51JOpKN+BpnWmw97Gn5K5LIi2W+nMj00/02HuqkfFnzTG+mLYk0r9KjD8YW0/g2HOtCn+Rv0SH8Awx/8AgzwkfAo8jwnhHGWYgOLAWlpAc05TqJBBaSI+i0VUwXDqVEEU2BgJkgTc6blWkyZjUwJYCY1WSag0R0yge2WoqegSB8KQEDUwIDnvTOiTTY/91xE8pFj7lwL6ecnLZ+7OfVnPuX1HjjM1F4OlvivlPFCQQ2005AI1uZuVnqf9NM+lNzSHQ4XB0IVhsbFEzGhwioM/XR48d/FOpYdhu147ndk/mHZ+CmqzPwGXML7pwJhvMKX4R7RJaY5i4/MLJLX9VDSLFJnaO3dI6FaDcHebEDWTrz1uqBuJFjyj4q9hKrt4jf6Qs9NIv4XDBwJEiDcTrsuz4K3sNLmZXAdmCR2dASPErl+G057UamI+karrcY9wpACZsJsBG91nppljcYxZDnBpAFrSTp3lc/icVrveb89J1uVd4nT5m5v4LGqUyrkTSK9fMbZQANGiPPml1DOlhadSTz7kxzOg+K8KZ6BUiqb8OJsoqidDCfVeAgkn2Wk9dvPRV5qec9q4Z0UF3IJz2xJJHWO15xZIc8B0CCeunloqTbAPFpi252/VP4RTD3gAbj4hV+KMuBMnfl4Ld9FKYBzRvrzVfSb7dr6GUSKT3uEF73HwHZHuAXQkrN9Hf8NT7vmVpwtM+mVAVBKl2qFyZPEoXKVDkAtwUQvFRCAz2lMaEoJjHqiNaVFK0hRKk6g+HmkFgQiAQNcjBQFPjQ/Yv8PivkvG/bkL63xZv7F/d8wvkvFh2+9Z6/00z6qlSqge0PEKxSjY/fcqbkxuyLDzeNWlUeNCZ5iye2q78TQd+00En+bX3qgysQP6H4qwzFQIInzHvWNldEsrSp0WGCGRIBMFw3i2aehWtguES0PbOUyJt3kdfJYmE4i0G7bbxBse+F0HCOK0WOEZwDEzzGlhci5ss9XUaZma1KHCnNYakhzRci+YACSfKbap44iHgMZ2nONukAm++69W4kxzXNZcuBHLURJJiwn3LOqYQgtLHAGIMRIEai6y7+tOc9LGN4NUeM5eB2b9kgC/P79ywHYE5sufyBjzV/jFapkbTz2m8OILgdyPPmstmLA5yBfqVUuuIsn2LEYZjJzOJItDefXluqj6zBENmeZJjwBSnvm5mSe4cyqdd55wNlpEakNxOKgw0NHc0KjWqOdqSfNG8kpTz7lpGdCQQAJ6pLjeU0AuCU61lcZ6LJJIuuu9GxZsdfvzXItbf4rsfR32m8pHki/RZ9V3fo5/hqX8APmtIlZ3AP8ADUf9tnwC0FpPTKhQvKIlJqG6YMAUFQ1y8SkCyvSheUv1hQFAORApQRAqyWAURNvvZKa5MzJBYBA1RioFnveWmTpz+qMP3iR70AfFn/sX32+YXynjXtL6ZxR4NF8HYfEL5dxc9qFnr20z6qkxybkVZpvKs0njwToy8CmNFkwsCEshZ9acqWWKt0KhBsVSYDOie1xnkp00zfC+cS6RvAhdPwWuAO0CSVx9J5nX9V0GGfYdyy3PDXN8m8Yqi+30J71iYamXEmYAkk9wW3isICwucdOkz02XPVKkEgWB1Rj1yHr30/EHqqZAnVLM6IXEgrSZZ3R9RUXuATKtY6Ko55mOarOWe9Rao6XNuir4h17D73RsdASqj5VT2jV8JwrQT01K6zgju009QuQpOIiNSV1nCTDmjqPci+xn0+g8FP8A69L/AG2f8QrwKzeEvijSH+mz/iFeBVz0yonPSnlE4SlNdmHUaqiEHLwdZQUDalyEgJxSpClz0rMgM9j0cpDXJrHKyNY5MzJAN0TXXSBznWKqsqFpjUI3vS8OMzx5oBPF2lrHdYXznjPtyNNPFfSfSBw9Wb7gea+ZcVPa679RsVnfa8+lIJ7BaQkNcipp0Rba+DCsh4I2VRoB7/vVT6ojRZ2Rrm2LDWwjAlJa8omVRMKbGnYayl2vFa+EqZTBNu6VkNqdU+hVva/QqNRebHTvybEzl0gxoY18VzWJZ2jt5LWxlR7i0tENAixmJgmeSp18I4O7TY74ErPPhevKg54j7hVKlQJ2JpkGAbKnkvK6Mye3Pq30F7p0XmM3Kio69kZFlf0z+3nOskORlLefBOROq9RMOHP7hdZwo9pv3yXJ4dkuFt11XCzvysFOvas+q+g8Pb+ypjcMZ/xCtNjyVHhtTsNH+UR5K4x0q4zTJ1UNsT1QOsSNkMpkY56qvqdsRy/RTWqwCVSoVOf3OvvTDQcUN0tj7ddFGZAZjCjY9VWuKLNuqJbLl7MkMeoL0A59TVWMBTIueSz3m8LQa7KAJM8kgHjdPNReIuBmEc23Xyzio7U9SvrrW2vedV8z9JcEadRzYtMjq03B+I8Co17Vn0wAEbdUIRtcmZrXpgqwOqQWowFNipauNrRqwHuKhtdkmRCSwwny3ko5Gktp2HczMDJgd0fqrjMmeQZB6R7lnMA2TxTHQeazsjTLbe5hYQ1xkxsf6KtimPOVskgbmQBKQwgtjMD479EFao4tDcxIA3Ok7KJny0t8EuY1vtOB7rrPqVBJy+Sa9oi91XaQNPvzW2Y59V57DMqTAGpKEVCpzyrR2E5l56aQEpzSdE00zDDtDkLroMCYHn9Vg02wbXPwXTcCoF9VjdbgnuEOM+UfzBTfa8+M129NmVrR+60DyACe16U8r1N2oWrI9z5iyWXwlsfq0qR1SBeNOZp6EffvVJtS/wB2VrEMuf3TB6SsllWXmdD2UybFJ1jzQZ0nDVLSh9agMxlRG16pNcmsqJkutfZKD0sP0Qh9ygLlAjOStHDMPte/6LLwQkx4lbLbIBkrH49wr+0NsO2y46jdp71pEkmE6Q0JXycfI8Zg8stAMg6Efd1SaNl9J47wZ1QGowQ4XLd3Dc964nE4KZI1+/eo7z20530oB2yYx2yWGEGDqNivOJmdCgpeLDHJs2VZp5o45FTYuXwssd97qzTcTby0+KptmL/NHTcZ38pUWNM6Wm0SHAEEzzA3Ta7AB7J/KkOxLjAcZjSR7geSrPcTcn42S51Xy56erG+kKo8i6Oo6xMdByU4SgDMzlg3m0xYT8hda5jHV7VZr1DnK0/Cm7mxlAcRZwsJMSW6wFWDVVQlh8PvkmsGsdyJlLKJIudirTKf3aPuym1cyHDUZXf8Ao9gsjZcIe4A31DfqfpyWb6O8GBy1Hi2rWnfk49OS6dw3GrfuPL5Izn7TrU9Qx4SGuhysB0iQqNZ4B1uJVoNqGLr06pb3yULncr93SyAk1IHQ6/VYuKOR7SNCVoveQD4lZOPqC3QgjnG6YXaVSB3E+4rBr+kbWuc2dCR5GEWL4gGMc86CYHw87Llf7IXdom5ue83KCde169TqKoyoVLSmTQ9Yg9Yq5cm4btOAKA3+HU4bJ1Ktl02CqsMBNLsuiAtF4YOZ5KaTCe07XlyVfDtntG5Ke50IM99SNNVi8U4QyrLpyP8A3huevPvV4Om6Y0wJhKzp9fPuJ8Mew9tnc8Cx8d1jvpny8l9aqtDh2gHA7ESFh4/0epukt7B1sJHkT81FlnpUsvtwJpzca99vBEB+u6sYrCgEwYjoquayUUcy4RsmyEu22SuaVhzS2DzCkga80hz58Aoa4lszoYhTxXy4DEN+/wBE3hda5Y1oLjJBOoNrAExslVLdUime0Fpm8RfbXe14EMZnHaadYFss9SbyO5UMOR+InS0Nk3sTPcXW5xyVkvebl3fYAmdbi66Lg3AGPb6x5JETlAjpBdr5Qi3o1J7YuBwrqjzlYTObsgWAN2SZtcm/IQuq4XwFrO08te6xiOyCSMx66NjbXmtOlRaxsNaGjkBCZP0Tk/U/ItuH7IGaCGgSJmzSLdCTJRsoSIzASToD2ZDAHDmRlOv7ylpXgYKaQGmQYkQXE73nN7X5h+XugamFuDmNjPXRgnv7B/NrzfVEhA10tQFRjRa4ka2N7AZje5t79VL2XnN10Noc92UdCHAH+FDUF0NR0AoCriiMhbm5TrNmtaTruQSsl9RpJJJtNoG73uHh2gPBFiKxMkqjUMSeiZMziTw57W5uy1ocRG4gD4Kln6qs6sXVHE847gLKfX9PegP/2Q==';
})

