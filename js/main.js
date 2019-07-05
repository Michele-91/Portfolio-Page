
const portoflioList = {
    "html":  false,
    "css3": false,
    "responsive": false,
    "bootstrap": false,
    "mongodb": false,
    "sass": false,
    "javascript": false,
    "jquery":  false,
    "angular": false,
    "nodejs": false,
    "php": false,
    "mysql": false,
    "csharp": false,
    "clanguage" : false,
    "wordpress": false
};





const checkboxChecker = () => {
    let name;
    let checkbox = document.querySelectorAll(".tag-bar__form__input");
    for (let i = 0; i < checkbox.length; i++) {
        // console.log(checkbox[i].id);
        // console.log(checkbox[i].name);
        // console.log(checkbox);
        checkbox[i].addEventListener('change', function () {
            // console.log(checkbox[i].name);
            // console.log(checkbox[i].checked);
            name = checkbox[i].name;
            console.log(name);
            portoflioList[name] = true;
        });
    }
};


checkboxChecker();

// const timer = setInterval(() => {
//     console.log(portoflioList);
// }, 10000);