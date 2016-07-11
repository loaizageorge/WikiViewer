$(document).ready(function(){
    
    $(".search-bar").keyup(function(event){
    if(event.keyCode==13){
       $("#search").click();
    }
});  
$("#search").click(function(){
  $("#test").hide();
});
    
     $(".hidden-search-bar").keyup(function(event){
    if(event.keyCode==13){
      $(".results-link").empty();
      hiddenSendToPage();
    }
});  
    

    
    });


function getWiki(keyword){
    var URL = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch="+keyword+"&prop=info&inprop=url&callback=?";
    
   $.getJSON(URL,function(json){
       $(".hidden-heading").show();
       $(".search-results").show();
       
       // Store titles
       var title0 = json.query.search[0].title;
       var title1 = json.query.search[1].title;
       var title2 = json.query.search[2].title;
       var title3 = json.query.search[3].title;
       var title4 = json.query.search[4].title;
       
       // Store links
       var link0= "https://en.wikipedia.org/wiki/"+title0+"";
       var link1= "https://en.wikipedia.org/wiki/"+title1+"";
       var link2= "https://en.wikipedia.org/wiki/"+title2+"";
       var link3= "https://en.wikipedia.org/wiki/"+title3+"";
       var link4= "https://en.wikipedia.org/wiki/"+title4+"";
       

       //Append <a> tag
       $('<a target="_blank" class="results-link" href="'+link0+'">'+title0+'</a>').appendTo($('#test-title-0'));
       $('<a target="_blank" class="results-link" href="'+link1+'">'+title1+'</a>').appendTo($('#test-title-1'));
       $('<a target="_blank" class="results-link" href="'+link2+'">'+title2+'</a>').appendTo($('#test-title-2'));
       $('<a target="_blank" class="results-link" href="'+link3+'">'+title3+'</a>').appendTo($('#test-title-3'));
       $('<a target="_blank" class="results-link" href="'+link4+'">'+title4+'</a>').appendTo($('#test-title-4'));
       
      //$("#test-title-1").html(json.query.search[0].title);
     //  $('<a target="_blank" class="results-link" href="'+link+'">'+title+'</a>').appendTo($('#test-title-1'));
       $("#test-snippet-0").html(json.query.search[0].snippet);
       $("#link-0").html(link0);
     //   $("#test-title-2").html(json.query.search[1].title);
       
       $("#test-snippet-1").html(json.query.search[1].snippet);
       $("#link-1").html(link1);
      //  $("#test-title-3").html(json.query.search[2].title);
       
       $("#test-snippet-2").html(json.query.search[2].snippet);
       $("#link-2").html(link2);
      //  $("#test-title-4").html(json.query.search[3].title);
       
       $("#test-snippet-3").html(json.query.search[3].snippet);
       $("#link-3").html(link3);
       // $("#test-title-5").html(json.query.search[4].title);
       
       $("#test-snippet-4").html(json.query.search[4].snippet);
       $("#link-4").html(link4);
      
   });
}

function sendToPage(){
    var input = document.getElementById("keyword").value;
    getWiki(input);
    
}

function hiddenSendToPage(){
    var input = document.getElementById("hidden-keyword").value;
    getWiki(input);
    
}

function showMain(){
    $(".hidden-heading").hide();
    $(".search-results").hide();
    $(".results-link").empty();
    $("#test").show();
}