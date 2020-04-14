// TODO:    Haal alle fouten uit de scripts.
//          Fouten zijn niet alleen beperkt tot var, let o const!
//          maar ook bijvoorbeeld de afsluiting van een statement
//          een komma die verkeerd staat, of variabelen die niet
//          bekend zijn.

let results = [];
let item, coordinates, address, = {};

function users(items) {
    for (let count = 0; count < items.length; count++) {

        item = new Name(items[count].name)
        coordinates = new Coordinates(items[count].location.coordinates)
        address = new Address(items[count].location)
    }
    console.table(item)
    console.table(coordinates)
    console.table(address.showStreet())

    // TODO:    Zorg ervoor dat de volgende statements resultaat gaan opleveren
    //          Hiervoor moet je de functie showAddress() afmaken en de constructors voor de
    //          objecten id, email, street en adrress aanmaken.

    console.log(address.showAddress());
    console.table(id);
    console.table(email);
    console.table(street);
    console.table(address);
}

function createGetRequest(url, callBack) {

    var request = new XMLHttpRequest()

    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            let response = JSON.parse(this.response)
            callBack(response)

        }
    }

    request.open(
        'GET',
        url,
        true
    )

    request.send()
}

function randomUser(json) {
    results = json.results.slice()
    users(results)
}

var url = 'https://randomuser.me/api/?results=1'
createGetRequest(url, randomUser);
// TODO:    check de xhr tab en waarschuwingen tab
//          De xhr tab heeft subtabs, check deze allemaal
//          In deze subtabs staat veel informatie voor je
//          als je call bijvoorbeeld geen antwoord heeft






