function ladeScript(url) {
    const script = document.createElement('script'); // Erstelle ein neues <script>-Tag
    script.src = url;  // Setze die Quelle der JavaScript-Datei
    script.type = 'text/javascript';  // Setze den Typ des Skripts
    script.async = true;  // Das Skript wird asynchron geladen
    document.head.appendChild(script); // Füge das <script>-Tag zum <head>-Tag der Seite hinzu
}

ladeScript('login.js');  // Lade und führe 'script1.js' aus
