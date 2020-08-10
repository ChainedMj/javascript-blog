'use strict';



function titleClickHandler(event){
  console.log('Link was clicked!');


const activelink = document.querySelector(".titles a.active")
activelink.classList.remove("active")

this.classList.add("active")
  /* remove class 'active' from all articles */
const activearticle = document.querySelector(".post.active")
activearticle.classList.remove("active")
  /* get 'href' attribute from the clicked link */
const articleid = this.getAttribute("href")
  /* find the correct article using the selector (value of 'href' attribute) */
const newarticle = document.querySelector(articleid)
  /* add class 'active' to the correct article */
  newarticle.classList.add("active")
}

const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}
