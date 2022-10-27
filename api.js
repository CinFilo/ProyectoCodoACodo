let generate_btn = document.querySelector('.generate-btn');
generate_btn.addEventListener('click', fetchPics);

function fetchPics() {
    let catsImgDiv = document.querySelector('.catsImgDiv')
    catsImgDiv.innerHTML = ''


    fetch('https://api.thecatapi.com/v1/images/search').then((response) => response.json())
    .then((data) => {
        let catsImgUrl = data[0].url

        let catsImgElement = document.createElement('img')
        catsImgElement.setAttribute('src', `${catsImgUrl}`)
        catsImgElement.classList.add("showcase")

        let catsImgDiv = document.querySelector('.catsImgDiv')
        catsImgDiv.appendChild(catsImgElement)
    })
    .catch(err => console.log(err))
}
