

//Below, you will find 4 sections dealing wth nested structures.



//******************************************* */





//testing - 1/3 problems, write a test

//1) //---------------------------


 //Study the format of the following data.

var allStars = [{
      name: "Dwyane Wade",
      pointsPerGame: 23.7,
      assistsPerGame: 5.8,
      reboundsPerGame: 4.8
    }, {
      name: "Kyle Lowry",
      pointsPerGame: 13.5,
      assistsPerGame: 5.7,
      reboundsPerGame: 4.0
    }, {
      name: "LeBron James",
      pointsPerGame: 27.2,
      assistsPerGame: 6.9,
      reboundsPerGame: 7.2
    }, {
      name: "Paul George",
      pointsPerGame: 16.9,
      assistsPerGame: 3.1,
      reboundsPerGame: 6.2
    }, {
      name: "Carmelo Anthony",
      pointsPerGame: 24.9,
      assistsPerGame: 3.2,
      reboundsPerGame: 6.6
    }, {
      name: "Stephen Curry",
      pointsPerGame: 22.4,
      assistsPerGame: 6.9,
      reboundsPerGame: 4.3
    }, {
      name: "Russell Westbrook",
      pointsPerGame: 21.5,
      assistsPerGame: 2.6,
      reboundsPerGame: 5.6
    }, {
      name: "Kobe Bryant",
      pointsPerGame: 25.0,
      assistsPerGame: 4.7,
      reboundsPerGame: 5.2
    }, {
      name: "Kevin Durant",
      pointsPerGame: 25.6,
      assistsPerGame: 2.9,
      reboundsPerGame: 5.6
    }, {
      name: "Kawhi Leonard",
      pointsPerGame: 14.3,
      assistsPerGame: 2.0,
      reboundsPerGame: 6.3
    }
]
//A) Your scouting manager only wants you to pay attention to players who score at least 20 points per game. Create a function that returns an array of player names who fit this description.

var highScoringPlayersA = function(players){
  //array of obj
  
  //create empty result arr
  let result = [];
  //iterate players arr
  for (var i = 0; i < players.length; i++) {
    //create currPlayer var
    let currPlayer = players[i];
    //create pointsPerGame var
    let pointsPerGame = currPlayer.pointsPerGame;
    //if pointsPerGame >= 20
    if (pointsPerGame >= 20) {
      //push currPlayer name into result
      result.push(currPlayer.name);
    }
  }
  //return result w/ player names
  //console.log(result);
  return result;
}

console.log('highScoringPlayersA:', highScoringPlayersA(allStars));

//B) Right now your function looks for only players with 20 points per game. Modify your function such that it takes in a target number and filters accordingly.

//E.g.

//highScoringPlayersB(allStars, 13); //returns a list of all-stars who get an average of at least 13 points per game.

var highScoringPlayersB = function(players, target){
  //array of obj
  
  //create empty result arr
  let result = [];
  //iterate players arr
  for (var i = 0; i < players.length; i++) {
    //create currPlayer var
    let currPlayer = players[i];
    //create pointsPerGame var
    let pointsPerGame = currPlayer.pointsPerGame;
    //if Math.floor(pointsPerGame) = target
    //console.log(Math.floor(pointsPerGame));
    if (Math.floor(pointsPerGame) === target) {
      //push currPlayer name into result
      result.push(currPlayer.name);
    }
  }
  //return result w/ target filter
  //console.log(result);
  return result;
}

console.log('highScoringPlayersB:', highScoringPlayersB(allStars, 13));

//C) Modify your function to take in a third argument that indicates which property you are interested in, and returns a filtered array based on this.

var highScoringPlayersC = function(players, target, interest){
  //array of obj
  
  //create empty result arr
  let result = [];
  //iterate players arr
  for (var i = 0; i < players.length; i++) {
    //create currPlayer var
    let currPlayer = players[i];
    //create pointsPerGame var
    let pointsPerGame = currPlayer.pointsPerGame;
    //if Math.floor(pointsPerGame) = target & interest = 'assists'
    //console.log(Math.floor(pointsPerGame));
    if (Math.floor(pointsPerGame) === target && interest === 'assists') {
      //push currPlayer name into result
      result.push(currPlayer.name);
      //push assists into result
      result.push('assists per game: ' + currPlayer.assistsPerGame);
    }
  }
  //return result w/ target filter
  //console.log(result);
  return result;
}

