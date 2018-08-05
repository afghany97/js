const input = document.getElementById('input');

const UI = new ui();

input.addEventListener('keyup',handler);

function handler(){
 
    if(input.value === "")

        return;

    const api = new GitHub();

    api.getUser(input.value)
    
    .then((data) => data.profile.message == "Not Found" ? UI.NotFound() : UI.renderProfile(data))
    
    .catch( () => console.log("something happen here"));
}