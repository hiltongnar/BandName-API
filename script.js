/*to do list
design HTML for card -static
write render function for cards
write click delete function
write search click funtion
  -write jquery click function for submit button
  -console.log click
  -grab user input
  -save to variable
  -place API inside function
  -dynamically insert variable to API
  -render card to dom
  -attach event listener
  -close button to delete the cards(try to delete the word by "this") if not use global counter
  -style the cards
  -edge cases for search
  -add data structure to prevent duplicates
*/
let bandExist = {};

$(".submit-button").click(function() {
  event.preventDefault();
  let bandName = $(".input").val().split(" ").join("-");

  var settings = {
  	"async": true,
  	"crossDomain": true,
  	"url": "https://deezerdevs-deezer.p.rapidapi.com/artist/" + bandName,
  	"method": "GET",
  	"headers": {
  		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
  		"x-rapidapi-key": "560718a01cmshe85f351dac526a4p1ea04cjsnd17f5070e490"
  	}
  }

  $.ajax(settings).done(function (response) {

    //edge case,if api returns error return an alert

    if (response.error) {
      alert("Search yielded no results, Please try your search again.");
      return null;
    }

    if (bandExist[response.name]) {
      alert("Card already exists.");
      return null;
    }
    bandExist[response.name] = true;

    let picture = response.picture_medium;

    $(".band-cards").append(
      ` <div class="card">
        <img class="band-pic" src="` + picture + `">
          <div class="card-holder">
            <p class="band-name">` + response.name + `</p>
            <button class="close-button">close</button
          </div>
      </div>`
    )
    $(".close-button").click(function(){
      this.parentNode.parentNode.remove();
      bandExist[response.name] = false;
    })
  });
});
