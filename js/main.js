fetch("https://tribal-gaming.free.mockoapp.net/clubinfo")
.then(response => response.json())
.then(dataArray => {
  dataArray.forEach(data => {
  let club = document.getElementById("club-info");

  let article = document.createElement("article");
  article.className = "club-info-article";

  let h3 = document.createElement("h3");
  h3.innerHTML = data.name;

  let img = document.createElement("img");
  img.src = data.img;

  let description = document.createElement("p");
  description.innerHTML = data.description;

  let trophies = document.createElement("p");
  trophies.innerHTML = "🏆 " + data.trophies;

  article.appendChild(img);
  article.appendChild(h3);
  article.appendChild(trophies);
  article.appendChild(description);

  club.appendChild(article);
})


})


fetch ("https://api-brawl.chewer.net/members") 
.then(response => response.json())
.then(data => {
  data.forEach(member => {
    let club = document.getElementById("club-members");
    let rgbColor = member.color.substring(4);

    let article = document.createElement("article");
    article.className = "club-members-article";

    let h3 = document.createElement("h3");
    h3.innerHTML = member.name;
    h3.style.color = "#" + rgbColor;

    let img = document.createElement("img");
    img.src = member.img;

    let trophies = document.createElement("p");
    trophies.innerHTML = member.trophies + " 🏆";

    article.appendChild(img);
    article.appendChild(h3);
    article.appendChild(trophies);

    club.appendChild(article);


  });
  
})



