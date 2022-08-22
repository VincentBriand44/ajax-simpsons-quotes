const fetchJSON = () => {
  axios
    .get(`https://simpsons-quotes-api.herokuapp.com/quotes`)
    .then(res => res.data)
    .then(
      ([quote]) =>
        (document.querySelector(
          '#quote'
        ).innerHTML = `<p><strong>${quote.character}</strong></p><img src="${quote.image}" /><p>${quote.quote}</p>`)
    )
}

fetchJSON()