console.log('highScoringPlayersC:', highScoringPlayersC(allStars, 13, 'assists'));
//******************************************* */

//-------------------------
/*
Intro:
Welcome to coffee!

These problems are meant to help you understand and grasp nested structures better

The first couple prompts will be simple access questions.
From there, the problems will start.

Let's get started!

*/


//2) -------------------------------------

// coffee company - you work for a coffee wholesaler. They are asking you to report from the data below about recent shipments. 

var coffeeRegions = [
  {
    country: 'Brazil',
    regions: [
      {
        region:'Bahia', 
        containers: 2,
        "price per container": 1200
      },
      {
        region:'São Paulo', 
        containers: 1,
        "price per container": 1350,
      },
    ],
  },
   {
    country: 'Ethiopia',
    regions: [
      {
        region:'Yirgacheffe', 
        containers: 4,
        "price per container": 1300,
      },
      {
        region:'Sidamo', 
        containers: 2,
        "price per container": 1250,
      },
    ],
  },
  {
    country: 'Indonesia',
    regions: [
      {
        region:'Sumatra', 
        containers: 5,
        "price per container": 1100,
      },
    ]
  }  
]

//A)

//Look carefully at the data, makes some observations and answer some questions about it:

//i: Take note of the overall structure.
//  arr Of Objs w/ 2 properties. 2nd property with inner arr Of Objs

//ii: How any countries are listed?
  //B.1 => how would you access different country names?

  console.log(coffeeRegions[0].country); //=>  'Brazil'
  console.log(coffeeRegions[2].country); //==> 'Indonesia'

//iii Access regions:
  //How would you access different the values at the region properties?

  console.log(coffeeRegions[1].regions[1].region); // => 'Sidamo'
  console.log(coffeeRegions[2].regions[0].region); //=> 'Sumatra'





//-------------------------------------


//B countries and regions
//**use the data from problem 1
//Prompt:
  //Return an array of the countries and regions count. The first element of the array should be the amount of countries bought from. The second element should be the total regions bought from

  function totalCountriesAndRegions(arr) {
    //create empty result arr
    let result = [];
    //create country & region count vars
    let countryCount = 0;
    let regionCount = 0;
    //iterate arr
    for (var i = 0; i < arr.length; i++) {
      //create currCountry var
      let currCountry = arr[i];
      //push each currCountry count to result
      countryCount++;
      //iterate regions arr
      for (var j = 0; j < currCountry.regions.length; j++) {
        //create regionName var
        let regionName = currCountry.regions[j].region;
        //push each regionName count to result
        regionCount++;
      }
    }
    //console.log(countryCount);
    //console.log(regionCount);
    result.push(countryCount, regionCount);
    //return result
    return result;
  }

var answer = totalCountriesAndRegions(coffeeRegions);
console.log('totalCountriesAndRegions', answer) //==> [3, 5];




//-------------------------------------


