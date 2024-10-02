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

    const input = document.createElement("input");
    input.type = "text";
    input.id = "skill"
    input.className = "skill"

    const select = document.createElement("select");
    select.name = "skillLevel";
    select.id = "skillLevel";

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

    const input = document.createElement("input");
    input.type = "text";
    input.id = "software"
    input.className = "software"

    const select = document.createElement("select");
    select.name = "softwareLevel";
    select.id = "softwareLevel";

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

    const input = document.createElement("input");
    input.type = "text";
    input.id = "language"
    input.className = "language"

    const select = document.createElement("select");
    select.name = "languageLevel";
    select.id = "languageLevel";

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

    const input = document.createElement("input");
    input.type = "text";
    input.id = "experiance"
    input.className = "experiance"

    const beginDate = document.createElement("input");
    beginDate.type = "date";
    beginDate.name = "begin";
    beginDate.id = "begin";

    const endDate = document.createElement("input");
    endDate.type = "date";
    endDate.name ="end";
    endDate.id = "end";

    div.appendChild(input);
    div.appendChild(beginDate);
    div.appendChild(endDate);

    ExperianceColection.appendChild(div)
})

addEducationInputBtn.addEventListener("click", (e) =>{
    e.preventDefault();

    const div = document.createElement("div");
    div.className = "Educations";

    const input = document.createElement("input");
    input.type = "text";
    input.id = "education"
    input.className = "education"

    const beginDate = document.createElement("input");
    beginDate.type = "date";
    beginDate.name = "begin";
    beginDate.id = "begin";

    const endDate = document.createElement("input");
    endDate.type = "date";
    endDate.name ="end";
    endDate.id = "end";

    div.appendChild(input);
    div.appendChild(beginDate);
    div.appendChild(endDate);

    EducationColection.appendChild(div)
})

addCertificationInputBtn.addEventListener("click", (e) =>{
    e.preventDefault();

    const div = document.createElement("div");
    div.className = "Certifications";

    const input = document.createElement("input");
    input.type = "text";
    input.id = "certification"
    input.className = "certification"

    const beginDate = document.createElement("input");
    beginDate.type = "date";
    beginDate.name = "begin";
    beginDate.id = "begin";

    const endDate = document.createElement("input");
    endDate.type = "date";
    endDate.name ="end";
    endDate.id = "end";

    div.appendChild(input);
    div.appendChild(beginDate);
    div.appendChild(endDate);

    CertificationColection.appendChild(div)
})


const form = document.querySelector(".form")

form.addEventListener("click", (e) =>{
    e.preventDefault()
})

function validate(inputs){
inputs.forEach(element => {
    console.log(element.value)
});
}
