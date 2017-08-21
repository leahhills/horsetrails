
//the search value needs to math the results in the array
//matchingTrail("shore") returns shore results



//put in searchvalue
//match searchvalue to value in array 



//ideas regex? for loop

// /^\w+/ start of string in regex Matches the start of a string without consuming any characters. If multiline mode is used, 
//this will also match immediately after a newline character.

// /\w+$/ end of string in regex

//filter out array results that match the input that you put somewhere and display all results that match this.
var trailList= [
    {
        id: 1,
        name:"Red Brook Shore",
        description:"Easy",
        location:"Wasagee Coast National Park"
    },
    {
        id: 2,
        name:"Plain Meadows",
        description:"Medium",
        location:"Antelope Island"
        
    },
    {
        id: 3,
        name: "Thomas Shore",
        description: "Hard",
        location: "Mt Rainier, Washington"
    },
    {
        id: 4,
        name: "Lake View Green by Cherry Meadows",
        description: "Medium",
        location: "Wichita, Oregon" 
    }
] 
var searchValue="shore";
            

function searchTrails(){
    return trailList.filter((trail) => {
        return trail.name.toLowerCase().includes(searchValue.toLowerCase());
    });
}

console.log(trailList);
console.log('____');
console.log(searchTrails());