const url = 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat='; 
    const request = new Request(url, {
      headers : new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
      'X-Mashape-Key': 'x4KwcPRjkbmshOPgAiWYwr0B4f7vp1wrN5rjsnwMAckYt6AGC4'
        })
      });

// ReactDOM
class Main extends React.Component {
  constructor(props) {
    super(props );
    this.state = {
      quote : ["Failed Loading"],
      author : [],
    };
  }
   componentDidMount() {
    fetch(request)
      .then(response => response.json())
      .then(data => this.setState({ quote: data.quote, author : data.author }));
   }

  handleButtonClick() {
    this.componentDidMount();
  }

  render() {
    return (
      <div>
        <h2>Random Quote Machine</h2>
        <h1 className= "quote">{this.state.quote}</h1>
        <h3 className= "author">"{this.state.author}"</h3>
        <button className= "btn-default" onClick={this.handleButtonClick.bind(this)}>
          New Quote
        </button>
      </div>
    );

  }
}

//Render React
ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
