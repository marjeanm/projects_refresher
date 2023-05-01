

// this is the  button assignment 
const formSubmit = document.querySelector("#search");

const flexbox = document.querySelector(".flex");
//function for the form submittion
formSubmit.addEventListener('submit',async (e)=>{
  e.preventDefault();
  let inputSearch = e.target.elements.query.value; 
  console.log(e.target.elements.query.value)
  const res = await axios.get(
    `https://api.tvmaze.com/singlesearch/shows?q=${inputSearch}&embed=episodes`
  );
    makeImg(res.data);
    
    formSubmit.elements.query.value = '';
});
const makeImg = (shows) => {


  const img = document.createElement('img');
  img.className="img-dec"
  flexbox.append(img)

let genres = shows.genres
let name = shows.name
let status = shows.status
let premiered = shows.ended
let summary = shows.summary

let words = [name,premiered,genres,summary,status]
let nodes = words.map((words)=>{
let li = document.createElement('li')
li.innerHTML = words;
return li;
})

flexbox.append(...nodes)
flexbox.append
img.src=shows.image.medium;
console.log(shows)

};


const reloadWindows = () =>{
  window.location.reload(true);
};
const refreshButton = document.querySelector('.refresh');
refreshButton.addEventListener('click',reloadWindows);

