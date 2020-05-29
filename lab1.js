/*
  Full Name: Manjot Sandhu
  Student ID: 100129385

  Instructions:
    Follow the steps below. If you have any questions
    please feel free to use Slack to communicate. You
    are allowed to discuss the lab with other students
    but you ARE NOT permitted to copy/paste or share
    code.
  
  Rubric:
    Steps: 11.5 points
    Code Format: 10 points
    Github Link: 10 points

  NOTE: The code format and Github link marks are
    only awarded if the steps have been completed.
    (Code formatting is the visual structure of
      you code. I expect that you have used proper
      tabbing of nested structures so code readability
      is adequate.)
*/

/*
  Step 1 (2.5 points):
    Create an array that contains 4 people objects.
    Each object must have at least 2 properties.
*/

const roomMates = [
  {
    name: "Gagan",
    age: 24,
    favColor: "Black"
  },
  {
    name: "Jennifer",
    age: 28,
    favColor: "Blue"
  },
  {
    name: "David",
    age: 42,
    favColor: "Orange"
  },
  {
    name: "Badal Saab",
    age: 73,
    favColor: "White"
  }
];


/*
  Step 2 (6 points):
    Create an arrow function that accepts
    a destructured object as an argument. In the
    body of your function, console.log a string
    template utilizing the properties you
    destructured.
*/

const roomMateInfo = (name, age, favColor)=>{
    console.log(`My roomate is ${name}. His age is ${age} years old and his favourite color is ${favColor}`);
    
};



/*
  Step 3 (3 points):
    Loop over your array using a for/of loop.
    Call your arrow function passing the array item
    as an argument.
*/

for (let {name, age, favColor} of roomMates){
  
  roomMateInfo(name, age, favColor);
}