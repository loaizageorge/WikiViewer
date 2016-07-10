$(document).ready(function(){
$("#search").click(function(){
  $("#test").hide();
});
    });


function getWiki(keyword){
    var URL = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch="+keyword+"&prop=info&inprop=url&callback=?";
    
   $.getJSON(URL,function(json){
       $(".hidden-heading").show();
      $("#test-title-1").html(json.query.search[0].title);
       $("#test-snippet-1").html(json.query.search[0].snippet);
        $("#test-title-2").html(json.query.search[1].title);
       $("#test-snippet-2").html(json.query.search[1].snippet);
        $("#test-title-3").html(json.query.search[2].title);
       $("#test-snippet-3").html(json.query.search[2].snippet);
        $("#test-title-4").html(json.query.search[3].title);
       $("#test-snippet-4").html(json.query.search[3].snippet);
        $("#test-title-5").html(json.query.search[4].title);
       $("#test-snippet-5").html(json.query.search[4].snippet);
      
   });
}

function sendToPage(){
    var input = document.getElementById("keyword").value;
    getWiki(input);
    
}