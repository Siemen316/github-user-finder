let form = document.getElementById('form');
form.addEventListener('submit', showUsers);
let txt = document.getElementById('txt');
let card = document.querySelector('.card');

async function showUsers(e) {
  if (txt.value) {
    e.preventDefault();
    let api = await fetch(`https://api.github.com/users/${txt.value}`);
    let data = await api.json();
    if (data.location == null || data.name == null || data.blog == null) {
      card.innerHTML = `
                      <div class="image">
                          <img src="${data.avatar_url}" alt="">
                      </div>
                      <div class="infos">
                          <p>Name : -</p>
                          <p>Account :
                              <a href="${data.html_url}" target="_blank">${data.login}</a>
                              <i class="fas fa-external-link-alt fa-xs"></i>
                          </p>
                          <p>Website :
                              <a href="${data.blog}" target="_blank">-</a>
                          </p>
                          <p>Location : -</p>
                          <p>Followers : ${data.followers}</p>
                          <p>Repositories : ${data.public_repos}</p>
                  </div>
            `;
      txt.value = '';
    } else {
      card.innerHTML = `
                      <div class="image">
                          <img src="${data.avatar_url}" alt="">
                      </div>
                      <div class="infos">
                          <p>Name : ${data.name}</p>
                          <p>Account :
                              <a href="${data.html_url}" target="_blank">${data.login}</a>
                              <i class="fas fa-external-link-alt fa-xs"></i>
                          </p>
                          <p>Website :
                              <a href="${data.blog}" target="_blank">${data.blog}</a>
                              <i class="fas fa-external-link-alt fa-xs"></i>
                          </p>
                          <p>Location : ${data.location}</p>
                          <p>Followers : ${data.followers}</p>
                          <p>Repositories : ${data.public_repos}</p>
                  </div>
            `;
      txt.value = '';
    }
  } else {
    alert('fcuker!');
  }
}
