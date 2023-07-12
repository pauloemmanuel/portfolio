import { fetchProfileData } from './api.js';

(async function(){
  const data = await fetchProfileData();
  const profileData = new ProfileData(data.name,data.photo,data.job,data.location,data.phone,data.email);
  updateProfileData(profileData);
  const { hardSkills, softSkills } = data.skills;
  updateSkills(softSkills,hardSkills)
})()

function updateProfileData(profileData){
  document.querySelector('#profile_name').innerText = profileData.name;
  document.querySelector('#profile_photo').src = profileData.photo;
  document.querySelector('#profile_job').innerText = profileData.job
  document.querySelector('#profile_location').innerText = profileData.location;
  document.querySelector('#profile_cellphone').innerText = profileData.phone;
  document.querySelector('#profile_mail').innerText = profileData.email;
}

function updateSkills(softSkills,hardSkills){
  updateSoftSkills(softSkills);
  updateHardSkills(hardSkills);
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

function updateHardSkills(hardSkills){
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