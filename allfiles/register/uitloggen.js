import { getAuth, signOut } from "firebase/auth";

const auth = getAuth();

function logoutUser() {
    signOut(auth).then(() => {
        console.log("Gebruiker uitgelogd.");
        window.location.href = "index.html"; // Terug naar inlogpagina
    }).catch((error) => {
        console.error("Fout bij uitloggen:", error.message);
    });
}