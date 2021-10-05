const BASE_URL = `https://skinsweep/`

export async function loginApi(username: String, password: String) {
  // const response = await fetch(`${BASE_URL}/login`);
  // const success = await response.status == 200;
  // return success
  if (username == 'josh' && password == 'test') {
    return true;
  }
  throw new Error('invalid credentials');
}