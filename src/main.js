import { button, request } from "./js/pixabay-api";


request.addEventListener("input", onRequest);
let userRequest= 0;
function onRequest(event){
    event.preventDefault();
    userRequest = request.value
}
button.addEventListener("click", onSubmit)
  function onSubmit(event) {
    event.preventDefault();
    searchParams.q = userRequest;
    console.log(userRequest);
    fetch();
  }