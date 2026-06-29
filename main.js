function checkWebsite() {

    let url = document.getElementById("url").value.trim().toLowerCase();
    let result = document.getElementById("result");

    if (url === "") {
        result.style.display = "block";
        result.className = "result warning";
        result.innerHTML = "<h2>Please enter a website URL.</h2>";
        return;
    }

    let risk = 0;

    if (!url.startsWith("https://")) risk += 25;
    if (url.includes("@")) risk += 20;
    if (url.includes("-")) risk += 15;
    if (url.includes("login")) risk += 15;
    if (url.includes("verify")) risk += 20;
    if (url.includes("secure")) risk += 10;
    if (url.includes("update")) risk += 15;
    if (url.length > 40) risk += 10;

    result.style.display = "block";

    if (risk < 30) {
        result.className = "result safe";
        result.innerHTML =
            "<h2>✅ Safe Website</h2>" +
            "<h3>Risk Score: " + risk + "/100</h3>" +
            "<p>This website appears safe.</p>";
    }
    else if (risk < 60) {
        result.className = "result warning";
        result.innerHTML =
            "<h2>⚠ Suspicious Website</h2>" +
            "<h3>Risk Score: " + risk + "/100</h3>" +
            "<p>Some phishing indicators were detected.</p>";
    }
    else {
        result.className = "result danger";
        result.innerHTML =
            "<h2>🚨 High Phishing Risk</h2>" +
            "<h3>Risk Score: " + risk + "/100</h3>" +
            "<p>Avoid entering personal information on this website.</p>";
    }

}