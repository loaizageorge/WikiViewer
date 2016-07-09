$(document).ready(getWiki);

function getWiki(){
    var URL = "https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json&callback=?";
    
   $.getJSON(URL,function(json){
       console.log(JSON.stringify(json));
   });
}