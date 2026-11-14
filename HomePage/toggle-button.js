const toggleSwitch = document.getElementById("dark-mode-toggle");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
  document.body.classList.add("dark-mode");
  toggleSwitch.checked = true;
  console.log("Current theme is dark-mode");
}
else {
  console.log("Current theme is light-mode");
}

toggleSwitch.addEventListener("change", function () {
  if (toggleSwitch.checked) {
    document.body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
  }
});

const ctaButton = document.getElementById("cta-button");
ctaButton.addEventListener("click", function () {
  window.open(
    /* "https://www.google.com", 
        "_blank"  /* 새 탭이나 새 창에서 열기 */
        "test.html",
        "_self"  /* 같은 탭에서 열기 */

  );
  //alert("CTA button clicked!");
});