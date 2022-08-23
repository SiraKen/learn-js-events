window.addEventListener("load", () => {
  console.log("load");
});

window.addEventListener("popstate", (e) => {
  console.log("popstate");
});

if (document.getElementById("example"))
  document.getElementById("example").innerText = "Hello World";
