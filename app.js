//***** Navegation bar section *****//
// to make the navegation bar responsive
const hamburger = document.querySelector(".hamburger");
const navlinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li")

hamburger.addEventListener('click', () => {
  navlinks.classList.toggle("open");
  links.forEach(link => {
    link.addEventListener("click", () => {
      if (link) {
        setTimeout(() => {
          navlinks.classList.remove("open");
      }, 500);
      }
    })
  });
});

// script to change the language of the page is on html file (it doesn´t worked here yet)


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

