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

console.log(collection);

function showCollection( array ) {
    console.log(array);
    for ( let i = 0; i < array.length; i++) {
        if (array[i]) {
            console.log(`${collection.title} by ${collection.artist}, published in ${collection.yearPublished}`);
        }
    }
}

console.log(showCollection(collection));

function findByArtist( artist ) {

}