const connection = require('../config/database')

const getAllUser = async () => {
    let [results, fields] = await connection.query(
        'SELECT * FROM Users u'
    )
    return results;
}
const getUserById = async (userId) => {
    let [results, fields] = await connection.query(
        'SELECT * FROM Users u WHERE id = ?',
        [userId]
    )
    let user = results && results.length > 0 ? results[0] : {};
    return user;
}
const updateUserById = async (email, name, city, id) => {
    let [results, fields] = await connection.query(
        `UPDATE Users u SET email = ?, name = ?, city = ? WHERE id = ?`,
        [email, name, city, id],
    );
}

const deleteUserById = async (id) => {
    let [results, fields] = await connection.query(                         
        `DELETE FROM Users WHERE id = ?`,
        [id],
    );
}


module.exports = {
    getAllUser,
    getUserById,
    updateUserById,
    deleteUserById
}