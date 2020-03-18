let searchBox = document.querySelector('.searchBox');
let dataTitle = document.querySelectorAll('a');


function searchTerm(userInput) {
    //loop through the object and push onto an array
    dataTitle.forEach(i => {
        const x = i.getAttribute('data-title').toLowerCase();

        //if true display images otherwise hide them
        if (x.indexOf(userInput) > -1) {
            i.style.display = '';
        } else {
            i.style.display = 'none';
        }
    });
}

//get userInput and pass it to searchTerm()
function userInput() {
    //get input from the searchBox and make it all lowercase
    let userInputx = searchBox.value.toLowerCase();
    // const term = e.target.value.toLowerCase();
    searchTerm(userInputx)
}

//eventListener
searchBox.addEventListener('keyup', userInput);