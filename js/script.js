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

const descriptionbox1 = document.getElementById("productdescription1");
const descriptionbox2 = document.getElementById("productdescription2");
const descriptionbox3 = document.getElementById("productdescription3");
const descriptionbox4 = document.getElementById("productdescription4");
const descriptionbox5 = document.getElementById("productdescription5");
const descriptionbox6 = document.getElementById("productdescription6");
const description1 = document.getElementById("description1");
const description2 = document.getElementById("description2");
const description3 = document.getElementById("description3");
const description4 = document.getElementById("description4");
const description5 = document.getElementById("description5");
const description6 = document.getElementById("description6");
const hover1 = document.getElementById("hover1");
const hover2 = document.getElementById("hover2");
const hover3 = document.getElementById("hover3");
const hover4 = document.getElementById("hover4");
const hover5 = document.getElementById("hover5");
const hover6 = document.getElementById("hover6");
const product1 = document.getElementById("product1");
const product2 = document.getElementById("product2");
const product3 = document.getElementById("product3");
const product4 = document.getElementById("product4");
const product5 = document.getElementById("product5");
const product6 = document.getElementById("product6");
product1.addEventListener("mouseenter", () => {
	descriptionbox1.style.height = "60%";
	descriptionbox1.style.bottom = "43%";
	description1.style.display = "inline-block";
	hover1.style.display = "none";
})
product1.addEventListener("mouseleave", () => {
	descriptionbox1.style.height = "25%";
	descriptionbox1.style.bottom = "8%";
	description1.style.display = "none";
	hover1.style.display = "inline-block";
})
product2.addEventListener("mouseenter", () => {
	descriptionbox2.style.height = "60%";
	descriptionbox2.style.bottom = "43%";
	description2.style.display = "inline-block";
	hover2.style.display = "none";
})
product2.addEventListener("mouseleave", () => {
	descriptionbox2.style.height = "25%";
	descriptionbox2.style.bottom = "8%";
	description2.style.display = "none";
	hover2.style.display = "inline-block";
})
product3.addEventListener("mouseenter", () => {
	descriptionbox3.style.height = "60%";
	descriptionbox3.style.bottom = "43%";
	description3.style.display = "inline-block";
	hover3.style.display = "none";
})
product3.addEventListener("mouseleave", () => {
	descriptionbox3.style.height = "25%";
	descriptionbox3.style.bottom = "8%";
	description3.style.display = "none";
	hover3.style.display = "inline-block";
})
product4.addEventListener("mouseenter", () => {
	descriptionbox4.style.height = "60%";
	descriptionbox4.style.bottom = "43%";
	description4.style.display = "inline-block";
	hover4.style.display = "none";
})
product4.addEventListener("mouseleave", () => {
	descriptionbox4.style.height = "25%";
	descriptionbox4.style.bottom = "8%";
	description4.style.display = "none";
	hover4.style.display = "inline-block";
})
product5.addEventListener("mouseenter", () => {
	descriptionbox5.style.height = "60%";
	descriptionbox5.style.bottom = "43%";
	description5.style.display = "inline-block";
	hover5.style.display = "none";
})
product5.addEventListener("mouseleave", () => {
	descriptionbox5.style.height = "25%";
	descriptionbox5.style.bottom = "8%";
	description5.style.display = "none";
	hover5.style.display = "inline-block";
})
product6.addEventListener("mouseenter", () => {
	descriptionbox6.style.height = "60%";
	descriptionbox6.style.bottom = "43%";
	description6.style.display = "inline-block";
	hover6.style.display = "none";
})
product6.addEventListener("mouseleave", () => {
	descriptionbox6.style.height = "25%";
	descriptionbox6.style.bottom = "8%";
	description6.style.display = "none";
	hover6.style.display = "inline-block";
})

var productssource = ["pic1.png", "pic2.png", "pic3.png", "pic4.png"];
var productsdescriptions = ["Echo Dot 3rd Generation", "Battery Doorbell Pro", "Digital Alarm Clock", "Hamilton Beach 2 Toaster"];
var x = 1;
const products = document.getElementById("products");
const descriptions = document.getElementById("productsdescription");
const productsslide = () => {
	products.src = `./images/${productssource[x]}`;
	descriptions.innerText = productsdescriptions[x]; 
	if (x < productssource.length - 1) {
		x = x + 1;
	} else {
		x = 0;
	}
}
setInterval(productsslide,3000);