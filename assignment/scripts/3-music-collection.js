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
    console.log('In findByArtist function:', artist)
    let results = [];
    for (let artistSearch of collection) {
        if (artistSearch === collection.length) {
            results.push(artist);
        } 
        
    } return results;
}

console.log(findByArtist('Taylor Swift'));