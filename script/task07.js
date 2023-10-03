const link = document.querySelector("footer div a");
const cookieDiv = document.createElement('div');
cookieDiv.style.display = "none";
const buttonDelete = document.createElement('button');
buttonDelete.innerText = "Delete cookie";

link.addEventListener('click', (e) => {
    e.preventDefault();

})

// Create cookie
function setCookie(cname, cvalue) {
    const d = new Date();
    d.setTime(d.getTime() + (24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Delete cookie
function deleteCookie(cname) {
    const d = new Date();
    d.setTime(d.getTime());
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=;" + expires + ";path=/";
}

function acceptsCookies() {
    deleteCookie("acceptsCookies");
    setCookie("acceptsCookies", "true");
    document.querySelector("footer div:first-of-type").style.display = "none";
    document.querySelector("footer").appendChild(cookieDiv);
    document.querySelector("footer div:last-of-type").style.display = "block";
    cookieDiv.innerText = "Cookies accepted";
    cookieDiv.appendChild(buttonDelete);
}

link.addEventListener('click', acceptsCookies)

buttonDelete.addEventListener('click', () => {
    deleteCookie("acceptsCookies");
    document.querySelector("footer div:first-of-type").style.display = "block";
    document.querySelector("footer div:last-of-type").style.display = "none";
    cookieDiv.innerText = "";
});