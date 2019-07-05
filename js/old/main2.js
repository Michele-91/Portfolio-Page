
const portfolioList = [{

    tags: {
        html: { checked: false },
        css3: { checked: false },
        responsive: { checked: false},
        bootstrap: { checked: false},
        mongodb: { checked: false},
        sass: { checked: false },
        javascript: { checked: false },
        jquery: { checked: false },
        angular: { checked: false },
        nodejs: { checked: false },
        php: { checked: false },
        mysql: { checked: false },
        vuejs: { checked: false },
        magento: { checked: false },
        wordpress: { checked: false }
    }
}];


let emptySpace = document.querySelector(".portfolio__cells");
let cell = document.querySelectorAll(".portfolio__container");
let filteredList = [];
let counter = 0;
let temp = {};

const checkboxChecker = () => {
    emptySpace.style.height = "60px";
    let name;
    let checkbox = document.querySelectorAll(".tag-bar__form__input");
    for (let i = 0; i < checkbox.length; i++) {
        checkbox[i].addEventListener('change', function () {
            name = checkbox[i].name;
            if (portfolioList[0].tags[name].checked) {
                portfolioList[0].tags[name].checked = false;
                popFromList(name);
                emptySpaceSetup();
            } else {
                portfolioList[0].tags[name].checked = true;
                addToList(name); 
                emptySpaceSetup();
            }
        });
    }
};

const addToList = (enabledElem) => {
    counter++;
    filteredList.push(enabledElem);
    // console.log(filteredList);
    insertIntoSetup(enabledElem);
};
const popFromList = (disabledElem) => {
    counter--;
    let index = filteredList.indexOf(disabledElem);
    eraseFromSetup(disabledElem);
    filteredList.splice(index, 1);
    // console.log(filteredList);
}

const insertIntoSetup = function (enabledElem) {
    for (let site of siteList) {
        if(site.tags.includes(enabledElem)) {
            site.involved++;
            if(!site.enabled && site.involved > 0) {
                site.enabled = true;
                // console.log(site.content);
                insertIntoPage(site, enabledElem);
                emptySpaceSetup();
            } 
        }
    }
};

const eraseFromSetup = function(disabledElem) {
    for (let site of siteList) {
        if (site.tags.includes(disabledElem)) {
            site.involved--;
            if (site.enabled && site.involved <= 0) {
                site.enabled = false;
                emptySpaceSetup();
                removeFromPage(site, disabledElem);
            } 
        }
    }
};

const insertIntoPage = function (site, tag) {
    let selection = document.querySelector(".portfolio__cells");
    let addition = document.createElement('div');
    // addition.className = `portfolio__cell`;
    addition.className = `portfolio__cell ${tag}`;
    addition.setAttribute("id", `${tag}`);
    // addition.id.value = `${tag}`;
    addition.innerHTML = site.content;
    selection.insertAdjacentElement('beforeend', addition);
    // console.log(addition);
    // selection.append(addition);
};
const removeFromPage = function (site, tag) {
    // let selection = document.querySelector(".portfolio__cell");
    let container = document.querySelector(".portfolio__cells");
    let selection = container.children;
    // console.log(selection.classList.contains(tag));
    // console.log(selection.classList);
    // console.log(tag);
    // console.log(container.children);
    
    // for(let name of selection) {
        //     if (name.id == tag) {
            //         container.removeChild(name);
            //     }
            // }
            
    for (let name of selection) {
        if (name.classList[1] == tag && !site.enabled) {
            // name.className
            container.removeChild(name);
            console.dir(name);
        }
    }
};


// const removeFromPage = function (site, tag) {
//     let selection = document.querySelector(".portfolio__cell");
//     let container = selection.parentElement;
//     const allSelections = container.children;
//     // let container = document.querySelector(".portfolio__cells");
//     // console.log(container.firstElementChild);
//     if (selection.classList.contains(tag)) {
//         if (selection == container.firstElementChild) {
//             container.removeChild(container.firstElementChild);
//         } else {
//             for (let i = 0; i > allSelections.length; i++) {
//                 // console.log(allSelections[i].className);        
//                 container.removeChild(allSelections[i]);
//             }
//         }
//     } else {
//         if (selection == container.lastElementChild) {
//             container.removeChild(container.lastElementChild);
//         }
//         else {
//             for (let i = allSelections.length - 1; i > 0; i--) {
//                 // console.log(allSelections[i].className);        
//                 container.removeChild(allSelections[i]);
//             }
//         }
//     }

// }

// const insertIntoPage = function (site, tag) {
//     let selection = document.querySelector(".portfolio__cells");
//     let addition = document.createElement('div');
//     // addition.className = `portfolio__cell`;
//     addition.className = `portfolio__cell ${tag}`;
//     addition.innerHTML = site.content;
//     selection.insertAdjacentElement('beforeend', addition);
//     // selection.append(addition);
// };
// const removeFromPage = function (site, tag) {
//     let selection = document.querySelector(".portfolio__cell");
//     let container = document.querySelector(".portfolio__cells");
//     console.log(selection.classList.contains(tag));
//     console.log(selection.classList);
//     if (selection.classList.contains(tag)) {
//         selection.remove();
//     } else {
//         container.removeChild(container.lastChild);
//     }
// };


checkboxChecker();