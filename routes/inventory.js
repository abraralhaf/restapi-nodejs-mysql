var express = require("express");
var router = express.Router();

const Validator = require('fastest-validator');
const v = new Validator;
const {Barang} = require("../models")

// GET
router.get("/", async (req, res, next) => {
    const barang = await Barang.findAll();
    return res.json({
        status: 200,
        message: "Success get all data",
        data: barang
    })
});

// GET BY ID
router.get("/:id", async (req, res, next) => {
    const id = req.params.id;
    let barang = await Barang.findByPk(id);
    if(!barang){
        return res.status(404).json({
            status:404,
            message:"Data Not Found"
        });
    }else{
        return res.json({
            status: 200,
            message: "Success data",
            data: barang
        });
    }
  
});

// POST
router.post("/",async(req, res,next)=> {
    //validation
    const schema = {
        part_number: "string",
        description: "string",
        alias: "string|optional",
        link: "string",
        images: "array|optional"
    }
    const validate = v.validate(req.body, schema);
    if(validate.length){
        return res.status(400),json(validate);
    }
    //create
    const barang = await Barang.create(req.body);
    res.json({
        status: 200,
        message: "Success create data",
        data: barang
    });
});

// PUT
router.put("/:id", async (req, res ,next) => {
    const id = req.params.id
    let barang = await Barang.findByPk(id);

    if(!barang){
        return res.status(404).json({
            status:404,
            message:"Data Not Found"
        });
    }
    //validation
    const schema = {
        part_number: "string|optional",
        description: "string|optional",
        alias: "string|optional",
        link: "string|optional",
        images: "array|optional"
    }
    const validate = v.validate(req.body,schema)
    if(validate.length){
        return res.status(400).json(validate)
    }
    barang = await barang.update(req.body);
    res.json({
        status: 200,
        message: "Success update data",
        data: barang,
    });
});


// DELETE
router.delete("/:id", async (req, res, next) => {
    const id = req.params.id;
    let barang = await Barang.findByPk(id);
    if(!barang){
        return res.status(404).json({
            status:404,
            message:"Data Not Found"
        });
    }
    await barang.destroy();

    return res.json({
        status: 200,
        message: "Success delete data"
    });
  
});


module.exports = router;