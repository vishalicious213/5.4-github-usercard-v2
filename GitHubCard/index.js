/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios.get("https://api.github.com/users/vishalicious213")
  .then(response => {
    console.log(response);
    // console.log(response.data); // stays in here, like a function
    const gitProfile = gitCard(response.data); // send data to function, below and save for reuse
    gitAnchor.appendChild(gitProfile) // add profile to screen
  })
  .catch(error => {
    console.log("Error: ", error);
  })

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ["adkhiker", "angel-torres", "BaoPham92", "CJStryker", "darrenjcarrillo", "erin-davis", "EvanAntunano", "gebhartn", "JaxAtwood", "Jnmendza", "johngwells", "Joshua-Burleson", "Justin-Kane", "LadyKerr", "kukicako", "littleonetwo", "Lfritze", "MrT3313", "mxxt1", "primelos", "seanaleid", "thisbenrogers", "tonyrkovar", "zeravenyoej"];


followersArray.forEach(follower => {
  axios.get(`https://api.github.com/users/${follower}`)
  .then(response => {
    console.log("Got follower data from GitHub: ", response.data.name);
    // console.log(response);
    const followerProfile = gitCard(response.data);
    gitAnchor.appendChild(followerProfile)    //append using function
  })
  .catch(err => {
    console.log("Got follower data error from GitHub", err)
  })
}) // followersArray


/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

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

gitAnchor = document.querySelector(".cards"); // anchor for gitProfile(s)

function gitCard(githubData) {
  // define new elements
  const card = document.createElement("div"); // .card
    const imgSrc = document.createElement("img");
    const cardInfo = document.createElement("div"); // .card-info
      const name = document.createElement("h3"); // .name
      const userName = document.createElement("p"); // username
      const location = document.createElement("p");
      const profileContainer = document.createElement("div");
      const profile = document.createElement("span"); // changed from <p> to <span>
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
    profileContainer.appendChild(profile);  // changed to <span>
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


/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
