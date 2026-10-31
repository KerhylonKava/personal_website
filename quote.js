
    updateQuote();

function updateQuote() {
    const quotes = [
        "\"if art is how we decorate space,\nmusic is how we decorate time.\"",
        "\"don't climb the mountain for the world to see you.\nclimb the mountain for you to see the world.\"",
        "\"un día nueva es una página nueva en tu libro.\nescribe la historia que te gusaría leer.\"",
        "breathe",
        "kindness over comparison",
        "\"you wake up every day knowing what you're not.\nfind out who you can be.\"",
        "\"when you listen,\nhear not just what they are saying,\nbut why they are saying it.\"",
        "\"great leaders know when to follow\"",
        "\"let today be today, and tomorrow tommorrow\"",
        "\"mighty is the hand that knows\nwhen to pick the pen\nand when to pick the sword.\"",
        "\"the meaning of life is to give life meaning\"",
        "\"so, if you are too tired to speak,\nsit next to me\nbecause i, too,\nam fluent in silence.\"\n- R. Arnold",
        "\"what goes too long unchanged destroys itself.\nthe forest is forever because it dies and dies and so lives.\"\n- Ursula K. Le Guin",
        "\"enjoy the little things in life\nfor one day you'll look back\nand realize they were the big things\""

    ]
    var quoteDisplay = document.getElementById("quote");
    const random = Math.floor(Math.random()*quotes.length);
        quoteDisplay.textContent = quotes[random];

}