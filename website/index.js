async function updateCounter() {
    let response = await fetch(
        "https://wx3bltempfgqolgdjuvxjhjqmi0aomzp.lambda-url.us-east-1.on.aws/"
    );
    let data = await response.json();
    counter.innerHTML = `👀 Views: ${data}`;
}
updateCounter();
