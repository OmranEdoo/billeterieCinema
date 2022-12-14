window.onload = function () {
    var url = document.location.href,
      params = url.split('?')[1].split('&'),
      data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) {
      tmp = params[i].split('=');
      data[tmp[0]] = tmp[1];
    }

    $.ajax({
      method: "POST",
      url: "../php/dbGetter.php",
      data: {query: "SELECT * FROM session WHERE id="+data.id}
    }).done(function(sessionData) {

      var movieRoomId = sessionData.split(" ")[2];
      var longueur;
      var largeur;

      $.ajax({
        method: "POST",
        url: "../php/dbGetter.php",
        data: {query: "SELECT * FROM movieroom WHERE id="+movieRoomId}
      }).done(function(movieRoomData) {

        var arrangement = movieRoomData.split(" ")[1].split("-");
        var side = parseInt(arrangement[1]);
        var center = parseInt(arrangement[2]);
        
        longueur = parseInt(arrangement[0]);
        largeur = 2*side+center+2;

        var grid = document.createElement("div");
        grid.id = "seats";
        grid.style.display = "grid";
        grid.style.gridTemplateColumns = "repeat("+largeur+","+"20px)";//strColumns;
        grid.style.gridTemplateRows = "repeat("+longueur+","+"10px)";//strRows;

        console.log("rrr ");
        console.log(grid.style.gridTemplateColumns);
        console.log(side);
        console.log(center);
        console.log(grid.style.gridTemplateRows);
        console.log("rrr ");
  
        $.ajax({
          method: "POST",
          url: "../php/dbGetter.php",
          data: {query: "SELECT * FROM seats WHERE sessionId="+data.id}
        }).done(function(seatsData) {
  
          seatsData.split("\n").forEach(seat =>{
            if (seat != ""){

              seatSplit = seat.split(" ");
  
              let seatBtn = document.createElement("button");
              seatBtn.className = "seat";
              seatBtn.id = seatSplit[0];
  
              if (seatSplit[4] == "free")
                seatBtn.style.backgroundColor = "blue";
              else
                seatBtn.style.backgroundColor = "red";
  
              //console.log(seatSplit[2]+" "+seatSplit[3]);
              let y = parseInt(seatSplit[2]);
              let x = parseInt(seatSplit[3]);
              console.log("x0 "+x);
              
              if (parseInt(seatSplit[3]) >= side){
                if (parseInt(seatSplit[3]) == side){
                  let empty = document.createElement("div");
                  empty.style.gridRow = x+";";
                  empty.style.gridColumn = y+";";
                  grid.appendChild(empty);
                }

                x += 1;
              }
              console.log("x1 "+x);
              if (parseInt(seatSplit[3]) >= (side+center)){
                if (parseInt(seatSplit[3]) == (side+center)){
                  let empty = document.createElement("div");
                  empty.style.gridRow = x+";";
                  empty.style.gridColumn = y+";";
                  grid.appendChild(empty);
                }

                x += 1;
              }
              console.log("x2 "+x);
              seatBtn.style.gridRow = x+";";
              seatBtn.style.gridColumn = y+";";
  
              seatBtn.addEventListener("click", function(e){
  
                let state;
                if (seatBtn.style.backgroundColor == "blue"){
                  state = "reserved";
                  seatBtn.style.backgroundColor = "red";
                }
                else{
                  state = "free";
                  seatBtn.style.backgroundColor = "blue";
                }
  
                $.ajax({
                  method: "POST",
                  url: "../php/dbGetter.php",
                  data: {query: "UPDATE seats SET state='"+state+"' WHERE id="+seatBtn.id}
                }).done(function() {
  
                });
              })
  
              grid.appendChild(seatBtn);
              document.getElementById("body").appendChild(grid);
            }
          })
        });
      });
    });
  }
