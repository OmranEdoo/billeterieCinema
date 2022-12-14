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
    
    <script src="js/movie.js"></script>
    <script src="js/movieRoom.js"></script>
    <script src="js/seats.js"></script>
    <script src="js/session.js"></script>
    <script src="js/postersCreator.js"></script>
    <script src="js/movieManager.js"></script>
    <script src="js/movieRoomManager.js"></script>
    <script src="js/sessionManager.js"></script>
    <script src="js/seatsManager.js"></script>

    <div class="text-gray text-neon grayBar">
      <p>Site codé par Omran</p>
    </div>
    
    <div id=downBar>
      <div id=networksBar class="text-white">
        <p class="padLeft0 padRight10">Retrouvez-nous sur </p>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-gray hover-white marg10">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M20 12.0489C20 7.60362 16.4183 4 12 4C7.58172 4 4 7.60362 4 12.0489C4 16.0664 6.92548 19.3962 10.75 20V14.3756H8.71875V12.0489H10.75V10.2756C10.75 8.25838 11.9443 7.14411 13.7717 7.14411C14.647 7.14411 15.5625 7.30131 15.5625 7.30131V9.2821H14.5537C13.5599 9.2821 13.25 9.90254 13.25 10.5391V12.0489H15.4687L15.1141 14.3756H13.25V20C17.0745 19.3962 20 16.0664 20 12.0489Z" fill="currentColor"></path>
        </svg>

        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-gray hover-white  marg10">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.2896 20C15.8368 20 19.9647 13.8438 19.9647 8.50514C19.9647 8.33029 19.9647 8.15622 19.9528 7.98294C20.7558 7.41103 21.449 6.70294 22 5.89174C21.2511 6.21846 20.4566 6.43278 19.6432 6.52737C20.4998 6.02249 21.141 5.22839 21.4472 4.29283C20.6417 4.76345 19.7606 5.09504 18.8415 5.27345C17.2876 3.64657 14.6882 3.56804 13.0358 5.09804C11.9702 6.08472 11.518 7.55509 11.8488 8.95804C8.54952 8.79523 5.4756 7.2609 3.392 4.73706C2.30288 6.58306 2.8592 8.94457 4.6624 10.1301C4.00936 10.111 3.37064 9.93755 2.8 9.62438V9.67558C2.80056 11.5987 4.17736 13.255 6.092 13.6358C5.48792 13.7981 4.85408 13.8218 4.2392 13.7052C4.77672 15.3509 6.31728 16.4783 8.0728 16.5107C6.61976 17.6351 4.8248 18.2454 2.9768 18.2436C2.65032 18.2429 2.32416 18.2235 2 18.1853C3.87648 19.3709 6.05992 19.9998 8.2896 19.9968" fill="currentColor"></path>
        </svg>

        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-gray hover-white  marg10">
          <path d="M19.5796 6.75734C19.3756 6.23184 19.1036 5.78671 18.6584 5.34158C18.2133 4.89644 17.7682 4.62442 17.2427 4.4204C16.7357 4.22256 16.1484 4.08655 15.3014 4.04946C14.4482 4.01236 14.1762 4 12 4C9.8238 4 9.55178 4.00618 8.69861 4.04946C7.84544 4.08655 7.2643 4.22256 6.75734 4.4204C6.23184 4.62442 5.78671 4.89644 5.34158 5.34158C4.89644 5.78671 4.62442 6.23184 4.4204 6.75734C4.22257 7.2643 4.08655 7.85162 4.04946 8.69861C4.01236 9.55178 4 9.8238 4 12C4 14.1762 4.00618 14.4482 4.04946 15.3014C4.08655 16.1546 4.22257 16.7357 4.4204 17.2427C4.62442 17.7682 4.89644 18.2133 5.34158 18.6584C5.78671 19.1036 6.23184 19.3756 6.75734 19.5796C7.2643 19.7774 7.85162 19.9134 8.69861 19.9505C9.55178 19.9876 9.8238 20 12 20C14.1762 20 14.4482 19.9938 15.3014 19.9505C16.1546 19.9134 16.7357 19.7774 17.2427 19.5796C17.7682 19.3756 18.2133 19.1036 18.6584 18.6584C19.1036 18.2133 19.3756 17.7682 19.5796 17.2427C19.7774 16.7357 19.9134 16.1484 19.9505 15.3014C19.9876 14.4482 20 14.1762 20 12C20 9.8238 19.9938 9.55178 19.9505 8.69861C19.9134 7.84544 19.7774 7.2643 19.5796 6.75734ZM18.51 15.2334C18.473 16.0124 18.3431 16.4389 18.2318 16.7172C18.0896 17.0881 17.9104 17.3601 17.6321 17.6383C17.3539 17.9165 17.0881 18.0896 16.711 18.238C16.4266 18.3493 16.0062 18.4791 15.2272 18.5162C14.3802 18.5533 14.1329 18.5657 11.9938 18.5657C9.85471 18.5657 9.60124 18.5595 8.76043 18.5162C7.98145 18.4791 7.55487 18.3493 7.27666 18.238C6.90572 18.0958 6.63369 17.9165 6.35549 17.6383C6.07728 17.3601 5.90417 17.0943 5.7558 16.7172C5.64451 16.4328 5.51468 16.0124 5.47759 15.2334C5.4405 14.3864 5.42813 14.1329 5.42813 12C5.42813 9.86708 5.43431 9.60742 5.47759 8.76662C5.51468 7.98764 5.64451 7.56105 5.7558 7.28284C5.89799 6.9119 6.07728 6.63988 6.35549 6.36167C6.63369 6.08346 6.89954 5.91036 7.27666 5.76198C7.56105 5.6507 7.98145 5.52087 8.76043 5.48377C9.60742 5.44668 9.8609 5.43431 11.9938 5.43431C14.1267 5.43431 14.3864 5.44049 15.2272 5.48377C16.0062 5.52087 16.4328 5.6507 16.711 5.76198C17.0819 5.90417 17.3539 6.08346 17.6321 6.36167C17.9104 6.63988 18.0835 6.90572 18.2318 7.28284C18.3431 7.56723 18.473 7.98764 18.51 8.76662C18.5471 9.6136 18.5595 9.86708 18.5595 12C18.5595 14.1329 18.5471 14.3926 18.51 15.2334Z" fill="currentColor"></path><path d="M11.9938 7.88873C9.72489 7.88873 7.88254 9.73108 7.88254 12C7.88254 14.2689 9.72489 16.1113 11.9938 16.1113C14.2628 16.1113 16.1051 14.2689 16.1051 12C16.1051 9.73108 14.2628 7.88873 11.9938 7.88873ZM11.9938 14.6708C10.5224 14.6708 9.32303 13.4776 9.32303 12C9.32303 10.5286 10.5162 9.32923 11.9938 9.32923C13.4714 9.32923 14.6646 10.5224 14.6646 12C14.6646 13.4714 13.4652 14.6708 11.9938 14.6708Z" fill="currentColor"></path><path d="M16.2659 8.68625C16.7951 8.68625 17.2241 8.25722 17.2241 7.72798C17.2241 7.19875 16.7951 6.76971 16.2659 6.76971C15.7366 6.76971 15.3076 7.19875 15.3076 7.72798C15.3076 8.25722 15.7366 8.68625 16.2659 8.68625Z" fill="currentColor"></path><defs><radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(8.64134 19.9666) scale(16.1427)"><stop stop-color="#FFD776"></stop><stop offset="0.2463" stop-color="#F3A554"></stop><stop offset="0.3793" stop-color="#F15C3C"></stop><stop offset="0.5394" stop-color="#D94867"></stop><stop offset="0.6995" stop-color="#C32F87"></stop><stop offset="0.9122" stop-color="#7D63A7"></stop><stop offset="0.9852" stop-color="#5C6CB3"></stop></radialGradient><radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(10.2723 16.0908) scale(8.28951)"><stop stop-color="#FFD776"></stop><stop offset="0.2463" stop-color="#F3A554"></stop><stop offset="0.3793" stop-color="#F15C3C"></stop><stop offset="0.607" stop-color="#D94867"></stop><stop offset="0.8346" stop-color="#C32F87"></stop><stop offset="0.9577" stop-color="#7D63A7"></stop><stop offset="1" stop-color="#5C6CB3"></stop></radialGradient><radialGradient id="paint2_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(15.8654 8.68195) scale(1.93713)"><stop stop-color="#5F6DB3"></stop><stop offset="1" stop-color="#5C6CB3"></stop></radialGradient></defs>
        </svg>

        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-gray hover-white  marg10">
          <path d="M17.544 5.45079C13.8612 4.84974 10.1027 4.84974 6.42 5.45079C4.314 5.88391 3 7.21865 3 8.95999V15.1475C3 16.9154 4.314 18.2324 6.456 18.6832C8.28795 18.9861 10.1423 19.1399 12 19.1429C13.8634 19.1425 15.7237 18.9917 17.562 18.6921C19.65 18.3031 21 16.9242 21 15.1563V8.96883C21 7.20981 19.65 5.83088 17.544 5.45079ZM14.934 12.4692L10.434 15.121C10.3636 15.1631 10.2824 15.1846 10.2 15.1829C10.1219 15.1822 10.0449 15.1641 9.975 15.1298C9.90423 15.0876 9.84612 15.0278 9.8066 14.9564C9.76707 14.8849 9.74754 14.8045 9.75 14.7232V9.41963C9.75068 9.34135 9.7717 9.26454 9.81108 9.19647C9.85045 9.12841 9.90688 9.07135 9.975 9.0307C10.0456 8.99356 10.1244 8.97413 10.2045 8.97413C10.2846 8.97413 10.3634 8.99356 10.434 9.0307L14.934 11.6825C14.999 11.7232 15.0526 11.7794 15.0897 11.8458C15.1268 11.9123 15.1462 11.9868 15.1462 12.0626C15.1462 12.1383 15.1268 12.2129 15.0897 12.2793C15.0526 12.3458 14.999 12.4019 14.934 12.4427V12.4692Z" fill="currentColor"></path>
        </svg>
      </div>
    </div>

    <div class="grayBar">
      <p class="text-left text-gray">© Cine Club all rights reserved</p>
    </div>

    <link rel="stylesheet" href="css/index.css">

  </body>
</html>