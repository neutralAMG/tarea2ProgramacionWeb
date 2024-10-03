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

    const deleteBtn = document.createElement("button")
    deleteBtn.className = "btn"
    deleteBtn.className +=" btn-danger"
    deleteBtn.textContent = "Delete"
    deleteBtn.addEventListener("click", (e) =>{
        e.preventDefault();

        div.remove();
    })

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
    div.appendChild(deleteBtn)

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

    const deleteBtn = document.createElement("button")
    deleteBtn.className = "btn"
    deleteBtn.className +=" btn-danger"
    deleteBtn.textContent = "Delete"
    deleteBtn.addEventListener("click", (e) =>{
        e.preventDefault();

        div.remove();
    })

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
    div.appendChild(deleteBtn)

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

    const deleteBtn = document.createElement("button")
    deleteBtn.className = "btn"
    deleteBtn.className +=" btn-danger"
    deleteBtn.textContent = "Delete"
    deleteBtn.addEventListener("click", (e) =>{
        e.preventDefault();

        div.remove();
    })

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
    div.appendChild(deleteBtn)

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

    const deleteBtn = document.createElement("button")
    deleteBtn.className = "btn"
    deleteBtn.className +=" btn-danger"
    deleteBtn.textContent = "Delete"
    deleteBtn.addEventListener("click", (e) =>{
        e.preventDefault();

        div.remove();
    })

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
    div.appendChild(deleteBtn)

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

    const deleteBtn = document.createElement("button")
    deleteBtn.className = "btn"
    deleteBtn.className +=" btn-danger"
    deleteBtn.textContent = "Delete"
    deleteBtn.addEventListener("click", (e) =>{
        e.preventDefault();

        div.remove();
    })

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
    div.appendChild(deleteBtn)

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

    const deleteBtn = document.createElement("button")
    deleteBtn.className = "btn"
    deleteBtn.className +=" btn-danger"
    deleteBtn.textContent = "Delete"
    deleteBtn.addEventListener("click", (e) =>{
        e.preventDefault();

        div.remove();
    })

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
    div.appendChild(deleteBtn)

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

    const newCvBtn = document.createElement("button");
    const newEditBtn = document.querySelector(".submitButton")


    newCvBtn.classList.add("btn", "btn-info", "newCvBtn");
    newCvBtn.addEventListener("click", (e) =>{
        e.preventDefault()
        newCvBtn.remove()
        newEditBtn.textContent = "Create CV"

        for(let i = 1; i< inputCollection.children.length; i +=2){
            inputCollection.children[i].value = "";
        }
        carrerSummary.value ="";

        resetFormFields(inputCollection, carrerSummary, skillInputs, softwareInputs, languageInputs, experiencesInputs, educationsInputs, certificationsInputs);
    })
    newCvBtn.textContent = "New CV"
    
    newEditBtn.textContent = "Edit CV"

    
    if (!form.contains(newCvBtn)) {
       form.append(newCvBtn)
    }
    
})

function resetFormFields(inputCollection, carrerSummary, ...inputGroups) {
    for (let i = 1; i < inputCollection.children.length; i += 2) {
        inputCollection.children[i].value = "";
    }
    carrerSummary.value = "";

    inputGroups.forEach((group) => {
        resetDynamicInputs(group);
    });
}

// Helper function to reset dynamic input groups
function resetDynamicInputs(inputGroup) {
    inputGroup[0].children[0].value = "";
    inputGroup[0].children[1].value = "";

    for (let i = 1; i < inputGroup.length; i++) {
        inputGroup[i].remove();
    }
}


