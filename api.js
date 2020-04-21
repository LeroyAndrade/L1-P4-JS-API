// TODO:    Haal alle fouten uit de scripts.
//          Fouten zijn niet alleen beperkt tot var, let o const!
//          maar ook bijvoorbeeld de afsluiting van een statement
//          een komma die verkeerd staat, of variabelen die niet
//          bekend zijn.

let results = {};
let items, coordinates, address = {};
let id,email,street={};
function users(items) {
    for (let count = 0; count < items.length; count++) {
        item = new Name(items[count].name);
        coordinates = new Coordinates(items[count].location.coordinates);
        address = new Address(items[count].location);
    }
    console.table(item);
    console.table(coordinates);
    //console.table(address.showStreet());

    // TODO:    Zorg ervoor dat de volgende statements resultaat gaan opleveren
    //          Hiervoor moet je de functie showAddress() afmaken en de constructors voor de
    //          objecten id, email, street en adrress aanmaken.

    function showAddress(id,email,street,address){
      let adresObj = this;
      adresObj.id=id;
      adresObj.email=email;
      adresObj.street=street;
      adresObj.address=address;
    }
    let laatAdresZien = new showAddress("10", "P.Puk@Hotmail.NL", "Pietje Puk straat", "Noord-Holland");

    //console.log(address.showAddress());
    console.table(laatAdresZien.id);
    console.table(laatAdresZien.email);
    console.table(laatAdresZien.street);
    console.table(laatAdresZien.address);
}

function createGetRequest(url, callBack) {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let response = JSON.parse(this.response);
            callBack(response);
        }
    }
    request.open(
        "GET", url, true);
          request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send();
}

function randomUser(json) {
    results = json.results.slice();
    users(results);
}
var url = 'https://randomuser.me/api/1.3/?results=1&nat=nl&exc=cell,phone,dob,registered,login,gender';
//var url = 'https://randomuser.me/api/1.3/?inc=name,address,location';
//var url = 'https://randomuser.me/api/1.3/?nat=NL';
createGetRequest(url, randomUser);
// TODO:    check de xhr tab en waarschuwingen tabz
//          De xhr tab heeft subtabs, check deze allemaal
//          In deze subtabs staat veel informatie voor je
//          als je call bijvoorbeeld geen antwoord heeft
