const review1 = document.getElementById("review1");
const review2 = document.getElementById("review2");
const review3 = document.getElementById("review3");
const profile1 = document.getElementById("profile1");
const profile2 = document.getElementById("profile2");
const profile3 = document.getElementById("profile3");

profile1.addEventListener("mouseenter", () => {
	profile1.style.width = "5em";
	profile1.style.height = "5em";
	profile2.style.width = "4em";
	profile2.style.height = "4em";
	review1.style.filter = "blur(0px)";
	review2.style.filter = "blur(3px)";
	review1.style.zIndex = "3";
})
profile1.addEventListener("mouseleave", () => {
	profile1.style.width = "4em";
	profile1.style.height = "4em";
	profile2.style.width = "5em";
	profile2.style.height = "5em";
	review1.style.filter = "blur(3px)";
	review2.style.filter = "blur(0px)";
	review1.style.zIndex = "0";
})
profile3.addEventListener("mouseenter", () => {
	profile3.style.width = "5em";
	profile3.style.height = "5em";
	profile2.style.width = "4em";
	profile2.style.height = "4em";
	review3.style.filter = "blur(0px)";
	review2.style.filter = "blur(3px)";
	review3.style.zIndex = "3";
})
profile3.addEventListener("mouseleave", () => {
	profile3.style.width = "4em";
	profile3.style.height = "4em";
	profile2.style.width = "5em";
	profile2.style.height = "5em";
	review3.style.filter = "blur(3px)";
	review2.style.filter = "blur(0px)";
	review3.style.zIndex = "0";
})

const changeLogo = () => {
    var scrollPosition = window.scrollY;
    var pageHeight = window.innerHeight;
    var currentPage = Math.floor(scrollPosition / pageHeight) + 1;
    var logoChange;
    if (currentPage % 2 === 0) {
        logoChange = "./images/logo2.svg";
    } else {
        logoChange = "./images/logo4.svg";
    }
    document.getElementById("logo").src = logoChange;
}
window.addEventListener("scroll", changeLogo);
