let latestLcpEntry = null;

if ("PerformanceObserver" in window) {
    const supportedEntryTypes = PerformanceObserver.supportedEntryTypes || [];

    if (supportedEntryTypes.includes("largest-contentful-paint")) {
        const observer = new PerformanceObserver((entryList) => {
            const entries = entryList.getEntries();
            latestLcpEntry = entries[entries.length - 1];

            console.log("LCP-kandidat:", Math.round(latestLcpEntry.startTime), "ms");
            console.log("LCP-element:", latestLcpEntry.element);
        });

        observer.observe({ type: "largest-contentful-paint", buffered: true });

        document.addEventListener("visibilitychange", () => {
            if (document.visibilityState === "hidden" && latestLcpEntry) {
                console.log("Slutligt LCP:", Math.round(latestLcpEntry.startTime), "ms");
                console.log("Slutligt LCP-element:", latestLcpEntry.element);
            }
        });
    } else {
        console.log("largest-contentful-paint stöds inte i denna webbläsare.");
    }
}

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

if (window.axe) {
    axe.run(document, {}, function (err, results) {
        if (err) {
            console.error("Fel vid axe-körning:", err);
            return;
        }

        console.log("Axe violations:", results.violations.length);
        console.log("Axe incomplete:", results.incomplete.length);
        console.log("Axe inapplicable:", results.inapplicable.length);
        console.log("Axe passes:", results.passes.length);

        results.violations.forEach(function (violation, index) {
            console.log(`Problem ${index + 1}: ${violation.id}`);
            console.log("Beskrivning:", violation.description);
            console.log("Hjälp:", violation.help);
            console.log("Berörda element:", violation.nodes);
        });
    });
}