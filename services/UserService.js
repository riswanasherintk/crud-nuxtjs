export async function getAllUsers() {
    const response = await fetch('https://gorest.co.in/public/v2/users');
    return await response.json();
}

export async function deleteUser(user_id) {
    const response = await fetch(`https://gorest.co.in/public/v2/users/${user_id}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json',
        'Authorization':'Bearer e3d497998ca18d76b283777fb9a5643f73199652d94105e666bc35f5e2c59adb'},
      }).then(res => res.text());
    return await response;
}

export async function createUser(name,email,gender,status) {
    const response = await fetch(`https://gorest.co.in/public/v2/users`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json',
        'Authorization':'Bearer e3d497998ca18d76b283777fb9a5643f73199652d94105e666bc35f5e2c59adb'},
        body: JSON.stringify({name: name,email:email,gender:gender,status:status})
    })
  return await response.json();
}