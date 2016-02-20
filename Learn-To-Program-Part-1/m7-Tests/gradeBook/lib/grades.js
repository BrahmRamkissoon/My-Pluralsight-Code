var gradeBook = {
    
    _grades: [],
        
    addGrade: function(newGrade){
        this._grades.push(newGrade);
    },
    
    getCountOfGrades: function(){
        return this._grades.length;
    },
    
    getAverage: function(){
        var total = 0;
        for(var i = 0; i < this._grades.length; i++){
            total += this._grades[i];
        }        
        return total / this._grades.length;
    }, 
    
    getLetterGrade: function(){
        var average = this.getAverage();
       
        if( average >= 90){
            return "A";            
        }
        else if(average >= 80){
            return "B";
        }
        else if(average >= 70){
            return "C";
        }
        else if(average >= 60){
            return "D"
        }
        return "F";
    },
    
    reset: function(){
        this._grades = [];
    }
    
};

exports.book  = gradeBook;