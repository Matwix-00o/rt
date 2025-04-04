// Passwortüberprüfung
function checkPasswort() {
            let password = document.getElementById("passwortEingabe").value;
            const correctPassword = "romtromps4ever!"; // Beispiel-Passwort
            if (password === correctPassword) {
                // Weiterleitung zur geheimen Seite mit einem geheimen Schlüssel
                setTimeout(() => {
                    window.location.href = "home.html?key=romtromps!"; // Weiterleitung mit geheimem Schlüssel
                }, 500);
            } else {
                document.getElementById("meldung").innerHTML = "❌ Falsches Passwort!";
            }
        }

 document.getElementById("passwortEingabe").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Verhindert das Standardverhalten des Formulars
        checkPasswort();
    }
});

// Prüfen, ob der Nutzer bereits eingeloggt ist
function checkLogin() {
    if (getCookie("loggedIn") === "true") {
        window.location.href = "home.html"; // Falls schon eingeloggt, weiterleiten
    }
}

// Bei Laden der Seite Login-Status prüfen
checkLogin();

// Blockiert F12 und Entwickler-Tools
document.addEventListener("keydown", function (event) {
    let forbiddenKeys = [
        { ctrl: true, shift: false, key: "u" },
        { ctrl: true, shift: true, key: "i" },
        { ctrl: true, shift: true, key: "j" },
        { ctrl: true, shift: true, key: "c" }
    ];
    
    if (event.key === "F12" || forbiddenKeys.some(k => event.ctrlKey === k.ctrl && event.shiftKey === k.shift && event.key.toLowerCase() === k.key)) {
        event.preventDefault();
        alert("Kein Cheaten!!!");
    }
});

// Blockiert Rechtsklick
document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    alert("Kein Cheaten!!!");
});
