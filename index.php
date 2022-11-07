<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>CINE CLASSIC</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  </head>
  
  <body>

    <nav class="center">
        <ul class="liste">
            <li class="item">Accueil</li>
            <li class="item">Projets</li>
            <li class="item">Services</li>
            <li class="item">Contact</li>
        </ul>
    </nav>
  

    <div class="home">
      <div class="center">
        <svg id="blaze" height="350" width="500">
          <path id="courbe" d="M 50 250 s 200 -150 400 0" stroke="transparent" stroke-width="5" fill="none"/>
          <text class="title neon">
            <textPath xlink:href="#courbe">
              Cine Classic
            </textPath>
          </text>
        </svg>
      </div>

      <h2>Actuellement en salle</h2>

      <div id="scroll-parent">
        <div class="scroll-element primary"></div>
        <div class="scroll-element secondary"></div>
      </div>

    </div>

    <div id="affichesContainer"></div>

    <?php include('php/index.php');?>
    
    <script src="js/movie.js"></script>
    <script src="js/postersCreator.js"></script>
    <script src="js/movieManager.js"></script>

    <link rel="stylesheet" href="css/index.css">

    <p class="neon">...</p>
    
    <label for="pseudo">Rentrez un pseudo d'au moins 3 lettres</label>
    <input type="text" id="pseudo"> 

  </body>
</html>