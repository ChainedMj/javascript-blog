'use strict';



function titleClickHandler(event){
  console.log('Link was clicked!');


const activelink = document.querySelector(".titles a.active")
activelink.classList.remove("active")

this.classList.add("active")
  /* remove class 'active' from all articles */
const activearticul = document.querySelector(".post.active")
activearticul.classList.remove("active")
  /* get 'href' attribute from the clicked link */
const articulid = this.getAttribute("href")
  /* find the correct article using the selector (value of 'href' attribute) */
const newarticul = document.querySelector(articulid)
  /* add class 'active' to the correct article */
  newarticul.classList.add("active")
}

const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}