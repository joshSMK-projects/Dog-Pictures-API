const btn = document.getElementById("btn")
const dogImg = document.querySelector(".dogImage")

btn.addEventListener("click", async () => {
    try {
        // Before fetching data
        btn.disabled = true
        btn.textContent = "Loading Doggo..."
        dogImg.src = "img/loading.gif"

        // Fetching data
        const dogResponse = await fetch("https://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true")
        const dogData = await dogResponse.json()

        dogImg.src = dogData[0]

        // After fetching
        btn.disabled = false 
        btn.textContent = "Get New Doggo"

    } catch (error) {
        console.log(error)
    }
})