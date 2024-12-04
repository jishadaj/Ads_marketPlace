export const isLoggedIn = () => {
    const token = localStorage.getItem('token');
    return !!token; 
};

export const logout = () => {
    
    localStorage.removeItem('token'); 
    sessionStorage.removeItem('token'); 
    
    localStorage.removeItem('user');
    sessionStorage.removeItem('user');
  };
  
