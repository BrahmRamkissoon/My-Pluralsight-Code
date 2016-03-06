// Missing Mark Bug
function getNames(){
    var length = 0,
        names = ""
    
    ['John', 'Susan', 'Joe'].forEach(function (name, i){
    
    length = i + 1
    names += name + ' '
})
    
    return
    
    {
        length: length,
        names: names
    }
    
    console.log(getNames());
