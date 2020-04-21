// Het resultaat van de JSON bestaat voor een user uit:
// Let op, een property kan uit meerdere objecten bestaan.
// De beschrijving kun je terugvinden op
// https://randomuser.me/documentation#results

// gender
// name
// location
// email
// login
// dob
// registered
// phone
// cell
// id
// picture
// nat

function Name(item) {
    nameObj = this;
    nameObj.title = item.title;
    nameObj.first = item.first;
    nameObj.last = item.last;
}

function Coordinates(item) {
    locationObject = this;
    locationObject.longitude = item.longitude;
    locationObject.latitude = item.latitude;
}

function Address(item) {
    addressObj = this;
    addressObj.street = item.street;

    // TODO:    maak de constructor voor address af,
    //          het object bevat meerdere objecten.
    //          Het adres bestaat uit de onderdelen
    //          street, city, state, country, postcode

    addressObj.showStreet = function() {
        console.log(
            addressObj.street.name,
            addressObj.street.number);
    };

    addressObj.showAddress = function() {
        // TODO:    Maak de functie af zodat alle informatie
        //          van het adres getoond wordt. Dus street
        //          city, state, country, postcode
    }
}

// TODO:    Maak de ontbrekende objecten voor
//          gender
//          location
//          email
//          login
//          dob
//          registered
//          phone
//          cell
//          id
//          picture
//          nat
