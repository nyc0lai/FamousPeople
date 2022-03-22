const quotes = [{author:"Robert Frost", quote:"No tears in the writer, no tears in the reader. No surprise in the writer, no surprise in the reader."},
                {author:"Saul Bellow",quote:"You never have to change anything you got up in the middle of the night to write."},
                {author:"Toni Morrison",quote:"If there's a book that you want to read, but it hasn't been written yet, then you must write it."},
                {author:"Margaret Atwood",quote:"A word after a word after a word is power."},
                {author:"Charles Baudelaire",quote:"Always be a poet, even in prose."},
                {author:"Albert Camus",quote:"The purpose of a writer is to keep civilization from destroying itself."},
                {author:"Norman Mailer",quote:"Writing books is the closest men ever come to childbearing."},
                {author:"Thomas Jefferson",quote:"The most valuable of all talents is that of never using two words when one will do."},
                {author:"Natalie Goldberg",quote:"Writers live twice."},
                {author:"Herman Melville",quote:"To produce a mighty book, you must choose a mighty theme."},
                {author:"Ayn Rand",quote:"Words are a lens to focus one's mind."}
    ];

    //initial set a valu of Author  adn Quote
    document.getElementById('author').innerHTML = 'Author: <em>'+quotes[0].author+'</em>';
    document.getElementById('quote').innerHTML = 'Quote:<br><strong><em>'+quotes[0].quote+'</em></strong>';


document.getElementById('btn').addEventListener('click', randomQuote);

function randomQuote() {
    let randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
    document.getElementById('author').innerHTML = 'Author: <em>'+ randomQuote.author +'</em>';
    document.getElementById('quote').innerHTML = 'Quote:<br><strong><em>'+ randomQuote.quote +'</em></strong>';
}