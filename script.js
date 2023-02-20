$(document).ready(function () {
    $.get("http://localhost:3000/api/users", function( data ) {
        console.log(data);
    });
});