//C total spent
  //**continue to use the data from problem 1
  //Write a funtion 'total spent' that calculates the total spent for all coffee. 
  //**the amount of containers purchased is the value of the 'containers' property

  function totalSpent(arr) {
    //create result var = 0
    let result = 0;
    //iterate currCountry
    for (var i = 0; i < arr.length; i++) {
      let currCountry = arr[i];
      //iterate regions arr
      for (var j = 0; j < currCountry.regions.length; j++) {
        let cost = currCountry.regions[j].containers * currCountry.regions[j]['price per container'];
        //console.log(currCountry.regions[j].containers);
        //update += price per container * container
        result += cost;
      }
    }
    //return result
    return result;
  }

  var total = totalSpent(coffeeRegions);

  console.log('totalSpent:', total); // =>16950


  //-------------------------------------

  //D- average, highest, and lowest
    //Return an object of the cheapest region, most expensive region, and average cost of coffee each coffee container rounded down to the nearest whole number

  function coffeePrices (arr) {
    //create result obj
    let result = {};
    //create vars cheapestR, mostExpR, least, most, avgCost
    let cheapestR = ''
    let least = 2000;
    let mostExpR = ''
    let most = 0;
    let total = 0;
    let regions = 0;
    //iterate currCountry
    for (var i = 0; i < arr.length; i++) {
      let currCountry = arr[i];
      //iterate currRegion
      for (var j = 0; j < currCountry.regions.length; j++) {
        let currRegion = currCountry.regions[j];
        //create currCost var rounded to nearest bottom whole num
        let currCost = Math.floor(currCountry.regions[j]['price per container']);
        //if currCost > most
        if (currCost > most) {
          //most = currCost
          most = currCost;
          //avgCost += currCost
          total += currCost * currCountry.regions[j].containers;
          regions += currCountry.regions[j].containers;
          //mostExpR = currRegion
          mostExpR = currRegion.region;
        }
        //else if currCost < least
        else if (currCost < least) {
          //least = currCost
          least = currCost;
          //avgCost += currCost
          total += currCost * currCountry.regions[j].containers;
          regions += currCountry.regions[j].containers;
          //cheapestR = currRegion
          cheapestR = currRegion.region;
        }
      }
      //update obj w/ cheapest: x, most expensive region: y, average: z
      result['cheapest region'] = cheapestR;
      result['most expensive region'] = mostExpR;
      result['average'] = Math.floor(total/regions);
    }
    //console.log('least:', least);
    //console.log('most:', most);
    //return result
    console.log('total:', total)
    return result;
  }

  var highLowAverage = coffeePrices(coffeeRegions);
  console.log('coffeePrices:', highLowAverage);
    /* 
        {
          'cheapest region': 'Sumatra', 
          'most expensive region': 'São Paulo', 
          average: 1210,
        }
    */







//******************************************* */


// 3) --------------------------------------

/*Science Experiment:

  Do you know the story of the hungry caterpillar? If you don't, look it up! It's a famouse kid's story about a caterpillar that eats many foods over a week to grow and grow until it becomes a beautiful butterfly.

  You are testing out the book with a bunch of caterpillars. You have recorded their eating habits over six days. You are now ready to report your findings.
 */


var eatingHabits = [
  {
    day: 'Monday', 
    food: ['banana', 'ice cream', 'apple', 'leaf', 'cheese']
  },
  {
    day: 'Tuesday',  
    food: ['candy', 'cake', 'ice cream', 'cheese'],
  },
  {
    day: 'Wednesday', 
    food: ['leaf', 'cheese', 'jelly', 'hamburger'],
  },
  {
    day: 'Thursday',
    food:['hamburger', 'banana', 'leaf', 'tomato'],
  },
  {
    day: 'Friday',
    food:['ice cream', 'apple', 'leaf', 'pie', 'cake'],
  },
  {
    day: 'Saturday',
    food: ['apple', 'leaf', 'pie', 'cheese', 'candy', 'tomato'],
  }
]

//a) Given an array of the days the caterpillars ate and the food they consumed, find out how many days a particular food was eaten.

  //hungryCaterpillars(eatingHabits, 'apple') //=> 3
  //hungryCaterpillars(eatingHabits, 'tomato') //=> 2

function hungryCaterpillars(arr, food) {
  //create result var
  let result = 0;
  //iterate currDay
  for (var i = 0; i < arr.length; i++) {
    let currDay = arr[i];
    //iterate food arr
    for (var j = 0; j < currDay.food.length; j++) {
      let currFood = currDay.food[j];
      //if currFood === food; result++
      if (currFood === food) {
        result++;
      }
    }
  }
  //return result
  return result;
}
console.log('caterpillars a: ', hungryCaterpillars(eatingHabits, 'apple')) //=> 3
console.log('caterpillars a: ', hungryCaterpillars(eatingHabits, 'tomato')); //=> 2

