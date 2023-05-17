<div class="counter-number nav-item nav-link text-white-50 font-os fontsize-16 active">Couldn't read views</div>

// site-visits js
const counter = document.querySelector(".counter-number");

async function updateCounter() {
  try {
    const response = await fetch("https://d6i2pee77rzpce3yb6ly7moygq0vckfh.lambda-url.us-east-1.on.aws/");
    const data = await response.json();
    counter.innerHTML = `<b>Visits</b> = ${data} ✌🏽`;
  } catch (error) {
    console.error(error);
  }
}
updateCounter();