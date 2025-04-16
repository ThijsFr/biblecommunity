async function fetchDailyVerse() {
    try {
        const response = await fetch("https://bible-api.com/?random=verse"); // Fetch random verse from API
        const data = await response.json();
        
        // Display verse
        document.getElementById("bibleVerse").innerHTML = `"${data.text}" <br><span class='daily-verse-reference'>- ${data.reference}</span>`;
    } catch (error) {
        console.error("Error fetching verse:", error);
        document.getElementById("bibleVerse").innerText = "Cannot load verse. Try again later!";
    }
}

// Call function on page load
fetchDailyVerse();