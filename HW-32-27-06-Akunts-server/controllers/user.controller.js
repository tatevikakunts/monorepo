const db = require("../models")
const User = db.users


exports.findAll = (req, res)=>{
    User.findAll()
        .then(data=>{
            // if(!data){
            //     res.status(404).send({
            //         message:"User not found"
            //     })
            // }
            res.send(data)
        })
        .catch(err=>{
            res.status(500).send({
                message:err.message || "Some error occurred while retrieving users"
            })
        })
}
exports.findOne = (req, res)=>{
  const id = req.params.id
  User.findByPk(id)
      .then(data=>res.send(data))
      .catch(err=>{
          res.status(500).send({
              message:err.message || "Error retrieving user id =" +id
          })
      })
}

exports.update = (req, res)=> {
    const id = req.params.id
    User.update(req.body, {
        where:{id:id}
    })
        .then(num=>{
            if(num==1){
                User.findByPk(id)
                    .then(data=>res.send(data))
                    .catch(err=>{
                        res.status(500).send({
                            message:err.message || "Error retrieving user id =" +id
                        })
                    })
            }else{
                res.status(404).send({
                    message:`Cannot update User with id = ${id}`
                })
            }
        })
        .catch(err=>{
            res.status(500).send({
                message:err.message || "Error updating User with id =" + id
            })
        })
}
exports.delete = (req, res)=>{
    const id = req.params.id
    User.destroy({
        where:{id:id}
    })
        .then(num=>{
            if(num==1){
                res.send({message:"The User was successfully deleted"})
            }else{
                res.send({
                    message:`Cannot delete User with id = ${id}`
                })
            }
        })
        .catch(err=>{
            res.status(500).send({
                message:err.message || "Error deleting User Id = " + id
            })
        })
}