


export default function Buttons({ tweetHref, newQuote, linkStyle, buttonStyle }) {
  return (
    <div id="buttons">
      <a href={tweetHref} id="tweet-quote" target="_blank" style={linkStyle} alt="tweet">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/X_logo_2023_original.svg/300px-X_logo_2023_original.svg.png?20230728155658" 
            rel="tweet"
        />
      </a>
      <button id="new-quote" onClick={newQuote} style={buttonStyle}>
        New quote
      </button>
    </div>
  );
}

