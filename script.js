const button = document.querySelector(".btn");
const par = document.querySelector(".par");
const quotes = [
    "«Phantasie ist wichtiger als Wissen, denn Wissen ist begrenzt.» Albert Einstein",
    "«Es ist nicht von Bedeutung, wie langsam du gehst, solange du nicht stehenbleibst.» Konfuzius",
    "«Alle Träume können wahr werden, wenn wir den Mut haben, ihnen zu folgen.» Walt Disney",
    "«Unsere größte Schwäche liegt im Aufgeben. Der sichere Weg zum Erfolg ist immer, es doch noch einmal zu versuchen.» Thomas Alva Edison",
    "«Alles, was du dir vorstellen kannst, ist real.» Pablo Picasso",
    "«Das gute Gelingen ist zwar nichts Kleines, fängt aber mit Kleinigkeiten an.» Sokrates",
    "«Ist unsere Motivation stark und heilsam, können wir alles vollbringen.» Dalai Lama",
    "«Du kannst den Ozean nicht überqueren, wenn du nicht den Mut hast, die Küste aus den Augen zu verlieren.» Christoph Kolumbus",
    "«Alle wollen die Welt verändern, aber keiner sich selbst.» Lew Nikolajewitsch Tolstoi"
]
button.addEventListener("click", function(){
    let randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
    par.style.display = "block";
    par.textContent = randomQuote;
})


