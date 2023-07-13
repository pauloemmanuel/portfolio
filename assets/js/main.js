import { fetchProfileData } from './api.js';

(async function(){
  const data = await fetchProfileData();
  const profileData = new ProfileData(data.name,data.photo,data.job,data.location,data.phone,data.email);
  
  const { hardSkills, softSkills } = data.skills;
  
  updateProfileData(profileData);
  await updateSkills(softSkills,hardSkills)
  updateLanguages(data.languages)
  updatePortfolio(data.portfolio)
  updateProfessionalExperience(data.professionalExperience)
})()

function updateProfileData(profileData){
  document.querySelector('#profile_name').innerText = profileData.name;
  document.querySelector('#profile_photo').src = profileData.photo;
  document.querySelector('#profile_job').innerText = profileData.job
  document.querySelector('#profile_location').innerText = profileData.location;
  document.querySelector('#profile_cellphone').innerText = profileData.phone;
  document.querySelector('#profile_mail').innerText = profileData.email;
}

async function updateSkills(softSkills,hardSkills){
  updateSoftSkills(softSkills);
  await updateHardSkills(hardSkills);
}

function updateSoftSkills(softSkills){
  const softSkillsList = document.querySelector('#profile_soft-skills');
  softSkillsList.innerHTML = '';
  for(const softSkill of softSkills){
    const softSkillElement = document.createElement('li');
    softSkillElement.textContent = softSkill;
    softSkillsList.append(softSkillElement)
  }
}

async function updateHardSkills(hardSkills){
  const hardSkillsList = document.querySelector('#profile_hard-skills');
  hardSkillsList.innerHTML = '';
  for(const hardSkill of hardSkills){
    const hardSkillElement = document.createElement('li');
    hardSkillElement.innerHTML = `
    <li>
      <img src="${hardSkill.logo}" alt="${hardSkill.name}" title="${hardSkill.name}">
    </li>`
    hardSkillsList.append(hardSkillElement)
  }
}

function updateLanguages(languages){
  const languagesList = document.querySelector('#languages');
  languagesList.innerHTML = '';
  for(const language of languages){
    const languageElement = document.createElement('li');
    languageElement.innerText = language;
    languagesList.append(languageElement);
  }
}

function updatePortfolio(portfolioItems){
  const portfolioList = document.querySelector('#profile_portfolio');
  portfolioList.innerHTML = '';
  for(const item of portfolioItems){
    const portfolioElement = document.createElement('li');
    portfolioElement.innerHTML = `
    <li>
      <span class="portifolio-title">${item.name}</span>
      <a class="portifolio-link" target="_blank" href="${item.url}">${item.url}/</a>
    </li>`
    portfolioList.append(portfolioElement);
  }
}

function updateProfessionalExperience(professionalExperiences){
  const professionalExperiencesList = document.querySelector('#profile_experience');
  professionalExperiencesList.innerHTML = '';
  for(const professionalExperience of professionalExperiences){
    const professionalExperienceElement = document.createElement('li');
    professionalExperienceElement.innerHTML = `
    <li>
      <h3 class="title">${professionalExperience.name}</h3>
      <span class="period">${professionalExperience.period}</span>
      <p>${professionalExperience.description}</p>
    </li>`
    professionalExperiencesList.append(professionalExperienceElement);
  }
}
class ProfileData { 
  name;
  photo;
  job;
  location;
  phone;
  email;
  constructor(name,photo,job,location,phone,email){
    this.name = name;
    this.photo = photo;
    this.job = job;
    this.location = location;
    this.phone = phone;
    this.email = email;
  }
}