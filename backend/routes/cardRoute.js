const express = require('express')
const router = express.Router()
const Card = require('../models/cardsModel')

router.get('/', async (req, res) => {
    try {
        const cards = await Card.find()
        res.json(cards)
    } catch (err) {
        res.json({ message: err })
    }
})

router.post('/', async (req, res) => {
    const card = new Card({
        title: req.body.title,
        description: req.body.description
    })

    try {
        const savedCard = await card.save()
        res.json(savedCard)
    } catch (err) {
        res.json({ message: err })
    }
})

router.get('/:cardId', async (req, res) => {
    try {
        const card = await Card.findById(req.params.cardId)
        res.json(card)
    } catch (error) {
        res.json({ message: error })
    }
})

router.delete('/:cardId', async (req, res) => {
    try {
        const card = await Card.remove({ _id: req.params.cardId })
        res.json(card)
    } catch (error) {
        res.json({ message: error })
    }
})

router.patch('/:cardId', async (req, res) => {
    try {
        const card = await Card.findByIdAndUpdate(req.params.cardId, { title: req.body.title, description: req.body.description })
        res.json(card)
    } catch (error) {
        res.json({ message: error })
    }
})

module.exports = router;