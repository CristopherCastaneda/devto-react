const key = 'token';

export const getTokenLocalStorage = () => {
  const token = localStorage.getItem(key);
  if(token)    
    return token;  
  return null;
}

export const saveTokenLocalStorage = (sessionData) => {
  localStorage.setItem(key, JSON.stringify(sessionData))
}

export const deleteTokenLocalStorage = () => {
  localStorage.removeItem(key)
}

export const getUserData = async (token) => {
  
  //get user ID
  const payload = token.split(".")[1];
  const tokenUserID = JSON.parse(atob(payload)).id; 

  const response = await fetch(`https://devto-backend-nine.vercel.app/users/${tokenUserID}`, {
    method: "GET",
    headers: {
    "Content-Type": "application/json"
    }
  });

  const user = await response.json(); 
  let userData = user.data.user;
  return userData;
} 

export const getUserPost = (user) =>{
        let userData = JSON.parse(user);  
        let token= userData.token      
        delete userData.savedPost;
        delete userData.token;

        return { userData, token }
        
}