function generateCV(data) {
    // Clear previous CV if exists
    const cvContainer = document.querySelector(".cv");
    while (cvContainer.firstChild) {
        cvContainer.removeChild(cvContainer.firstChild); // Clear existing CV content
    }
    

    // Create CV container elements with Bootstrap classes
    const cvWrapper = document.createElement("div");
    cvWrapper.classList.add("container", "mt-4", "p-4", "border", "rounded", "shadow-sm", "bg-light");

    const headerSection = document.createElement("div");
    headerSection.classList.add("text-center", "mb-4");

    const nameElement = document.createElement("h1");
    nameElement.textContent = data.name;
    nameElement.classList.add("display-4", "fw-bold");

    const professionElement = document.createElement("h2");
    professionElement.textContent = data.profession;
    professionElement.classList.add("h4", "text-secondary");

    const contactElement = document.createElement("div");
    contactElement.classList.add("mt-3", "text-muted");

    const emailLink = document.createElement("a");
    emailLink.href = `mailto:${data.email}`;
    emailLink.textContent = data.email;

    const linkedinLink = document.createElement("a");
    linkedinLink.href = data.linkedinLink;
    linkedinLink.target = "_blank";
    linkedinLink.textContent = "LinkedIn";
    linkedinLink.classList.add("text-decoration-none");

    contactElement.innerHTML = `
        <p>Email: ${emailLink.outerHTML}</p>
        <p>Phone: ${data.phone}</p>
        <p>Birth Date: ${data.birthDate}</p>
        <p>LinkedIn: ${linkedinLink.outerHTML}</p>
    `;

    headerSection.appendChild(nameElement);
    headerSection.appendChild(professionElement);
    headerSection.appendChild(contactElement);

    const contentSection = document.createElement("div");
    contentSection.classList.add("cv-content");

    // Summary section
    const summaryElement = document.createElement("div");
    summaryElement.classList.add("mb-4");
    summaryElement.innerHTML = `
        <h3 class="h5 border-bottom pb-2">Career Summary</h3>
        <p>${data.careerSummary}</p>
    `;

    // Skills section
    const skillsElement = document.createElement("div");
    skillsElement.classList.add("mb-4");
    skillsElement.innerHTML = `<h3 class="h5 border-bottom pb-2">Skills</h3>`;
    const skillsList = document.createElement("ul");
    skillsList.classList.add("list-group");
    data.skills.forEach(skill => {
        const skillItem = document.createElement("li");
        skillItem.classList.add("list-group-item");
        skillItem.textContent = `${skill.name} (Level: ${skill.level})`;
        skillsList.appendChild(skillItem);
    });
    skillsElement.appendChild(skillsList);

    // Software section
    const softwareElement = document.createElement("div");
    softwareElement.classList.add("mb-4");
    softwareElement.innerHTML = `<h3 class="h5 border-bottom pb-2">Software Proficiency</h3>`;
    const softwareList = document.createElement("ul");
    softwareList.classList.add("list-group");
    data.softwares.forEach(software => {
        const softwareItem = document.createElement("li");
        softwareItem.classList.add("list-group-item");
        softwareItem.textContent = `${software.name} (Level: ${software.level})`;
        softwareList.appendChild(softwareItem);
    });
    softwareElement.appendChild(softwareList);

    // Languages section
    const languagesElement = document.createElement("div");
    languagesElement.classList.add("mb-4");
    languagesElement.innerHTML = `<h3 class="h5 border-bottom pb-2">Languages</h3>`;
    const languagesList = document.createElement("ul");
    languagesList.classList.add("list-group");
    data.languages.forEach(language => {
        const languageItem = document.createElement("li");
        languageItem.classList.add("list-group-item");
        languageItem.textContent = `${language.name} (Level: ${language.level})`;
        languagesList.appendChild(languageItem);
    });
    languagesElement.appendChild(languagesList);

    // Experiences section
    const experiencesElement = document.createElement("div");
    experiencesElement.classList.add("mb-4");
    experiencesElement.innerHTML = `<h3 class="h5 border-bottom pb-2">Experiences</h3>`;
    const experiencesList = document.createElement("ul");
    experiencesList.classList.add("list-group");
    data.experiances.forEach(experience => {
        const experienceItem = document.createElement("li");
        experienceItem.classList.add("list-group-item");
        experienceItem.textContent = `${experience.name} (${experience.beginDate} - ${experience.endDate})`;
        experiencesList.appendChild(experienceItem);
    });
    experiencesElement.appendChild(experiencesList);

    // Education section
    const educationsElement = document.createElement("div");
    educationsElement.classList.add("mb-4");
    educationsElement.innerHTML = `<h3 class="h5 border-bottom pb-2">Education</h3>`;
    const educationsList = document.createElement("ul");
    educationsList.classList.add("list-group");
    data.educations.forEach(education => {
        const educationItem = document.createElement("li");
        educationItem.classList.add("list-group-item");
        educationItem.textContent = `${education.name} (${education.beginDate} - ${education.endDate})`;
        educationsList.appendChild(educationItem);
    });
    educationsElement.appendChild(educationsList);

    // Certifications section
    const certificationsElement = document.createElement("div");
    certificationsElement.classList.add("mb-4");
    certificationsElement.innerHTML = `<h3 class="h5 border-bottom pb-2">Certifications</h3>`;
    const certificationsList = document.createElement("ul");
    certificationsList.classList.add("list-group");
    data.certifications.forEach(certification => {
        const certificationItem = document.createElement("li");
        certificationItem.classList.add("list-group-item");
        certificationItem.textContent = `${certification.name} (${certification.beginDate} - ${certification.endDate})`;
        certificationsList.appendChild(certificationItem);
    });
    certificationsElement.appendChild(certificationsList);

    // Append sections to the content section
    contentSection.appendChild(summaryElement);
    contentSection.appendChild(skillsElement);
    contentSection.appendChild(softwareElement);
    contentSection.appendChild(languagesElement);
    contentSection.appendChild(experiencesElement);
    contentSection.appendChild(educationsElement);
    contentSection.appendChild(certificationsElement);

    // Append all to the main CV container
    cvWrapper.appendChild(headerSection);
    cvWrapper.appendChild(contentSection);
    cvContainer.appendChild(cvWrapper);
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

function clear(){
    
}