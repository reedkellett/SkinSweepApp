const BASE_URL = `https://skinsweep/`

export async function loginAPI(username: String, password: String) {
  // const response = await fetch(`${BASE_URL}/login`);
  // const success = await response.status == 200;
  // return success
  if (username == 'josh' && password == 'test') {
    return {
      id: 1,
    };
  }
  throw new Error('invalid credentials');
}

export async function signupAPI(email: String, password: String) {
  // send data to backend
  if(email && password){
    return {
      id: 2,
    }
  }
  throw new Error('invalid credentials');
}