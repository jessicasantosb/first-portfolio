//***** Navegation bar section *****//
// to make the navegation bar responsive
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});

//***** Contact section *****//
// to put the email on clipboard when the button is clicked
const btn = document.querySelector("#copy-email");
const text = "jessica.santosb@outlook.com"
var popup = document.getElementById("myPopup");

btn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(text);
    console.log('Content copied to clipboard');
    popup.classList.toggle("show");
    setTimeout(() => {
      popup.classList.remove("show");
  }, 4000);
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
})

