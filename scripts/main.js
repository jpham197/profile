/*

Hello

*/

var coll = document.getElementsByClassName("collapse");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

let workExperience = [
    {"title": "Software Engineer Intern", "org": "NCR", "date": "June 2020 - Aug 2020"},
    {"title": "IT Intern", "org": "Delta Air Lines", "date": "May 2019 - Aug 2019"},
    {"title": "TechX Intern", "org": "T-Mobile", "date": "June 2018 - May 2019"},
    {"title": "Workshop Trainer", "org": "GSU CETL", "date": "June 2017 - May 2018"}
]

function loadWorkExperience() {
    let content = document.getElementsByClassName("content")[0];
    console.log(content);

    workExperience.forEach(experience => {
        let title = experience.title;
        let org = experience.org;
        let date = experience.date;
        let section = generateWorkExperience(title, org, date);
        content.appendChild(section);
    })
}

function generateWorkExperience(title, organization, frame) {
    let section = document.createElement("section");
    let workTitle = document.createElement("span");
    let org = document.createElement("span");
    let date = document.createElement("span");

    workTitle.classList.add("work-title");
    org.classList.add("org");
    date.classList.add("date");

    workTitle.innerText = title;
    workTitle.innerText += " ";
    org.innerText = organization;
    date.innerText = frame;

    section.appendChild(workTitle);
    section.appendChild(org);
    section.appendChild(date);

    return section;
}