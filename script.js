let gridlayout = document.getElementById('gridlayout');

function printToPage(incoming) {
  outputParagraph.innerHTML = incoming;
}
let myJson = [
  {
    "Series" : "Take Me With You",
    "pictureURL" :"https://images.genius.com/beedd8de9d5f28395564b7063f617b18.1000x1000x1.jpg",
    "Singer" : "Fleurie，Dalton Diehl & Ruslan",
  },
  {
    "Series" : "I GUESS I'M IN LOVE",
    "pictureURL" :"http://cdn.shopify.com/s/files/1/0513/0613/5747/products/Album-ClintonKane-IGuessImInLove.jpg?v=1631193039",
    "Singer" : "Clinton Kane",
  },
  {
    "Series" : "Head In the Clouds",
    "pictureURL" : "https://images.genius.com/dd5363601141f216550d0babc6ec2235.1000x1000x1.png",
    "Singer" : "Hayd",
  },
  {
    "Series" : "By Your Side",
    "pictureURL" : "https://m.media-amazon.com/images/I/81trq3SZGtL._SS500_.jpg",
    "Singer" : "Jonas Blue",
  },
  {
    "Series" : "Passionfruit",
    "pictureURL" : "https://i1.sndcdn.com/artworks-000214963376-l9bnws-t500x500.jpg",
    "Singer" : "Drake",
  },
  {
    "Series" : "Forget to Forget",
    "pictureURL" : "https://i1.sndcdn.com/artworks-000352299708-2mz2ea-t500x500.jpg",
    "Singer" : "SHY Martin",
  }
]
for (var i = 0; i < myJson.length; i++) {
  createElements(myJson[i]);
}

function createElements (incomingJSON) {
  let contentElement = document.createElement("DIV");
  contentElement.classList.add('items');

  let contentHeading = document.createElement("H2");
  contentHeading.classList.add('contentTitle');
  contentHeading.innerText = incomingJSON['Series'];
  contentElement.appendChild(contentHeading);

  let contentImg = document.createElement("IMG");
  contentImg.classList.add('contentImage');
  contentImg.src = incomingJSON['pictureURL'];
  contentElement.appendChild(contentImg);

  let container = document.createElement("DIV");
  container.classList.add('container');
  contentElement.appendChild(container);

  let singer = document.createElement("P");
  singer.classList.add('Singer');

  singer.innerText = "Singer: " + incomingJSON['Singer'];
  container.appendChild(singer);

  gridlayout.appendChild(contentElement);
}
