function getUrlParameter(name) {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get(name);
        }

        // Überprüfen, ob der Benutzer den geheimen Schlüssel hat
        if (getUrlParameter("key") !== "romtromps!") {
            window.location.href = "login.html"; // Falls der Schlüssel falsch ist, zurück zur Login-Seite
        }

        // Logout-Funktion: Entfernt den URL-Parameter und leitet zurück zur Login-Seite
        function logout() {
            window.location.href = "login.html"; // Weiterleitung zur Login-Seite
        }



function win24() {
    window.location.href = "win24.html?key=romtromps!"
}

function früh24() {
    window.location.href = "früh24.html?key=romtromps!"
}

function som24() {
    window.location.href = "som24.html?key=romtromps!"
}

function herb24() {
    window.location.href = "herb24.html?key=romtromps!"
}

