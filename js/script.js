<<<<<<< HEAD
'use strict';



function titleClickHandler(event){
  console.log('Link was clicked!');
  event.preventDefault();

  const activelink = document.querySelector('.titles a.active');
  if (activelink) activelink.classList.remove('active');

  this.classList.add('active');
  /* remove class 'active' from all articles */
  const activearticle = document.querySelector('.post.active');
  activearticle.classList.remove('active');
  /* get 'href' attribute from the clicked link */
  const articleid = this.getAttribute('href');
  /* find the correct article using the selector (value of 'href' attribute) */
  const newarticle = document.querySelector(articleid);
  /* add class 'active' to the correct article */
  newarticle.classList.add('active');
}




const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

function generateTitleLinks(){
  console.log('link generated');
  /* remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML='';
  /* for each article */
  const articles = document.querySelectorAll(optArticleSelector);
  let html = '';
  for( let article of articles){
    const articleId = article.getAttribute ('id');
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    html = html + linkHTML;
  
  }
  titleList.innerHTML = html;
  const links = document.querySelectorAll('.titles a');

  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }
}

generateTitleLinks();


=======
'use strict';



function titleClickHandler(event){
  console.log('Link was clicked!');
  event.preventDefault();

  const activelink = document.querySelector('.titles a.active');
  if (activelink) activelink.classList.remove('active');

  this.classList.add('active');
  /* remove class 'active' from all articles */
  const activearticle = document.querySelector('.post.active');
  activearticle.classList.remove('active');
  /* get 'href' attribute from the clicked link */
  const articleid = this.getAttribute('href');
  /* find the correct article using the selector (value of 'href' attribute) */
  const newarticle = document.querySelector(articleid);
  /* add class 'active' to the correct article */
  newarticle.classList.add('active');
}




const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

function generateTitleLinks(){
  console.log('link generated');
  /* remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML='';
  /* for each article */
  const articles = document.querySelectorAll(optArticleSelector);
  let html = '';
  for( let article of articles){
    const articleId = article.getAttribute ('id');
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    html = html + linkHTML;
  
  }
  titleList.innerHTML = html;
  const links = document.querySelectorAll('.titles a');

  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }
}

generateTitleLinks();


>>>>>>> 4a9b35d2d7af8792d8132cfb7620a44920836442
