/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 

*/



/* Define Global Variables */
//all sections in array
const sections = Array.prototype.slice.call( document.getElementsByTagName("section"));
// nav bar list to add links
const navbarList = document.getElementById("navbar__list");
//height of window (screen) using to know section when near top of viewport
const height = window.innerHeight/2;
//maxScroll point 
const maxScroll = document.body.offsetHeight - window.innerHeight; ;
// scrollTarget value will update whin link clicked
var scrollTarget=0;
// The distance between the top of the window and the target section, in pixels
const distTopToPostion=50; //try change this value
// scrolingSpeed 
 const scrolingSpeed=50; //try change this value (0-1000)

 

// End Global Variables

/* Start Helper Functions */


 // arrow function for creat html text (anchor element) // Scroll to anchor ID using href attribute
const creatlink= section =>`<a data=${section.id} href="#${section.id}" class="menu__link" >${section.getAttribute("data-nav")}</a>`;
// check if section in viewport 
function isSectionInViewport (section){
 if(section.getBoundingClientRect().bottom>=height)return true;
 else return false;
}

// addEventListener() on click link go to section
function addClickEvent (link){
    //stop scrolling by href 
         link.addEventListener("click",function (e){
                   e.preventDefault();});
    
     //useing  smoothScroll () to set selection section in View
       link.addEventListener("click",function (e){
          let  pos= document.getElementById(e.target.getAttribute("data")).offsetTop;
            scrollTarget=Math.round(Math.min(Math.max(pos-distTopToPostion,0),maxScroll));
            smoothScroll();});
}
// Implement Smooth Scroll Using Javascript
function smoothScroll ( ){
    
      if (Math.round(scrollTarget/10)==Math.round(window.scrollY/10))return ;
    else if (scrollTarget<Math.round(window.scrollY)){
        if(Math.round(window.scrollY-scrolingSpeed)<scrollTarget){
            window.scrollBy(0,scrollTarget-window.scrollY );
        return;
         }
        else window.scrollBy(0,-scrolingSpeed );}
    else{
         if(Math.round(window.scrollY+scrolingSpeed)>scrollTarget){
             window.scrollBy(0,scrollTarget-window.scrollY );
             return;
         }

        else window.scrollBy(0, scrolingSpeed);}
    setTimeout(function() {smoothScroll();}, 20);
}
//End Helper Functions

/* *Begin Main Functions* */

// build the nav //add the addEventListener in (for of loop) 
function buildTheNav(){
        let container = document.createDocumentFragment();
    
    for (section of sections){
        
      let listItem= document.createElement('li');
        listItem.innerHTML= creatlink(section);
        // click addEventListener function
      addClickEvent(listItem);
         
        container.appendChild(listItem);
        
        
    }
    navbarList.appendChild(container);
    console.log("nav builded");
}

// Add class 'active' to section when near top of viewport
 const setActiveSection = function  ()
{
    let flagAdd=false;
    let flagRemove=false;
    
   for (section of sections) {
       if(flagAdd){
           if (section.classList.contains("your-active-class")){
            section.classList.remove("your-active-class");
               return 0;}
       }
       else{
       if(isSectionInViewport(section)){
           if (section.classList.contains("your-active-class"))return 0;
           else { 
               section.classList.add("your-active-class");
               flagAdd=true;
               if(flagRemove){return 0;} }
       }
       else {
           
        if (section.classList.contains("your-active-class")){
            section.classList.remove("your-active-class");
               flagRemove=true;
        }
       }
   }
}
}


// End Main Functions

 /* Begin Events */


// Build menu 
buildTheNav();


// Set sections as active 
document.addEventListener("scroll", setActiveSection);


