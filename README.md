# Landing Page Project


building Navigation Bar for Landing Page Dynamically using JavaScript 
###### by Ayman AbdElgawad
---
## Table of Contents

  

- [Project Title](#Landing-Page-Project)

- [Table of contents](#table-of-contents)

- [Instructions](#instructions)

- [Projet Files](#Projet-Files)

- [Installation](#Installation)

- [Usage](#usage)

- [Development](#development)

- [Contribute](#contribute)

- [License & Copyright](#License-&-Copyright)
---
## instructions
The starter project had some HTML and CSS styling to display a static version of the Landing Page project.
 By modification that done by me, it converted this project from a static project to an interactive one. That was done by making Some modifications to HTML and CSS Styling and Creating a whole JS File to make the Project Interactive.


[(Back to top)](#table-of-contents)

---
## Projet Files
- index.html 
- css/styles.css
- js/app.js
- README.md

[(Back to top)](#table-of-contents)

---
## Installation

Install the project to your PC by Download It as a ZIP File to your PC and UnZip the file.


[(Back to top)](#table-of-contents)


---
## Usage

after UnZip the file and open it on any Code Text Editor.


[(Back to top)](#table-of-contents)

---
## development


````JS Version: ES2015/ES6.````

  

````JS Standard: ESlint.````
#### The Project Contains Four Files :

#### css /

- styles.css

####  index.html

#### js /

- app.js

####  README.md



- There's not a lot of modification done in the HTML File it was just adding 2 more sections (4 and 5) to the Page and adding script tag to linking app.js file.

  

- The majority of the work was done on app.js, there is a lot of things done there:


        1.  global variables :
1- sections to store sections from array data type.
2- navbarList  to store the ul to  add links .

3-4-maxScroll point and height of window (screen) using to know section when near top of viewport store this  values in const variablesSo that the processor does not have to calculate its values every time the user scrolls or clicks on a link .

5-scrollTarget: value will update whin link clicked.

6-distTopToPostion: The distance between the top of the window and the target section, in pixels.

7-scrolingSpeed: cost variable  control scroling Speed whin user clicks on a link (1:1000). 



        2. Helper Functions
1-creatlink() arrow function for creat html text (anchor element) // Scroll to anchor ID using href attribute .

2-isSectionInViewport() check if section in viewport using getBoundingClientRect() function and global variable "height".

3-smoothScroll ( ) function  Implement Smooth Scroll Using Javascript using scrollBy() and setTimeout() and global variable "scrollTarget".

4-addClickEvent() function to addEventListener() on click link go to section
first it's stop scrolling by href using preventDefault(), then update global variables "scrollTarget" useing helping function smoothScroll () to set selection section in Viewport.



        3. Main Functions
1-buildTheNav() function build nav bar that  using createDocumentFragment()  and executed by for of loop and  helping arrow function creatlink()  to create html text and colling  addClickEvent() after creating every  link element in  the same for of loop .

2- setActiveSection() function Add class 'active' to section when near top of viewport using for of loop  and helping function isSectionInViewport(section) and using classList mothods (add , remove, contains) .this  function colling in addEventListener function "document.addEventListener('scroll', setActiveSection);".








[(Back to top)](#table-of-contents)




---
## Contribute
**- Udacity**

  

**- EgFwd**

  


[(Back to top)](#table-of-contents)



---
## License & Copyright
  

**© Udacity - Modified By Ayman AbdElgawad.**


[(Back to top)](#table-of-contents)