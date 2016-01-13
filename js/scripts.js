$ (document).ready(function() {
    var age = parseInt(prompt("Interested in voting? How old are you?"));

    if (age >= 18){
      $('#over-18').show();
    } else { $('#under-18').show();
    }
});
