document.getElementById("complimentButton").onclick = function () {
  axios.get("http://localhost:4000/api/compliment/").then(function (response) {
    const data = response.data
    alert(data)
  })
}

document.getElementById("ratingButton").onclick = function () {
  axios.get("http://localhost:4000/api/rating/").then(function (response) {
    const data = response.data
    alert(data)
  })

}

document.getElementById("fortuneButton").addEventListener('click', () => {
  axios.get("http://localhost:4000/api/fortune/").then(function (response) {
    const data = response.data
    alert(data)
  })
})
