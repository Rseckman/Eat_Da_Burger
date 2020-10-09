
$(function() {
  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");
    var newDevoured = $(this).data("newdevoured");

    var newDevouredState = {
      devoured: newDevoured
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function() {
        console.log("changed devoured to", newDevoured);
        location.reload();
      }
    );
  });

  $(".deleteBurger").on("click", function(event){
    event.preventDefault();
    var id = $(this).data("id");
  
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function(){
        console.log("Deleted burger id " + id);
        location.reload();
      })
  });
  

  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      name: $("#bur").val().trim(),
      devoured: 0,
    };
    console.log(newBurger);
   
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        location.reload();
      }
    );
  });
});

