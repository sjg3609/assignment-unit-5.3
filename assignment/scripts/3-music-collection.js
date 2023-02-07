console.log('***** Music Collection *****')

let collection = [];

function addToCollection( title, artist, yearPublished ) {
    let albums = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
    };
    collection.push(albums);
    return albums;
} 

console.log(addToCollection('Four', 'One Direction', '2014'));
console.log(addToCollection('Midnight Memories', 'One Direction', '2013'));
console.log(addToCollection('Midnights', 'Taylor Swift', '2022'));
console.log(addToCollection('Acid Rap', 'Chance the Rapper', '2013'));
console.log(addToCollection('Because the Internet', 'Childisn Gambino', '2013'));
console.log(addToCollection('Coloring Book', 'Chance the Rapper', '2016'));
console.log(addToCollection('Jazz', 'Queen', '1978'));

console.log('Display collection after adding albums: ', collection);

function showCollection( array ) {
    console.log('in showCollection function: ', array);
    for ( let i = 0; i < array.length; i++) {
            console.log(`${collection[i].title} by ${collection[i].artist}, published in ${collection[i].yearPublished}`);
    } 
} 

showCollection(collection);

function findByArtist( artist ) {
    console.log('In findByArtist function, seartching for:', artist)
    let results = [];
    for (let i=0; i < collection.length; i++) {
        if (artist === collection[i].artist) { // artist is equal in value and type to collection.artist array from index 0 increasing by 1 
            results.push(artist); 
        } 
    } return results;
} 

console.log(findByArtist('Taylor Swift'));
console.log(findByArtist('Eminem'));
console.log(findByArtist('One Direction'));

// STRETCH GOALS

function search ( artist, yearPublished ) {
    let searchFunction = [];
    for (let i = 0; i < collection.length; i++) {
        if (collection[i] === collection.artist && collection.yearPublished) {
            searchFunction.push(artist, yearPublished);
        }
    } return searchFunction;
}

console.log(search('Childish Gambino', '2013'));