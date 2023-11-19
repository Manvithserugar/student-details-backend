
const client = require('../services/db');

const register = async (data) => {
        const{ name, college, email, usn, contact}= data;
        const result =  await client.query(
          "INSERT INTO registration(name, college, email, usn, contact) VALUES($1,$2,$3,$4,$5)",[name, college, email, usn, contact]);
         return result.rowCount? "success" : "something went wrong"  
}

const getRegistrationStatus = async (id) => {
    const result =  await client.query(
        'SELECT * FROM registration WHERE id = $1;', [id]);
     return result.rows? result.rows[0] : "user doesnot exist"  
}

module.exports = {
    register,
    getRegistrationStatus
}