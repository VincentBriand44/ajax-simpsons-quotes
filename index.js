const fetchJSON = () => {
  const quoteId = 1
  axios
    .get(`https://simpsons-quotes-api.herokuapp.com/quotes?count=${quoteId}`)
    .then(res => res.data)
    .then(
      ([quote]) =>
        (document.querySelector(
          '#quote'
        ).innerHTML = `<p><strong>${quote.character}</strong></p><img src="${quote.image}" /><p>${quote.quote}</p>`)
    )
}

fetchJSON()
