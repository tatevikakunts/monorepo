const db = require("../models")
const Album = db.albums

exports.create = (req, res)=>{
    Album.create({
        ...req.body
    })
        .then(album=>{
            res.send(album)
        })
        .catch(err=>{
            res.status(500).send({
                message:err.message
            })
        })
}

exports.findAll = (req, res)=>{
    Album.findAll()
        .then(data=>{
            if(!data){
                res.status(404).send({
                    message:"Album not found"
                })
            }
            res.send(data)
        })
        .catch(err=>{
            res.status(500).send({
                message:err.message || "Some error occurred while retrieving albums"
            })
        })
}

exports.findAllByPersonId = (req, res) => {
    const personId = req.params.id;

    Album.findAll({ where: { person_id: personId } })
        .then((data) => res.send(data))
        .catch((err) => {
            res
                .status(500)
                .send({ message: err.message || "Some error occured while searching" });
        });
};
exports.findOne = (req, res)=>{
    const id = req.params.id
    Album.findByPk(id)
        .then(data=>res.send(data))
        .catch(err=>{
            res.status(500).send({
                message:err.message || "Error retrieving album id =" +id
            })
        })
}

exports.update = (req, res)=> {
    const id = req.params.id
    Album.update(req.body, {
        where:{id:id}
    })
        .then(num=>{
            if(num==1){
                Album.findByPk(id)
                    .then(data=>res.send(data))
                    .catch(err=>{
                        res.status(500).send({
                            message:err.message || "Error retrieving album id =" +id
                        })
                    })
            }else{
                res.status(404).send({
                    message:`Cannot update Album with id = ${id}`
                })
            }
        })
        .catch(err=>{
            res.status(500).send({
                message:err.message || "Error updating Album with id =" + id
            })
        })
}
exports.delete = (req, res)=>{
    const id = req.params.id
    Album.destroy({
        where:{id:id}
    })
        .then(num=>{
            if(num==1){
                res.send({message:"The Album was successfully deleted"})
            }else{
                res.send({
                    message:`Cannot delete Album with id = ${id}`
                })
            }
        })
        .catch(err=>{
            res.status(500).send({
                message:err.message || "Error deleting Album Id = " + id
            })
        })
}

