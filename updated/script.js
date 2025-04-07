const quoteText = document.getElementById("insertQuoteHere");
const authorText = document.getElementById("author");
const twitterButton = document.getElementById("twitter-button");
const newQuoteButton = document.getElementById("new-quote");

// Get a random quote from Kanye API
const getQuote = async () => {
  try {
    const response = await fetch("https://api.kanye.rest");
    const data = await response.json();
    quoteText.textContent = data.quote;
    authorText.textContent = "~ Kanye West";

    // Adjust font size if quote is long
    if (data.quote.length > 100) {
      quoteText.classList.add("long-quote");
    } else {
      quoteText.classList.remove("long-quote");
    }
  } catch (error) {
    quoteText.textContent = "Oops! Something went wrong.";
    authorText.textContent = "~ Server";
  }
};

// Tweet current quote
const tweetQuote = () => {
  const tweet = `${quoteText.textContent} ${authorText.textContent}`;
  const twitterURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweet)}`;
  window.open(twitterURL, "_blank");
};

// Event listeners
twitterButton.addEventListener("click", tweetQuote);
newQuoteButton.addEventListener("click", getQuote);

// Load quote on page load
window.addEventListener("DOMContentLoaded", getQuote);
