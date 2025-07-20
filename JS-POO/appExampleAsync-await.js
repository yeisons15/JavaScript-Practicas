async function fetchData() {
  try {
    let response = await fetch(
      "https://api.sampleapis.com/rickandmorty/characters"
    );
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

/* fetchData(); */


const urls = [
    "https://api.sampleapis.com/rickandmorty/characters",
    "https://api.sampleapis.com/rickandmorty/episodes",
    "https://api.sampleapis.com/rickandmorty/locations",
]

async function fetchNewData() {
    try{
        for await (let url of urls){
            let response = await fetch(url);
            let data = await response.json();
            console.log(data);
            console.log("------------------------");
        }
    }catch(error){
        console.log(error);
    }
}

fetchNewData();