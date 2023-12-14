

const adminCredentials = {
    email: 'admin@example.com',
    password: 'admin123'
  };
  
  export const authenticateAdmin = (email, password) => {
    return email === adminCredentials.email && password === adminCredentials.password;
  };