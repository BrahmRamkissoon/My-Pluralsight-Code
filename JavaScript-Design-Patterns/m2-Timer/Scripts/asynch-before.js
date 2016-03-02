// Aaron uses ASP.NET 
// See example from Koste Budinoski which is similar
// http://jscriptpatterns.blogspot.ca/2012/09/asynchronous-execution-pattern.html

var demoArray = [];
for (var i = 1; i <= 1000; i++) {
    demoArray.push(1 + Math.floor(Math.random() * 50));
}

$(document).ready(function() {

    var html = '';
    for (var i = 0; i < demoArray.length; i++) {
        html += '<li>' + demoArray[i] + '</li>';
    }

    $('#timer').append(html);
});