//------------------------------

//b) Given an array of data, return an object of all the foods and how many times they were eaten over the week.

function howManyTimes(arr) {
  //create result obj
  let result = {};
  //iterate currDay arr
  for (var i = 0; i < arr.length; i++) {
    let currDay = arr[i];
    //iterate currFood
    for (var j = 0; j < currDay.food.length; j++) {
      let currFood = currDay.food[j];  
      //if obj[currFood] === undefined, add to obj
      if (result[currFood] === undefined) {
        result[currFood] = 1;
      }
      else {
        result[currFood]++
      }
    }
  }
  //return result
  return result;
}

console.log('howManyTimes:', howManyTimes(eatingHabits)) //=>
/*
  {
    banana: 2,
    'ice cream': 3,
    apple: 3,
    leaf: 5,
    cheese: 4,
    candy: 2,
    cake: 2,
    jelly: 1,
    hamburger: 2,
    tomato: 2,
    pie: 2,
  }
*/



//Stop here!**************
//--------------------------
////*Advanced */
//c) Finally, find the top most eaten and second most eaten food using the same data. Return an array of the food names. The top most eaten food should appear first, and the second most eaten should appear second


//**** Do not hardcode the answer

function topTwoFoods(eatingHabits) {

}

// console.log(topTwoFoods(eatingHabits)); // => ['leaf', 'cheese'];















//******************************************* */

// 4) -----------------------------------------------


  //)  /* Advanced - Extra credit */


//Get average scores of players not including one player

////Given an array of players and a name input, get the average scores of all the players that do not match the name input. Keep in mind, the same name is the same player! Round to the nearest 100th.


var soccerPlayers = [
  {name: 'Jess', score: 1, age: 20, game: 1},
  {name: 'Tyler', score: 2, age: 30, game: 2},
  {name: 'Kelly', score: 1, age: 25, game: 1},
  {name: 'Jess', score: 2, age: 20, game: 2},
  {name: 'Tyler', score: 2, age: 30, game: 3},
  {name: 'Fred', score: 3, age: 26, game: 2},
  {name: 'Kelly', score: 1, age: 25, game: 3},
]


 
function averageScore(arr, name) {
  
}

// console.log(averageScore(soccerPlayers, 'Jess')); // ==> 3 

//console.log(averageScore(soccerPlayers, 'Tyler')); // ==> 2.67 




//******************************************* */

//by Greta Schock

//not finished!!!

/* FIND THIRD LARGEST VALUE IN AN ARRAY OF OBJECTS */
//take an array of movie objects and return the third highest rotten tomato rating as a percentage and the release Year 

function thirdTopRatedMovie (arr){

}

var starWars = [
  {title: 'Episode IV: A New Hope', releaseYear: 1977, rating: 0.92},  //rated #3
  {title: 'Episode V: The Empire Strikes Back', releaseYear: 1980, rating: 0.94}, //rated #1
  {title: 'Episode VI: Return of the Jedi', releaseYear: 1983, rating: 0.82},
  {title: 'Episode I: The Phantom Menace', releaseYear: 1999, rating: 0.53},
  {title: 'Episode II: Attack of the Clones', releaseYear: 2002, rating: 0.65},
  {title: 'Episode III: Revenge of the Sith', releaseYear: 2005, rating: 0.80},
  {title: 'Episode VII: The Force Awakens', releaseYear: 2015, rating: 0.93}, //rated #2
  {title: 'Episode VIII: The Last Jedi', releaseYear: 2017, rating: 0.90},
  {title: 'Episode IV: The Rise of Skywalker', releaseYear: 2019, rating: 0.51},
  {title: 'Rogue One: A Star Wars Story', releaseYear: 2016, rating: 0.84},
  {title: 'Solo: A Star Wars Story', releaseYear: 2018, rating: 0.70}
]; 

console.log(thirdTopRatedMovie(starWars))