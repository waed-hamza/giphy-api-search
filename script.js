$(document).ready(() => {
  let searchInput = $("#input");
  let searchBtn = $("#search");
  let removeBtn = $("#remove");
  let gifContainer = $("#gif-container");

  searchBtn.on("click", () => {
    if (searchInput.val().length > 0) {
      $.ajax({
        method: "GET",
        url: `http://api.giphy.com/v1/gifs/search?q=${searchInput.val()}&api_key=dc6zaTOxFJmzC`,
        dataType: "json",
      })
        .then((res) => {
          var numResults = res.data.length;
          var randomIdx = Math.floor(Math.random() * numResults);

          searchInput.val("");
          let $div = $("<div>");
          let $img = $("<img>");
          $img.attr("src", res.data[randomIdx].images.original.url);

          $div.append($img);
          gifContainer.append($div);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });

  removeBtn.on("click", () => {
    gifContainer.remove();
  });
});
