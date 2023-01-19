gitAnchor = document.querySelector(".cards"); // anchor for gitProfile(s)

// generates github profile cards
function gitCard(githubData) {
    // define new elements
    const card = document.createElement("div"); // .card
        const imgSrc = document.createElement("img");
        const cardInfo = document.createElement("div"); // .card-info
            const name = document.createElement("h3"); // .name
            const userName = document.createElement("p"); // username
            const location = document.createElement("p");
            const profileContainer = document.createElement("div");
            const profile = document.createElement("span");
            const gitURL = document.createElement("a");
            const followers = document.createElement("p");
            const following = document.createElement("p");
            const bio = document.createElement("p");
            // const URL = document.createElement("span");

    // setup structure of elements
    card.appendChild(imgSrc);         // avatar_url
    card.appendChild(cardInfo);       // <div>
    cardInfo.appendChild(name);       // name
    cardInfo.appendChild(userName);   // login
    cardInfo.appendChild(location);   // location
    cardInfo.appendChild(profileContainer);   // added to hold profile text & URL
        profileContainer.appendChild(profile);
        profileContainer.appendChild(gitURL);   // html_url
    cardInfo.appendChild(followers);  // followers
    cardInfo.appendChild(following);  // following
    cardInfo.appendChild(bio);        // bio

    // set class names
    card.classList.add("card");
    cardInfo.classList.add("card-info");
    name.classList.add("name");
    userName.classList.add("username");

    // set text content (from githubData object)
    imgSrc.src = githubData.avatar_url; // its .src, not text
    name.textContent = githubData.name;
    userName.textContent = githubData.login;
    location.textContent = `Location: ${githubData.location}`;
    profile.textContent = `Profile: `;
        profile.style.fontSize = "1.4rem";
    gitURL.textContent = githubData.html_url;
    gitURL.href = githubData.html_url;
        gitURL.style.fontSize = "1.4rem";
    followers.textContent = `Followers: ${githubData.followers}`;
    following.textContent = `Following: ${githubData.following}`;
    bio.textContent = `Bio: ${githubData.bio}`;

    return card;
}

// get & render followers
function renderFollowers() {
  axios.get("https://api.github.com/users/littleonetwo/followers")
  .then(response => {
      // console.log('renderFollowers', response)
      response.data.forEach(person => {
          // console.log(person.login)
          const gitProfile = gitCard(person);
          gitAnchor.appendChild(gitProfile) // add profile to screen
      })
    })
    .catch(error => {
      console.log("Error: ", error);
    })
}

// get & render my github data
axios.get("https://api.github.com/users/littleonetwo")
    .then(response => {
        const gitProfile = gitCard(response.data);
        gitAnchor.appendChild(gitProfile) // add profile to screen
    })
    .catch(error => {
        console.log("Error: ", error);
    })

renderFollowers()


/* gitCard renders this structure:
  <div class="card">
      <img src={image url of user} />
      <div class="card-info">
          <h3 class="name">{users name}</h3>
          <p class="username">{users user name}</p>
          <p>Location: {users location}</p>
          <p>Profile:  
              <a href={address to users github page}>{address to users github page}</a>
          </p>
          <p>Followers: {users followers count}</p>
          <p>Following: {users following count}</p>
          <p>Bio: {users bio}</p>
      </div>
  </div>
*/