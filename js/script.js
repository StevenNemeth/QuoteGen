var qText = document.getElementById('quoteText')
var qAuthor = document.getElementById('quoteAuthor')

function GetQuote(){
    axios({
        method: 'get',
        url: 'https://escoutenquotegen.herokuapp.com/GetQuote/',
      })
        .then(function (response) {
            qText.innerText = response.data.quoteText
            qAuthor.innerText = response.data.quoteAuthor
        });
}