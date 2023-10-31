import { createContext, useContext } from "react";

export const AuthContext = createContext({});

function AuthProvider({children}){
  return(
    <AuthContext.Provider value={{email: 'rafael@gmail.com'}}>
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

