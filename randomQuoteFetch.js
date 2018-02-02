// Let's get the Random quote First
let url = 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=';

let request = new Request(url, {
   headers : new Headers({
  'Content-Type': 'application/x-www-form-urlencoded',
  'X-Mashape-Key': 'x4KwcPRjkbmshOPgAiWYwr0B4f7vp1wrN5rjsnwMAckYt6AGC4'
  })
});

fetch(request).then(function(response){
  response.json().then(function(data){
    if (data)console.log("Good", data);
    else console.log("Freek");
  });
});

//Working Just fine
