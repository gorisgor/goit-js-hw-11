
export const request = document.querySelector(".request");
export const button = document.querySelector(".submit-btn");

const API_KEY = "43757696-1a32682a4096c08080d446579";
const URL = "https://pixabay.com/api/"
const searchParams = new URLSearchParams({
    key: API_KEY,
    q: "dogs",
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
  });

export const fetch = fetch(`${URL}${searchParams}`).then(response => {
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
    console.error("Error fetching images:", error);
});;