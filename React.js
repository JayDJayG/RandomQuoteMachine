// ReactDOM
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


  render() {
    return (
      <div>
        <h2 className= "">Random Quote Machine</h2>
        <h1>{this.state.quote}</h1>
        <h3>"{this.state.author}"</h3>
      </div>
    );

  }
}

//Render React
ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
