let ob = {
    name : 'hIII',
    this: this ,//this return object global scope
    funcOne : function(){
     console.log(this) // calling object
    },
   funcTwo: ()=>{
    console.log(this)// parent's this
   },
   funcThree : function() {
      const funcArrw = ()=>{
       console.log(this) //  arrow means parent's this here funcArrw parent is funcThree
      } 
    funcArrw()
   },
   funcFour : function (){
     const funcNorm= function(){
      console.log(this)
     }
    funcNorm() // this is stand alone function not called by any object so this is global scope
   },
   greet : function(){
    setTimeout(()=>{
     console.log(this) // setimeout is arrow funch  parent's this will be setimeout this
    },2000)
   },
   greet2: function(){
    setTimeout(function(){
     console.log(this)// settimeout calling object is window
    },2000)
   }
  
  }

  ob.greet()
  ob.greet2()