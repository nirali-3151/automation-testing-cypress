const conn = require('../../app/models/dbConnection')

exports.addUsers = async (req, res, next) => {
    const { first_name,
        last_name ,
        email } = req.body

    const sql = `INSERT into users(first_name ,last_name , email ) VALUES ('${first_name}' , '${last_name}' , '${email}') RETURNING id`
    conn.query(sql, function (err, data, feilds) {
        if (err) {
            res.send({
                success: false,
                err: err.message
            })
        }
        else {
            res.send({
                id:data.rows[0].id,
                message: `catagory ${data.rows[0].id} added to tghe database`
            })
        }
    })
}