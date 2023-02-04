console.log('***** Music Collection *****')

let collection = [];

function addToCollection( title, artist, yearPublished ) {
    let albums = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
    };
    return albums;
} 

console.log(addToCollection('Four', 'One Direction', '2014'));

collection.push(addToCollection('Four', 'One Direction', '2014'));
collection.push(addToCollection('Midnights', 'Taylor Swift', '2022'));
collection.push(addToCollection('Acid Rap', 'Chance the Rapper', '2013'));
collection.push(addToCollection('Because the Internet', 'Childisn Gambino', '2013'));
collection.push(addToCollection('Coloring Book', 'Chance the Rapper', '2016'));
collection.push(addToCollection('Jazz', 'Queen', '1978'));

console.log(collection);

function showCollection( array ) {
    console.log(array);
    for (let x of collection) {
        
    }
}