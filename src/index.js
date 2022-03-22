const pupsURL = 'http://localhost:3000/pups';
const dogBlock = document.getElementById('dog-bar');

dogBlock.addEventListener("click", e=> {
    console.log(e.target)
    showPups()
})

fetch('http://localhost:3000/pups')
.then(response => response.json())
.then(response =>  {
    response.forEach(dog => {
        const span = document.createElement("span");
        span.textContent = dog.name
        dogBlock.append(span)
        console.log(response)
    })
})




function showPups(pup) {
    const dogInfoBlock = document.getElementById('dog-summary-container');
    const pupImg = document.createElement("img");
    pupImg.innerText= ""
    const pupName = document.createAttribute("h1");
    pupName.innerText = pup.name
    dogInfoBlock.append(pupImg, pupName)
    
}