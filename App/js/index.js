const addSkillInputBtn = document.querySelector(".AddSkill");
const addSoftwareInputBtn = document.querySelector(".AddSoftware");
const addLanguageInputBtn = document.querySelector(".AddLanguage");
const addExperianceInputBtn = document.querySelector(".AddExperiance");
const addEducationInputBtn = document.querySelector(".AddEducation");
const addCertificationInputBtn = document.querySelector(".AddCertification");

const inputCollection = document.querySelector(".inputCollection")
const SkillsColection = document.querySelector(".skills");
const SoftwareColection = document.querySelector(".Softwares");
const LanguageColection = document.querySelector(".Languages");
const ExperianceColection = document.querySelector(".Experiances");
const EducationColection = document.querySelector(".Educations");
const CertificationColection = document.querySelector(".Certifications");

addSkillInputBtn.addEventListener("click", (e)=>{
    e.preventDefault();

    const div = document.createElement("div");
    div.className = "skills";
    div.className += " input-group"
    div.className += " mt-1"

    const input = document.createElement("input");
    input.type = "text";
    input.id = "skill"
    input.className = "skill"
    input.className += " form-control"
    input.placeholder = "Skill"

    const select = document.createElement("select");
    select.name = "skillLevel";
    select.id = "skillLevel";
    select.className = "form-select"

    const defaultOption = document.createElement("option");
    defaultOption.value ="";
    defaultOption.textContent = "Level";

    const option1 = document.createElement("option");
    option1.value = "1";
    option1.textContent = "1";

    const option2 = document.createElement("option");
    option2.value = "2";
    option2.textContent = "2";
    const option3 = document.createElement("option");
    option3.value = "3";
    option3.textContent = "3";
    const option4 = document.createElement("option");
    option4.value = "4";
    option4.textContent = "4";
    const option5 = document.createElement("option");
    option5.value = "5";
    option5.textContent = "5";

    select.appendChild(defaultOption);
    select.appendChild(option1);
    select.appendChild(option2);
    select.appendChild(option3);
    select.appendChild(option4);
    select.appendChild(option5);

    div.appendChild(input);
    div.appendChild(select);

    SkillsColection.appendChild(div)
})


addSoftwareInputBtn.addEventListener("click", (e) =>{
    e.preventDefault();

    const div = document.createElement("div");
    div.className = "Softwares";
    div.className += " input-group"
    div.className += " mt-1"

    const input = document.createElement("input");
    input.type = "text";
    input.id = "software"
    input.className = "software"
    input.className += " form-control"
    input.placeholder = "Software"

    const select = document.createElement("select");
    select.name = "softwareLevel";
    select.id = "softwareLevel";
    select.className = "form-select"

    const defaultOption = document.createElement("option");
    defaultOption.value ="";
    defaultOption.textContent = "Level";

    const option1 = document.createElement("option");
    option1.value = "1";
    option1.textContent = "1";

    const option2 = document.createElement("option");
    option2.value = "2";
    option2.textContent = "2";
    const option3 = document.createElement("option");
    option3.value = "3";
    option3.textContent = "3";
    const option4 = document.createElement("option");
    option4.value = "4";
    option4.textContent = "4";
    const option5 = document.createElement("option");
    option5.value = "5";
    option5.textContent = "5";

    select.appendChild(defaultOption);
    select.appendChild(option1);
    select.appendChild(option2);
    select.appendChild(option3);
    select.appendChild(option4);
    select.appendChild(option5);

    div.appendChild(input);
    div.appendChild(select);

    SoftwareColection.appendChild(div)
})

addLanguageInputBtn.addEventListener("click", (e) =>{
    e.preventDefault();

    const div = document.createElement("div");
    div.className = "Languages";
    div.className += " input-group"
    div.className += " mt-1"


    const input = document.createElement("input");
    input.type = "text";
    input.id = "language"
    input.className = "language"
    input.className += " form-control"
    input.placeholder = "Language"

    const select = document.createElement("select");
    select.name = "languageLevel";
    select.id = "languageLevel";
    select.className = "form-select"

    const defaultOption = document.createElement("option");
    defaultOption.value ="";
    defaultOption.textContent = "Level";

    const option1 = document.createElement("option");
    option1.value = "1";
    option1.textContent = "1";

    const option2 = document.createElement("option");
    option2.value = "2";
    option2.textContent = "2";
    const option3 = document.createElement("option");
    option3.value = "3";
    option3.textContent = "3";
    const option4 = document.createElement("option");
    option4.value = "4";
    option4.textContent = "4";
    const option5 = document.createElement("option");
    option5.value = "5";
    option5.textContent = "5";

    select.appendChild(defaultOption);
    select.appendChild(option1);
    select.appendChild(option2);
    select.appendChild(option3);
    select.appendChild(option4);
    select.appendChild(option5);

    div.appendChild(input);
    div.appendChild(select);

    LanguageColection.appendChild(div)
})

addExperianceInputBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const div = document.createElement("div");
    div.className = "Experiances";
    div.className += " input-group"
    div.className += " mt-1"

    const input = document.createElement("input");
    input.type = "text";
    input.id = "experiance"
    input.className = "experiance"
    input.className += " form-control"
    input.placeholder = "Experience"

    const beginDate = document.createElement("input");
    beginDate.type = "date";
    beginDate.name = "begin";
    beginDate.id = "begin";
    beginDate.className += " form-control"

    const endDate = document.createElement("input");
    endDate.type = "date";
    endDate.name ="end";
    endDate.id = "end";
    endDate.className += " form-control"

    div.appendChild(input);
    div.appendChild(beginDate);
    div.appendChild(endDate);

    ExperianceColection.appendChild(div)
})

addEducationInputBtn.addEventListener("click", (e) =>{
    e.preventDefault();

    const div = document.createElement("div");
    div.className = "Educations";
    div.className += " input-group"
    div.className += " mt-1"

    const input = document.createElement("input");
    input.type = "text";
    input.id = "education"
    input.className = "education"
    input.className += " form-control"
    input.placeholder = "Education"

    const beginDate = document.createElement("input");
    beginDate.type = "date";
    beginDate.name = "begin";
    beginDate.id = "begin";
    beginDate.className += " form-control"

    const endDate = document.createElement("input");
    endDate.type = "date";
    endDate.name ="end";
    endDate.id = "end";
    endDate.className += " form-control"

    div.appendChild(input);
    div.appendChild(beginDate);
    div.appendChild(endDate);

    EducationColection.appendChild(div)
})

addCertificationInputBtn.addEventListener("click", (e) =>{
    e.preventDefault();

    const div = document.createElement("div");
    div.className = "Certifications";
    div.className += " input-group"
    div.className += " mt-1"

    const input = document.createElement("input");
    input.type = "text";
    input.id = "certification"
    input.className = "certification"
    input.className += " form-control"
    input.placeholder = "Certification"

    const beginDate = document.createElement("input");
    beginDate.type = "date";
    beginDate.name = "begin";
    beginDate.id = "begin";
    beginDate.className += " form-control"

    const endDate = document.createElement("input");
    endDate.type = "date";
    endDate.name ="end";
    endDate.id = "end";
    endDate.className += " form-control"

    div.appendChild(input);
    div.appendChild(beginDate);
    div.appendChild(endDate);

    CertificationColection.appendChild(div)
})


const form = document.querySelector(".form")
const responces = [];
form.addEventListener("submit", (e) =>{
    e.preventDefault()
    responces.length = 0;
    let isValid = false;
    for(let i = 1; i< inputCollection.children.length; i +=2){
        validate(inputCollection.children[i]);
    }
    const carrerSummary = document.querySelector("#summary")
    validate(carrerSummary);

    const skillInputs = document.getElementsByClassName("skills")
    iterateThroughFirstTreeDinamicInputs(skillInputs);

    const softwareInputs = document.getElementsByClassName("Softwares")
    iterateThroughFirstTreeDinamicInputs(softwareInputs);

    const languageInputs = document.getElementsByClassName("Languages")
    iterateThroughFirstTreeDinamicInputs(languageInputs);

    const experiencesInputs = document.getElementsByClassName("Experiances")
    iterateThroughSecondTreeDinamicInputs(experiencesInputs);

    const educationsInputs = document.getElementsByClassName("Educations")
    iterateThroughSecondTreeDinamicInputs(educationsInputs);

    const certificationsInputs = document.getElementsByClassName("Certifications")
    iterateThroughSecondTreeDinamicInputs(certificationsInputs);

    for(let i = 0; i < responces.length; i++){
       isValid = responces[i]
       if(!responces[i]){
         isValid = responces[i]; 
         console.log(responces[i])
         return;
       } 
    }

     console.log(isValid)
    if(!isValid) return;

    const dataToUse = {
        name: inputCollection.children[1].value,
        Profession: inputCollection.children[3].value,
        email: inputCollection.children[5].value,
        phone: inputCollection.children[7].value,
        birthDate: inputCollection.children[9].value,
        linkedinLink: inputCollection.children[11].value,
        skills: generateLevelInputsData(skillInputs),
        softwares: generateLevelInputsData(softwareInputs),
        languages: generateLevelInputsData(languageInputs),
        careerSummary: carrerSummary.value,
        experiances: generateDateInputsData(experiencesInputs),
        educations: generateDateInputsData(educationsInputs),
        certifications: generateDateInputsData(certificationsInputs)
    }

    generateCV(dataToUse)
})

