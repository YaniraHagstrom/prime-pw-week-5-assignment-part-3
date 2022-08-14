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

let artists = [];

function findByArtist (artist) {
    for (let i = 0; i < collection.length; i ++){
        if (album.artist === )
    }

}