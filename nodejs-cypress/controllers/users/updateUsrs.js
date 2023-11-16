const conn = require('../../app/models/dbConnection')

exports.updateUsers = async (req, res, next) => {
    const { first_name,
        last_name,
    email } = req.body

    const { id } = req.params

    const sql = `UPDATE  users SET first_name = ('${first_name}'),last_name =  ('${last_name}') ,email =  ('${email}')  WHERE id = ('${id}') RETURNING id`
    conn.query(sql, function (err, data, feilds) {
        if (err) {
            res.send({
                success: false,
                err: err.message
            })
        }
        else {
            res.send({
                message: `catagory  ${data.rows[0].id} updated`,
                id:data.rows[0].id
            })
        }
    })

}