(function(){
    
    var references = {};
    references.bookname = document.getElementById("bookName");
    references.bookid = document.getElementById("bookId");
    references.bookauthor = document.getElementById("bookAuthor");
    references.btnsubmit = document.getElementById("btnSubmit");
    
    references.btnsubmit.addEventListener("click",display);
    references.btnsubmit.addEventListener("mouseover",iteration);
    references.bookid.addEventListener("keypress",addbookid);
    references.bookname.addEventListener("keypress", addbookname);
    references.bookauthor.addEventListener("keypress", addbookauthor);
    
    function display(){
        console.log("Submit button is clicked");
    }
    
    function iteration(){
        console.log("Mouse pointing on the button");
    }
    
    function  addbookid(myevent){
        if(myevent.charCode >48 && myevent.charCode <=57){
            
        }else{
            myevent.preventDefault();
        }
    }
    
    function addbookname(myevent){
        if(myevent.charCode >=65 && myevent.charCode <=90){
            
        }else if(myevent.charCode>=97 && myevent.charCode <=122){
            
        }else if(myevent.charCode == 32){
            
        }
    else{
        myevent.preventDefault();
    }
    }
    
    function addbookauthor(myevent){
        if(myevent.charCode >=65 && myevent.charCode <=90){
            
        }else if(myevent.charCode>=97 && myevent.charCode <=122){
            
        }else if(myevent.charCode == 32){
            
        }
    else{
        myevent.preventDefault();
    }
    }
})();