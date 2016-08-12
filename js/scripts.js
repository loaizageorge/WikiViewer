$(document).ready(function () {
    $(".search-bar").keyup(function (event) {
        if (event.keyCode == 13) {
            $("#search").click();
        }
    });
    $("#search").click(function () {
        $("#test").hide();
    });
    $(".hidden-search-bar").keyup(function (event) {
        if (event.keyCode == 13) {
            $(".hidden-results").empty();
            hiddenSendToPage();
        }
    });
});

function getWiki(keyword) {
    var URL = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=" + keyword + "&prop=info&inprop=url&callback=?";
    $.getJSON(URL, function (json) {
        $(".hidden-heading").show();
        $(".search-results").show();
        var html = "";
        for (var i = 0; i <6; i++) {
            var title = json.query.search[i].title;
            var link = "https://en.wikipedia.org/wiki/" + title + "";
            var snippet = json.query.search[i].snippet;
            html = "<a target='_blank' class='results-link' href=" + link + "><h3>" + title + "</h3></a><p class='green-text'>" + link + "</p><p>" + snippet + "</p>";
            $(".hidden-results").append(html);
        }
        console.log(html);
    });
}

function sendToPage() {
    var input = document.getElementById("keyword").value;
    getWiki(input);
}

function hiddenSendToPage() {
    var input = document.getElementById("hidden-keyword").value;
    getWiki(input);
}

function showMain() {
    $(".hidden-heading").hide();
    $(".search-results").hide();
    $(".hidden-results").empty();
    $("#test").show();
}