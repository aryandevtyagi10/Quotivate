const divWithQuote = document.getElementById("insertQuoteHere");

const getQuote = () => {
  fetch("https://api.kanye.rest")
    .then((response) => response.json())
    .then((data) => (divWithQuote.innerHTML = data.quote));
};

// Twitter
const divWithTweet = document.getElementById("twittter-button");
function tweetQuote(){
  const twitterURL = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterURL, 'blank');
}
twitter-button.addEventListener('click',tweetQuote);
