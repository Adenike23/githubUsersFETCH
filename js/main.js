const users = document.querySelector('.userProfile');
const searchButton = document.querySelector('.search');
const githubLink = document.querySelector('.githubLink');
const input = document.querySelector('main input')
document.addEventListener('DOMContentLoaded', getInfo())
async function getInfo(){
    const response = await fetch('https://api.github.com/users')
    let data = await response.json()
    if(response.ok){
        data.forEach(user => {
            let div = document.createElement('div')
            div.innerHTML=`
            <div class="user-info">
                <img src="${user.avatar_url}" alt="">
                <div>
                    <h2 class="userName">${user.login}</h2>
                    <a href="${user.html_url} target = "_blank"><i class="ri-links-line"></i>link</a>
                </div>
            </div>
            `
            users.appendChild(div)
        });
    }
}


searchButton.addEventListener('click', function(){
    githubLink.style.display = 'flex'
    githubLink.href = `https://github.com/${input.value}`
    githubLink.textContent = `https://github.com/${input.value}`
    input.value = ''
})