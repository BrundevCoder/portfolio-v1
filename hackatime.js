const display = document.getElementById("codingDays");

async function getStreaks() {
  const resp = await fetch("https://hackatime.hackclub.com/api/v1/users/BrundevCoder/stats?")

  if (resp.ok) {
    const obg = await resp.json();

    display.innerText = `${obg["data"]["streak"]}`
  }
}

getStreaks();