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
const optArticleTagsSelector = '.post-tags .list';


function generateTitleLinks(customSelector =''){
  console.log('link generated');
  /* remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML='';
  /* for each article */
  const articles = document.querySelectorAll(optArticleSelector + customSelector);
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

function generateTags(){
  console.log('');
  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);

  /* START LOOP: for every article: */
  for(let article of articles){
  /* find tags wrapper */
    const titleList = article.querySelector(optArticleTagsSelector);
    /* make html variable with empty string */
    let html ='';
    
    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');
    /* split tags into array */
    const articleTagsArray = articleTags.split(' ');
    /* START LOOP: for each tag */
    for (let tag of articleTagsArray){
      console.log('articleTagsArray');
      /* generate HTML of the link */
      const linkHTML ='<li><a href="#tag-'+tag+'">'+tag+'</a></li>';
      /* add generated code to html variable */
      html = html + linkHTML;
    /* END LOOP: for each tag */
    }
    /* insert HTML of all the links into the tags wrapper */
    titleList.innerHTML = html;
  /* END LOOP: for every article: */
  }
}
generateTags();


function tagClickHandler(event){
  /* prevent default action for this event */
  event.preventDefault();
  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');
  /* make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace('#tag-', '');
  /* find all tag links with class active */
  const activetags = document.querySelectorAll('a.active[href^="#tag-"]');
  /* START LOOP: for each active tag link */
  for (let tag of activetags){
  /* remove class active */
    tag.classList.remove('active');
  /* END LOOP: for each active tag link */
  }
  /* find all tag links with "href" attribute equal to the "href" constant */
  const newtags = document.querySelectorAll('a[href="'+href+'"]');
  /* START LOOP: for each found tag link */
  for (let newtag of newtags){
  /* add class active */
    newtag.classList.add('active');
  /* END LOOP: for each found tag link */
  }
  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks( '[data-tags~="'+tag+'"]');
}

function addClickListenersToTags(){
  /* find all links to tags */
  const tags = document.querySelectorAll('a[href^="#tag-"]');
  /* START LOOP: for each link */
  for (let tag of tags){
    /* add tagClickHandler as event listener for that link */
    tag.addEventListener('click', tagClickHandler);
  /* END LOOP: for each link */
  }
}
addClickListenersToTags();


