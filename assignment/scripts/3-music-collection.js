console.log('***** Music Collection *****')

// Create a variable collection that starts as an empty array.
let collection = [];

// Add a function named addToCollection. This function should:
    // Take in the album's title, artist, yearPublished as input parameters
    // Create a new object having the above properties
    // Add the new object to the end of the collection array
    // Return the newly created object

function addToCollection (title, artist, yearPublished) {
    const album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    }
    collection.push(album);
    return album;
}

// Test the addToCollection function:
    // Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
    // Console.log each album as added using the returned value.
    // After all are added, console.log the collection array.

console.log("Testing the addToCollection function:")
console.log(addToCollection("And Justice for All", "Metallica", "1988"));
console.log(addToCollection("Surfer Rosa", "Pixies", "1989"));
console.log(addToCollection("Green", "R.E.M", "1987"));
console.log(addToCollection("Nothing's Shocking", "Living Colour", "1985"));
console.log(addToCollection("Spirit of Eden", "Talk Talk", "1984"));
console.log(addToCollection("Vivid", "Living Colour", "1990"));

console.log(collection);

// Add a function named showCollection. This function should:
    // Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
    // Console.log the number of items in the array.
    // Loop over the array and console.log each album's information formatted like: TITLE by ARTIST, published in YEAR.

function showCollection (array) {
    console.log(`There are ${array.length} items in this array`);
    for ( let i = 0; i < array.length; i++){
        console.log(`${array[i].title} by ${array[i].artist}, published in ${array[i].yearPublished}`);
    }

}

// Test the showCollection function:
showCollection(collection);


// Add a function named findByArtist. This function should:
    // Take in artist (a string) parameter
    // Create an array to hold any results, empty to start
    // Loop through the collection and add any objects with a matching artist to the array.
    // Return the array with the matching results. If no results are found, return an empty array.

let matchingArtists = [];

function findByArtist (input) {
    for (let i = 0; i < collection.length; i++){
        //check is the input string matches the artist parameter in the current index
        if (collection[i].artist.toUpperCase() == input.toUpperCase()){
            // add the object from this index to the empty array "matchingArtists"
            matchingArtists.push(collection[i]);
            console.log(` This artist is in the collection: ${collection[i].artist}`);
        }
        else {
            console.log(` This artist is not in the collection: ${collection[i].artist}`);
        }
    }
    return matchingArtists;
}

// Test the findByArtist function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are found.

console.log("Testing the findByArtist function:")
console.log("Should return an empty array:", findByArtist("Spice Girls"));
console.log("Should return an object with a matching artist:", findByArtist("living colour"));