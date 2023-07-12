
export async function fetchProfileData(){
  const url = 'https://pauloemmanuel.github.io/portfolio/data/profile.json';
  return await fetch(url).then((response)=>{
    return response.json(); 
  }).then((jsonResponse)=>{
    return jsonResponse;
  })
}