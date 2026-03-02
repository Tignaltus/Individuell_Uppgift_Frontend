(function simulateHeavyWork() {
    var start = Date.now();
    while (Date.now() - start < 200) {}
})();

document.addEventListener("DOMContentLoaded", function () {
    var items = document.querySelectorAll(".add-to-cart");
    items.forEach(function (item) {
        item.addEventListener("click", function () {
            alert("Item added to cart!");
        });
    });

    var newsletterForm = document.querySelector(".newsletter form");
    if (newsletterForm) {
        newsletterForm.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Thank you for subscribing!");
        });
    }
});