'use strict';

let inputElement = document.getElementById('inputElement');

document.getElementById('comment-add').onclick = function click(){
    if (inputElement.value.length < 2) return alert('Слишком короткое значение');
}

let formReprository = document.querySelector('.formReprository');
formReprository.addEventListener('submit', async (e) => {
    e.preventDefault();

    let valueInput = inputElement.value;
    let response = await fetch(`https://api.github.com/search/repositories?q=${valueInput}`);
    
    if (response.ok) {
        let result =  await response.json();
        console.log(result);
        result = result.items.splice(0, 10);

        let list = document.getElementById('responseGit');
        let key; 

        for (key  in result) {
        list.innerHTML += `
        <ol class ='result'>
        <a href="${result[key].html_url}">${result[key].name}</a>
        <h4 class="name"><span> Язык программирования:</span>${result[key].language}</h4>
        </ol>`
      
    }} else {
        alert("Ничего не найдено!")
    }}
)
