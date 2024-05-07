
const request = document.querySelector(".request");
const button = document.querySelector(".submit-btn");

const API_KEY = "43757696-1a32682a4096c08080d446579";
const URL = "https://pixabay.com/api/";

function fetchImages() {
    const searchParams = new URLSearchParams({
        key: API_KEY,
        q: userRequest,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    });

    fetch(`${URL}?${searchParams}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(
                    "Sorry, there are no images matching your search query. Please try again!"
                );
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        });
}

let userRequest = ""; 

button.addEventListener("click", onSubmit);

function onSubmit(event) {
    event.preventDefault();
    if (!request.value.trim()) { 
      alert("Please, type a request");
  }  else {
      userRequest = request.value;
      fetchImages();
  }
    
}
