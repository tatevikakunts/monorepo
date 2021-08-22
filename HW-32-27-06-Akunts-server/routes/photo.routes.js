const authJwt = require("../midddleware/auth.jwt");

module.exports = app =>{
    const photos = require("../controllers/photo.controller")

    const router = require("express").Router()

    router.get("/",  photos.findAll)

    router.get("/:id",  photos.findOne)

    router.get("/album_id/:id", photos.findAllByAlbumId);

    router.put("/:id", [authJwt.verifyToken], photos.update)

    router.delete("/:id", [authJwt.verifyToken], photos.delete)

    router.post("/", [authJwt.verifyToken], photos.create)

    app.use("/api/photos", router)
}