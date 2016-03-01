(function handleClick($){
    
    var pastebutton = $('input[type=button]');
    pastebutton.click(function pasteButtonClickHandler(){
        var target = $('div#target');
        var input = $('#phrase');
        target.append(input.val());
    });

})(jQuery);