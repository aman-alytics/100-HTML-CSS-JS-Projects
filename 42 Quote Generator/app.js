const generateQuoteBtn = document.getElementById("quoteBtn");
const quoteOutput = document.getElementById("quoteOutput");
const authorOutput = document.getElementById("authorOutput");

generateQuoteBtn.addEventListener("click", generateQuote);

const arrayofQuotes = [
    {
        author: "Carol Burnett",
        quote:
        "When you have a dream, you've got to grab it and never let go."
    },
    {
        author: "Audrey Hepburn",
        quote:
        "Nothing is impossible. The word itself says 'I'm possible!'"
    },
    {
        author: "Alexander the Great",
        quote:
        "There is nothing impossible to they who will try."
    },
    {
        author: "Michael Altshuler",
        quote:
        "The bad news is time flies. The good news is you're the pilot."
    },
    {
        author: "Nicole Kidman",
        quote:
        "Life has got all those twists and turns. You've got to hold on tight and off you go."
    },
    {
        author: "Walt Whitman",
        quote:
        "Keep your face always toward the sunshine, and shadows will fall behind you."
    },
    {
        author: "Winston Churchill",
        quote:
        "Success is not final, failure is not fatal: it is the courage to continue that counts."
    },
];

function generateQuote() {
    let random = Number.parseInt(Math.random() * arrayofQuotes.length + 1)
    quoteOutput.innerHTML = `<span>${arrayofQuotes[random].quote}</span>`
    authorOutput.innerHTML = `<small>-${arrayofQuotes[random].author}-</span>`
}