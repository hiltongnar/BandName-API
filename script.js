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
    console.log(response);
    //edge case,if api returns error return an alert

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
    })
  });
});
