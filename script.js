$(document).ready(function () {

    $("#load-prices").click(function loadPrices() {

        $.get("http://localhost:3000/prices", function( prices ) {
            $("#price1").text(prices[0]);
            $("#price2").text(prices[1]);
            $("#price3").text(prices[2]);
        })
    });
});


