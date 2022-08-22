const fetchJSON = () =>
  axios
    .get(`https://simpsons-quotes-api.herokuapp.com/quotes`)
    .then(res => res.data)
    .then(
      ([{ character, image, quote }]) =>
        (document.querySelector(
          '#quote'
        ).innerHTML = `<p><strong>${character}</strong></p><img src="${image}" /><p>${quote}</p>`)
    )

fetchJSON()
