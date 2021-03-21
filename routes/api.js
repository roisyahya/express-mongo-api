const express = require('express')
const router = express.Router()
const Api = require('../models/Api')

// router.get('/', (req, res) => {
//     res.send('ini adalah contoh')
// })

//CREATE
router.post('/', async (req, res) => {
    const apiPost = new Api({
        nama : req.body.nama,
        alamat : req.body.alamat,
    })

    try{
        const api = await apiPost.save()
        res.json(api)
    } catch(err) {
        res.json({message:err})
    }
})

//READ
router.get('/', async (req, res) => {
    try{
        const api = await Api.find()
        res.json(api)
    } catch(err) {
        res.json({message:err})
    }
})

// UPDATE
router.put('/:apiId', async (req,res) => {
    try {
        const apiUpdate = await Api.updateOne({_id : req.params.apiId}, {
            nama : req.body.nama,
            alamat : req.body.alamat
        })
        res.json({apiUpdate})
        
    } catch(err) {
        res.json({message:err})

    }
})


//DELETE

router.delete('/:apiId', async (req,res) => {
    try {
        const apiDelete = await Api.deleteOne({_id : req.params.apiId})
        res.json({apiDelete})
        
    } catch(err) {
        res.json({message:err})

    }
})




module.exports = router