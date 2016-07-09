$(document).ready(getWiki);

function getWiki(){
    var URL = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=apple&prop=info&inprop=url&callback=?";
    
   $.getJSON(URL,function(json){
      $("#title").html(json.query.search[2].title);
       $("#snippet").html(json.query.search[2].snippet);
       console.log(json.query.search[0].title);
   });
}