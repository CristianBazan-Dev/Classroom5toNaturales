<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>5to. NaturaLengua y Literatura - Prof. Cristian</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,400;0,600;0,700;0,800;1,100&display=swap" rel="stylesheet">
    <script src="js/validation.js"></script>
</head>
<body>

<div class="grid-container" id="content">
    <header>
       

        <h1 class="title"><a href="index.php">5to. CS NATURALES</a></h1>
 
       
            <nav class="nav">

                <div id="student-name" class="student-name"></div>  
                        <ul class ="ul-nav">
                            <li id="student-name-userScreen" class="student-name-userScreen"></li>  
                            <li class="li-nav" id="att">Atributo personal</li>
                            <li class="li-nav"  id="missions">Misiones</li>
                                <ul class="li-nav-missions">
                                    <li class="task task-I" id="task-I">La búsqueda de los recursos.</li>
                                    <li class="task task-II" id="task-II">Rescate de la reina.</li>
                                    <li class="task task-III" id="task-III">Encuentro con la magia.</li>
                                    <li class="task task-III" id="task-IV">Aprendiendo a leer mentes.</li>
                                </ul> 
                            <li class="li-nav" id="extraMissions">Misiones extra</li>
                                <ul class="li-nav-missions">
                                    <li class="task extraTask-I" id="task-I">Resistente al dispositivo maléfico.</li>
                                    <li class="task extraTask-II" id="task-II">Participante activo en las asambleas del pueblo.</li>
                                    <li class="task extraTask-III" id="task-II">Inmune a los ataques de charlatanería.</li>
                                </ul> 
                            <li class="li-nav" id="level">Nivel</li>
                            <li class="li-nav"><a href="" class="link-nav"></a></li>
                        </ul>
    
                    

                        <div class="closeIcon-user">
                            <span class="bar-user-1"></span>
                            <span class="bar-user-2"></span>
                        </div>

                         <div class="modalInfo-container">
                            <div class="modalInfo"  id="modalInfo">
                                <div class="modal"></div>
                            </div>
                            
                            <button class="buttonModalInfo" id="buttonInfoOk">Ok</button>
                         </div>
                    </nav>
    </header>

    <main>
       
        
        <div class="modalProjects-container">
           
           

            <div class="modal-projects">
                <div class="card card-1">
                    <div class="card-content">
                        <h2 class="card-title">
                            Clases
                        </h2>
                        <p class="card-body">Clases dadas por el prof. Cristian. El tema viene siendo el Realismo mágico y el rol de la mujer dentro de este género literario.</p>
                        <a href="screens/class.php" class="button-card-Projects-2">¡Entrar!</a>
                  
                    </div>
                </div>

                <div class="card card-2">
                    <div class="card-content">
                        <h2 class="card-title">
                            Publicaciones
                        </h2>

                        <p class="card-body">Blog. En esta sección quedarán asentadas sus producciones </p>
                        <a href="screens/building.php" class="button-card-Projects-2">¡Entrar!</a>
                    </div>
                </div>

                <div class="card card-3">
                    <div class="card-content">
                        <h2 class="card-title">
                            #Datazos
                        </h2>

                        <p class="card-body">Material complementario. No sólo sobre lo dado en clase sino también sobre aquello que mencionemos y despierte la curiosidad.</p>
                        <a href="screens/building.php" class="button-card-Projects-2">¡Entrar!</a>
                    </div>
                </div>

               <button class="jokeButton" id="jokeButton"><a href="https://www.youtube.com/watch?v=G1IbRujko-A&t=33s&ab_channel=10Hours" target="_blank">¡10 automático!</a></button>

               

                
                   
            </div>
        </div>

    </main>

    <footer>

    </footer>

</div>

    
   
    <script src="js/menu.js"></script>
    <script src="js/studentTitle.js"></script>
    <script src="js/missionsData.js"></script>
   
</body>
</html>