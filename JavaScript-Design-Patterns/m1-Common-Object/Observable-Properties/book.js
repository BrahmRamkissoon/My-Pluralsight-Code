// Reacting to price changes in a Book API

var Book = function (name, price){
    var priceChanging = [],
        priceChanged = [];
    
    this.name = function (val) {
       return name; 
    };
    
    this.price = function(val){
        if (val !== undefined && val !== price){
            
            // loop through the priceChanging event handlers
            for (var i = 0; i < priceChanging.length; i++){
                if (!priceChanging[i](this, val)){
                    return price;
                }
            }
            price = val;
            
            // loop through the priceChanged event handlers
            for (var i = 0; i < priceChanged.length; i++){
                priceChanged[i](this);
            }
        }
        return price;
    };
    
    this.onPriceChanging = function (callback){
        priceChanging.push(callback);
    };
    
    this.onPriceChanged = function(callback){
        priceChanged.push(callback);
    };
};

var book = new Book('JavaScript: The Good Parts', 23.99);

console.log('The name is: ' + book.name());

console.log('The price is: ' + book.price());

// check for price error
book.onPriceChanging(function(b,price){
    if (price > 100){
        console.log('System error, price has gone unexpectedly high');
        return false;
    }
    return true;
});

book.onPriceChanged(function (b){
    console.log('The book price has changed to: $' + b.price());
});

book.price(19.99);

book.price(20);