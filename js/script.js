var qText = document.getElementById('quoteText')
var qAuthor = document.getElementById('quoteAuthor')

function GetQuote(){
    axios({
        method: 'get',
        url: 'http://localhost:3000/GetQuote/',
      })
        .then(function (response) {
            qText.innerText = response.data.quoteText
            qAuthor.innerText = response.data.quoteAuthor
        });
}