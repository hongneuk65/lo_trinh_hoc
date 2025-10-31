const connection = require('../config/database')
const { getAllUser, updateUserById, getUserById, deleteUserById } = require('../services/CRUDservice')

const getHomePage = async (req, res) => {
    let results = await getAllUser();
    return res.render('home.ejs', { users: results })

}

const getHugo = (req, res) => {
    res.render('sample.ejs')
}

const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

const getUpdatePage = async (req, res) => {
    const userId = req.params.id;
    let user = await getUserById(userId);
    res.render('update.ejs', { userEdit: user })
}

const postCreateUser = async (req, res) => {
    let { email, myname: name, city } = req.body;
    let [results, fields] = await connection.query(
        `INSERT INTO Users (email, name, city ) VALUES (?, ?, ?)`,
        [email, name, city],
    );
    // console.log("check", results)
    res.send('created user success')
}

const postUpdateUser = async (req, res) => {
    let { userId: id, email, myname: name, city } = req.body;
    let user = await updateUserById(email, name, city, id);
    res.redirect('/')
}

const postDeleteUser = async (req, res) => {
    const userId = req.params.id;
    let user = await getUserById(userId);
    res.render('delete.ejs', { userDelete: user })
}

const postHandleRemoveUser = async (req, res) => {
    let { userId: id } = req.body;
    let user = await deleteUserById(id);
    res.redirect('/')
}
module.exports = {
    getHomePage,
    getHugo,
    postCreateUser,
    getCreatePage,
    getUpdatePage,
    postUpdateUser,
    postDeleteUser,
    postHandleRemoveUser
}