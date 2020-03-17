let searchBox = document.querySelector('.searchBox');
let dataTitle = document.querySelectorAll('a');
let arrayList = captureText();

function searchTerm(term) {
    // console.log(term);

    //if true display images otherwise hide them
    if (arrayList.splice(' ').indexOf(term) !== -1) {
        console.log('hello');
    } else {
        console.log('no way');
    }
}

//get text from the 'a' tag data-title attribute and return a value
function captureText() {
    let arrList = [];

    //loop through the object and push onto an array
    dataTitle.forEach(i => {
        const x = i.getAttribute('data-title').toLowerCase();
        arrList.push(x);
    })
    return arrList;
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