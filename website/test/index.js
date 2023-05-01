<div class="counter-number nav-item nav-link text-white-50 font-os fontsize-16 active">Couldn't read views</div>

// site-views Code
const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch(
        "Lambda URL"
    );
    let data = await response.json();
    counter.innerHTML = `👀 Views: ${data}`;
}
updateCounter();