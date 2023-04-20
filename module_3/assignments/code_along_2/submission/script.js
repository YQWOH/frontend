// 1. Find Poggle The Lesser & console.log
// skin_color
// eye_color
// birth_year
fetch("https://swapi.dev/api/people/63")
    .then(res => res.json())
    .then(data => 
        {
            let {skin_color, eye_color, birth_year, name} = data;
            console.log(`${name}'s skin is ${skin_color} color`);
            console.log(`his eyes are ${eye_color} `);
            console.log(`he was born in ${birth_year} `);
        });

// 2. Find Solar Sailer & console.log
// hyperdrive_rating
// cost_in_credits
// manufacturer
fetch("https://swapi.dev/api/starships/58")
    .then(res => res.json())
    .then(data => 
        {
            let {hyperdrive_rating, cost_in_credits, manufacturer} = data;
            console.log(hyperdrive_rating, cost_in_credits, manufacturer);
        });

// 3. Find Geonosis & console.log
// climate
// terrain
// orbital_period  
fetch("https://swapi.dev/api/planets/11")
    .then(res => res.json())
    .then(data => 
        {
            let { climate, terrain, orbital_period} = data;
            console.log(climate, terrain, orbital_period);
        });

// Bonus
// Anakin Skywalker has an id of 11.
// Make a call to find 3 of Anakin's starships.
// console.log his spaceships out.

fetch("https://swapi.dev/api/people/11")
    .then(res => res.json())
    .then(data => 
        {
            let { starships } = data;
            starships.map((obj) => {
                fetch(obj)
                    .then((res) => res.json())
                    .then((data) => console.log(data))
            })
        });

