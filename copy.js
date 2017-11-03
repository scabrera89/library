document.getElementById("loadButton").addEventListener("click", ajaxCall); 

function (event){
    
    var ajax = new XMLHttpRequest();
    ajax.open("GET", "https://assets.breatheco.de/json/project_list.php", true);
    ajax.addEventListener("load", ajaxArrives);
    ajax.send();
}

function ajaxArrives(event){
    var jsonObj = JSON.parse(event.target.response);
    
    console.log(jsonObj);
    
    
   var htmlLI = " ";
    var cardFormat = '<div class="card-header rounded mx-auto col-6">'+
    '  <h4 class="card-title">%title</h4> ' +
  '<img class="card-img-top" src="%img" alt="Card image cap">' +
 ' <div class="card-body"> ' +
  
  ' <p class="card-text">%desc</p>'  +
 ' </div> </div> ' + '<br>';


 for (i = 0; i < jsonObj.length; i++){
     var cardAux = cardFormat.replace("%title", jsonObj[i].name);
      cardAux = cardAux.replace("%desc", jsonObj[i].description);
     cardAux = cardAux.replace("%img", jsonObj[i].thumb);
    
    htmlLI += cardAux;
    
      
     
    }

    document.getElementById("jsonObjects").innerHTML = htmlLI;
    console.log(htmlLI);
    
    
    
}