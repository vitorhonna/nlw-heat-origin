const linksSocialMedia = {
  github: "rocketseat",
  youtube: "rocketseat",
  instagram: "rocketseat_oficial",
  facebook: "rocketseat",
  twitter: "rocketseat",
};

function changeSocialMediaLinks() {
  for (let li of socialMediaLinks.children) {
    let linkClass = li.getAttribute("class");
    // Se já tiver o link-base
    li.children[0].href += linksSocialMedia[linkClass];
    // Outra opção, usando template string
    li.children[0].href = `https://${linkClass}.com/${linksSocialMedia[linkClass]}`;
  }
}

changeSocialMediaLinks();

function getGithubProfileInfo() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      githubUserName.textContent = data.name;
      githubUserBio.textContent = data.bio;
      githubUserLink.href = data.html_url;
      githubUserAvatar.src = data.avatar_url;
      githubUserUsername.textContent = linksSocialMedia.github;
    });
}

getGithubProfileInfo();
