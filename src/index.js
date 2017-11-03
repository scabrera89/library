var $ = require("jquery");
document.getElementById("loadButton").addEventListener("click", ajaxCall); 


function ajaxCall(){
    $.ajax({url: "https://assets.breatheco.de/json/project_list.php", success: function(result){
        //$("#loadButton").html(result);
        console.log(result);
        
        $.each(result, function(index,value){
         $("#jsonObjects").html("<h2>"+value[0]+"</h2>");
     });


    }});
}















// document.getElementById("myHI").innerHTML = "HI!";

// $("#myHI").html("HI Jquery!");
// $(".aBox").css("width", "100px");
// $(".aBox").css("height", "100px");
// $(".aBox").css("background", "gray");

// $(".aBox> div").css("background", "orange").css("width", "50px").css("height", "50px");



// // basic ajax
//  var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//      //document.getElementById("demo").innerHTML = this.responseText;
//      console.log("PLAIN JAVASCRIPT: ");
//      console.log(this.response)
//     }
//   };
//   xhttp.open("GET", "https://assets.breatheco.de/json/project_list.php", true);
//   xhttp.send();



// // jquery ajax
// $.ajax({
//     method: "GET",
//     url: "https://assets.breatheco.de/json/project_list.php"
    
// })

//  .done(function(msg){
//     //  alert("Data Saved: " + msg);
//      console.log("JQUERY: ");
//      console.log(msg);
//      $.each(msg, function(index,value){
//          $(".aBox:first").html("<h2>"+value.name+"</h2>");
//      });
//  });
 