function generateCV(data) {
    // Clear previous CV if exists
    const cvContainer = document.querySelector(".cv");
    while (cvContainer.firstChild) {
        cvContainer.removeChild(cvContainer.firstChild); // Clear existing CV content
    }

    // Create elements for the CV
    const nameElement = document.createElement("h2");
    nameElement.textContent = data.name;

    const professionElement = document.createElement("h3");
    professionElement.textContent = data.profession;

    const contactElement = document.createElement("p");
    const emailLink = document.createElement("a");
    emailLink.href = `mailto:${data.email}`;
    emailLink.textContent = data.email;
    contactElement.appendChild(document.createTextNode("Email: "));
    contactElement.appendChild(emailLink);
    contactElement.appendChild(document.createElement("br"));
    contactElement.appendChild(document.createTextNode(`Phone: ${data.phone}`));
    contactElement.appendChild(document.createElement("br"));
    contactElement.appendChild(document.createTextNode(`Birth Date: ${data.birthDate}`));
    contactElement.appendChild(document.createElement("br"));
    const linkedinLink = document.createElement("a");
    linkedinLink.href = data.linkedinLink;
    linkedinLink.target = "_blank";
    linkedinLink.textContent = data.linkedinLink;
    contactElement.appendChild(document.createTextNode("LinkedIn: "));
    contactElement.appendChild(linkedinLink);

    const summaryElement = document.createElement("h4");
    summaryElement.textContent = "Career Summary";
    const summaryText = document.createElement("p");
    summaryText.textContent = data.careerSummary;

    const skillsElement = document.createElement("h4");
    skillsElement.textContent = "Skills";
    const skillsList = document.createElement("ul");
    data.skills.forEach(skill => {
        const skillItem = document.createElement("li");
        skillItem.textContent = `${skill.name} (Level: ${skill.level})`;
        skillsList.appendChild(skillItem);
    });

    const softwareElement = document.createElement("h4");
    softwareElement.textContent = "Software Proficiency";
    const softwareList = document.createElement("ul");
    data.softwares.forEach(software => {
        const softwareItem = document.createElement("li");
        softwareItem.textContent = `${software.name} (Level: ${software.level})`;
        softwareList.appendChild(softwareItem);
    });

    const languagesElement = document.createElement("h4");
    languagesElement.textContent = "Languages";
    const languagesList = document.createElement("ul");

    data.languages.forEach(language => {
        const languageItem = document.createElement("li");
        languageItem.textContent = `${language.name} (Level: ${language.level})`;
        languagesList.appendChild(languageItem);
    });

    const experiencesElement = document.createElement("h4");
    experiencesElement.textContent = "Experiences";
    const experiencesList = document.createElement("ul");
    data.experiances.forEach(experience => {
        const experienceItem = document.createElement("li");
        experienceItem.textContent = `${experience.name} (${experience.beginDate} - ${experience.endDate})`;
        experiencesList.appendChild(experienceItem);
    });

    const educationsElement = document.createElement("h4");
    educationsElement.textContent = "Education";
    const educationsList = document.createElement("ul");
    data.educations.forEach(education => {
        const educationItem = document.createElement("li");
        educationItem.textContent = `${education.name} (${education.beginDate} - ${education.endDate})`;
        educationsList.appendChild(educationItem);
    });

    const certificationsElement = document.createElement("h4");
    certificationsElement.textContent = "Certifications";
    const certificationsList = document.createElement("ul");
    data.certifications.forEach(certification => {
        const certificationItem = document.createElement("li");
        certificationItem.textContent = `${certification.name} (${certification.beginDate} - ${certification.endDate})`;
        certificationsList.appendChild(certificationItem);
    });

    // Append all elements to the CV container
    cvContainer.appendChild(nameElement);
    cvContainer.appendChild(professionElement);
    cvContainer.appendChild(contactElement);
    cvContainer.appendChild(summaryElement);
    cvContainer.appendChild(summaryText);
    cvContainer.appendChild(skillsElement);
    cvContainer.appendChild(skillsList);
    cvContainer.appendChild(softwareElement);
    cvContainer.appendChild(softwareList);
    cvContainer.appendChild(languagesElement);
    cvContainer.appendChild(languagesList);
    cvContainer.appendChild(experiencesElement);
    cvContainer.appendChild(experiencesList);
    cvContainer.appendChild(educationsElement);
    cvContainer.appendChild(educationsList);
    cvContainer.appendChild(certificationsElement);
    cvContainer.appendChild(certificationsList);
}
function validate(input){
    input.style.borderWidth = "2px"
if(input.value === undefined || input.value === "" || input.value === null || input.value === " ") {
    input.style.borderColor = "red"
     return responces.push(false) 
}
input.style.borderColor = "green"
return responces.push(true) ;
}

function generateLevelInputsData(inputs){
    let objectArray = []
 for(let i = 0; i< inputs.length; i++){
    objectArray.push({name: inputs[i].children[0].value, level: inputs[i].children[1].value})
 }
 return objectArray
}

function generateDateInputsData(inputs){
let objectArray = []
 for(let i = 0; i< inputs.length; i++){
    objectArray.push({name: inputs[i].children[0].value, beginDate: inputs[i].children[1].value, endDate: inputs[i].children[2].value})
 }
 return objectArray
}

function iterateThroughFirstTreeDinamicInputs(inputs){
    for(let i = 0; i< inputs.length ; i++){
       validate(inputs[i].children[0]) 
       validate(inputs[i].children[1])
    }
}

function iterateThroughSecondTreeDinamicInputs(inputs){
    for(let i = 0; i< inputs.length ; i++){
        validate(inputs[i].children[0])
        validate(inputs[i].children[1])
        validate(inputs[i].children[2])
    }
}
