$(document).ready(getWiki);

function getWiki(){
    var URL = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=apple&srinfo=suggestion&callback=?";
    
   $.getJSON(URL,function(json){
      console.log(JSON.stringify(json));
       //console.log(json.search.title);
   });
}