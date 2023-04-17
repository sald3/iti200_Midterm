$(document).ready(function () {

    $("#resetOrder").click(function () {
        $("#First Name").val("");
        $("#Last Name").val("");
        $("#Address").val("");
        $("#Fruit").val("");
        $("#Quantity").val("");
    })

    $("form").submit(function () {

        const data = {
            firstName: $("#firstName").val(),
            lastName: $("#lastName").val(),
            address: $("#address").val(),
            fruit: $("#fruit-select").val(),
            quantity: $("#quantity").val(),
        }

        console.log(data);

        $("#submitOrder").click(function sendOrder() {
            $.post( "/api/users/create", data, function( data ) {
                console.log("Done");
                $.get("/api/users", function (data) {
                    console.log(data);

                });
            });
            $("#First Name").val("");
            $("#Last Name").val("");
            $("#Address").val("");
            $("#Fruit").val("");
            $("#Quantity").val("");
        });
        return false;
    });
});
