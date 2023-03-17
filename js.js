'use strict';

let commentName = document.getElementById('commentname');

async function getRepos(repoName){

    let response = await fetch(`https://api.github.com/search/repositories?q=${repoName}`);
    
    if (!response.ok) {
        return null;
    } else {
        let result =  await response.json();
        result = result.items.splice(0, 10);

        let list = document.getElementById('comment');
        let key; 

        for (key  in result) {
        let a = 'ссылка';

        list.innerHTML += `
        <ol class ='result'>
        <h4 class="name">${result[key].name}</h4>
        <a href="${result[key].url}">${a}</a>
        </ol>`
        }
        return list;
    } 
}


document.getElementById('comment-add').onclick = function click(){
    if (commentName.value.length < 2) {
        return alert('Слишком короткое значение');
    } else {  
        return getRepos(commentName.value);
    }
}



