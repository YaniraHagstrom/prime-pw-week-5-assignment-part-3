console.log('***** Music Collection *****')

let collection = [];

function addToCollection (title, artist, yearPublished) {
    const album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    }
    collection.push(album);
    return album;
}

console.log(addToCollection("And Justice for All", "Metallica", "1988"));
console.log(addToCollection("Surfer Rosa", "Pixies", "1989"));
console.log(addToCollection("Green", "R.E.M", "1987"));
console.log(addToCollection("Nothing's Shocking", "Jane's Addiction", "1985"));
console.log(addToCollection("Spirit of Eden", "Talk Talk", "1984"));
console.log(addToCollection("Vivid", "Living Colour", "1990"));

console.log(collection);

let matchingArtists = [];

function findByArtist (input) {
    for (let i = 0; i < collection.length; i++){
        //check is the input string matches the artist parameter in the current index
        if (collection[i].artist == input){
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

console.log("Should return an empty array:", findByArtist("Spice Girls"));
console.log("Should return an object with a matching artist:", findByArtist('Living Colour'));