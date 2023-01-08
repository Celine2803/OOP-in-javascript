document.write("hi");
const circle={
    radius:1,
    location:{
        x:1,
        y:1,
    },
    draw:function(){
        console.log('draw');
    }
};

circle.draw();
// The circle has 3 members radius,location and draw,if a memeber is a function we refer to it as a method.
// Draw is a method while radius and location is properties
// Property is to hold value while a method is to define logic
// circle .(dot notation is used to access the members)
// Using a liveserver enables hot reload.
// Object literal is the simplest way to define an object


// FACTORY
// An object with different methods the object has behaviour
// Object literal is difficult to use when creating an object that has behaviour.

function createCircle(radius){
    return{
         radius:radius,//if key and value are the same an alternative is radius,
        draw:function(){
            console.log('draw');
        }
    };
}
const crcle=createCircle(1);
circle.draw();
console.log(crcle);

//CONSTRUCTOR FUNCTION
//naming mechanism starts with a capital letter
//this keyword used to set the property of an object,a refernce  to the object that is being used to execute the piece of code 

function Circle (radius){
  this.radius=radius;
  this.draw=function(){
    console.log('draw');
  }
}
 const another=new Circle(1);//is same as
 Circle.call({},1);
 Circle.apply({},[1,2,3]);
// new keyword is used to create an empty object,set this to point to that object and return object from this function.

// .constructor property in the console developement tools shows the functions to create the object 

//Explaining about reference types(OBJECTS) that being object ,array and function

let x={value:10};
let y=x;

x.value=20;
/* the use of an object it's not stored in a variable rather in a memory
the address of the memory is stored in the variable,basically 2 variables pointing to the same object*/

//Adding properties anytime makes Javascript very powerful
circle.life={z:3};
//Delete properties 
delete circle.life;

// ENUMERATING OBJECTS OR ITERATING
for (let key in circle){
    if(typeof circle[key] !=='function')//returns only properties not methods
    console.log(key,circle[key]);
}

 const keys=Object.keys(circle)//to return the members of an object as an array
 console.log(keys);

 if('radius'in circle)//to check if an object has a property using in the keyword
   console.log('Circle has a radius');

//  ABSTRACTION
function Circlei(radius) {
    
        this.radius = radius;
        this.defaultlocation={x:0,y:0};//convert it to let defaultLocation={x:0,y:0};which converts it to a local variable within the scope,this makes it hidden from the user 
        this.computeOptimumLocation=function(){

        }
        this.draw = function () {
            console.log('dr');
        };
    }


const circle2=new Circlei (10);
circle2.defaultlocation;

//GETTERS AND SETTERS
function Circleii(radius) {
    
    this.radius = radius;
    let defaultlocation1={x:0,y:0};
    //convert it to let defaultLocation={x:0,y:0};which converts it to a local variable within the scope,this makes it hidden from the user 
    this.getDefaultLocation1=function(){
        return defaultlocation1;
    }
    this.draw = function () {
        console.log('dr');
    };

    Object.defineProperty(this,'defaultLocation'//a property,
    ,{
        get:function(){
        return defaultlocation1
    },
        set:function(value){
            if(!value.x||!value.y)
            throw new Error ('Invalid Location.');

            defaultlocation1=value;
        }

    });
}

//GETTER IS A FUNCTION THAT IS USED TO READ A PROPERTY ,SETTER TO SET A PROPERTY FROM THE OUTSIDE
const circle3=new Circleii(10);
circle3.defaultlocation1=1;
circle3.draw();