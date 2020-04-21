// Onderstaande functies zijn de callBack functies voor de
// createGetRequest functie

function cityOfChicago (json) {
    console.log(json);
}
cityOfChicago();
function covid19 (json) {
    console.log(json);
}
var url = 'https://data.cityofchicago.org/resource/f7f2-ggz5.json?';
// var url = 'https://data.cityofchicago.org/resource/f7f2-ggz5.json?'
// createGetRequest(url, cityOfChicago);
// TODO:    check de xhr tab en waarschuwingen tab
//          De xhr tab heeft subtabs, check deze allemaal
//          In deze subtabs staat veel informatie voor je
//          als je call bijvoorbeeld geen antwoord heeft


// var url = 'https://covid19-api.weedmark.systems/api/v1/stats';
// createGetRequest(url, covid19);
// TODO:    check de xhr tab en waarschuwingen tab
//          De xhr tab heeft subtabs, check deze allemaal
//          In deze subtabs staat veel informatie voor je
//          als je call bijvoorbeeld geen antwoord heeft
