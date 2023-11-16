const conn = require('../../app/models/dbConnection')

exports.viewUsers = (req, res, next) => {

    const sql = `SELECT * FROM users order by id`
    conn.query(sql, function (err, data, feild) {
        if (err) {
            res.send({
                success: false,
                err: err.message
            })
        }
        else {
            res.send({
                data: data.rows,
                message: "users list"
            })
        }
    })
}