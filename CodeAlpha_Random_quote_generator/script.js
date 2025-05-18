const quotes = [
  { quote: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
  { quote: "So many books, so little time.", author: "Frank Zappa" },
  { quote: "A room without books is like a body without a soul.", author: "Marcus Cicero" },
  { quote: "Life goes on.", author: "Robert Frost" },
  { quote: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
  { quote:"Genius is one percent inspiration and ninety-nine percent perspiration",author:"Thomas Edison"},
  { quote: "Go ahead, make my day.", author: "Harry Callahan" },
  { quote: "He travels the fastest who travels alone.", author: "Rudyard Kipling" },
  { quote: "Ask, and it shall be given you; seek, and you shall find.", author: "the Bible" },
  { quote: "If you want something done right, do it yourself.", author: "Charles-Guillaume Étienne" },
];

const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");
const copyBtn = document.getElementById("copy-quote");

const whatsappBtn = document.getElementById("whatsapp-share");
const twitterBtn = document.getElementById("twitter-share");
const gmailBtn = document.getElementById("gmail-share");

function getRandomQuote() {
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  const quote = `"${random.quote}" - ${random.author}`;
  quoteText.textContent = `"${random.quote}"`;
  authorText.textContent = `— ${random.author}`;

  const encoded = encodeURIComponent(quote);
  whatsappBtn.href = `https://wa.me/?text=${encoded}`;
  twitterBtn.href = `https://twitter.com/intent/tweet?text=${encoded}`;
  gmailBtn.href = `https://mail.google.com/mail/?view=cm&fs=1&su=Inspirational Quote&body=${encoded}`;
}

newQuoteBtn.addEventListener("click", getRandomQuote);

copyBtn.addEventListener("click", () => {
  const fullQuote = `${quoteText.textContent} ${authorText.textContent}`;
  navigator.clipboard.writeText(fullQuote).then(() => {
    alert("Quote copied to clipboard!");
  });
});

getRandomQuote();
