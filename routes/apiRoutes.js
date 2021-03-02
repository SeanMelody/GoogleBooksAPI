const router = require("express").Router()

router.get("/seanisthebest", (req, res) => {
    res.send({ msg: "success" });
});

module.exports = router