const conn = require('../../app/models/dbConnection')

exports.deleteUsers = async (req, res, next) => {
    const { id } = req.params

    const sql =  `DELETE from users  WHERE id = '${id}' RETURNING id`

    conn.query(sql, function (err, data, feilds) {
        if (err) {
            res.send({
                success: false,
                err: err.message
            })
            console.log("err.message", err.message);
        }
        else {
            if(!data.rows)
            {
                "id is not existed"
            }
            else {
                res.send({
                    id : data.rows[0].id,
                    message: `delete ${data.rows[0].id}`
                })
            }
        }
    })

}