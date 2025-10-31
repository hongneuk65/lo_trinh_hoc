import pool from "../config/connectDB";


let getHomePage = async (req, res) => {

    const [rows, fields] = await pool.execute('SELECT * FROM users');
    return res.render('index.ejs', { dataUser: rows })

}

let getDetailPage = async (req, res) => {
    let id = req.params.userId;
    let [user] = await pool.execute('SELECT * FROM users WHERE id = ?', [id]);
    return res.send(JSON.stringify(user));
}

let createNewUser = async (req, res) => {
    let {firstName, lastName, email, address} = req.body;
    console.log(firstName, lastName, email, address);
    await pool.execute('INSERT INTO users (firstName, lastName, email, address) VALUES (?, ?, ?, ?)',
        [firstName, lastName, email, address]);
    return res.redirect('/');
}

module.exports = {
    getHomePage,
    getDetailPage,
    createNewUser
}