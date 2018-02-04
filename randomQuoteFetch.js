// Let's get the Random quote First
const url = 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=';

const request = new Request(url, {
   headers : new Headers({
  'Content-Type': 'application/x-www-form-urlencoded',
  'X-Mashape-Key': 'x4KwcPRjkbmshOPgAiWYwr0B4f7vp1wrN5rjsnwMAckYt6AGC4'
  })
});

//componentDidMount() has to be placed inside the React class to change the State

componentDidMount() {
    fetch(request)
      .then(response => response.json())
      .then(data => this.setState({ quote: data.quote, author : data.author }));
   }

//Working Just fine
