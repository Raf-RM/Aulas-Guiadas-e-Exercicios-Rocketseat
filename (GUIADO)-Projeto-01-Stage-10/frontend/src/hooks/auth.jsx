import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({children}){
  const [ data, setData] = useState({})

  async function signIn({email, password}){

    try{      
      const response = await api.post("/sessions", {email, password});
      const { user, token } = response.data

      localStorage.setItem("@rocketnotes:user", JSON.stringify(user));
      localStorage.setItem("@rocketnotes:token", token);

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      
      setData({user, token});
    
    }
    
    catch(error){

      if(error.response){
        alert(error.response.data.message)
      }
      
      else{
        alert("Não foi possível efetuar o login")
      }
    }
  }

  function signOut(){
    localStorage.removeItem("@rocketnotes:user");
    localStorage.removeItem("@rocketnotes:token");

    setData({});
  }
  
  async function updateProfile ({ user, avatarFile }){
    try{

      if(avatarFile){
        const fileUploadForm = new FormData();
        fileUploadForm.append("avatar", avatarFile);

        const response = await api.patch("/users/avatar", fileUploadForm);
        user.avatar = response.data.avatar;
      }

      const {password, old_password, ...userData} = user

      await api.put("/users", user)
      localStorage.setItem("@rocketnotes:user", JSON.stringify(userData))
      setData({user, token: data.token})
      alert("Perfil atualizado com sucesso!")

    }catch(error){

      if(error.response){
        alert(error.response.data.message)
      }
      
      else{
        alert("Não foi possível atualizar o perfil")
      }

    }
  }

  useEffect(() => {
    const user = localStorage.getItem("@rocketnotes:user");
    const token = localStorage.getItem("@rocketnotes:token");

    if(user && token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({
        user: JSON.parse(user),
        token
      });
    }  
  }, [])

  return(
    <AuthContext.Provider value={{ signIn, signOut, user: data.user, updateProfile }}>
      {children}
    </AuthContext.Provider>
  )
}

//Hook de autenticação. padrão de nomenclatura useNomeDaFunção
function useAuth(){
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };

