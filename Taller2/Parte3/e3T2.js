/*3. Dado el objeto { password: "admin30905", rol: "admin", edad: 20 } cambie el valor de la clave password por "user_7833", el valor de la clave rol por "user", el valor de la clave edad por 34. Imprima todo el objeto para verificar los cambios.*/

let objetoUser = { 
password: "admin30905", 
rol: "admin", 
edad: 20 
};

objetoUser.password = 'user_7833';

objetoUser.rol = 'user';

objetoUser.edad = '34';

console.log(objetoUser);