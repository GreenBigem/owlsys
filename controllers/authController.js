const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { jwtSecretOrPrivateKey } = require('../config/keys')
const User = require('../models/User')

module.exports.login = async function(req, res) {
    const candidate = await User.findOne({email: req.body.email})

    if(candidate) {
        // Проверка пароля, так как пользователь существует
        const passwordResult = bcrypt.compareSync(req.body.password, candidate.password)
        if (passwordResult) {
            // Генерация токена, так как пароли совпали
            const token = jwt.sign({
                email: candidate.email,
                userId: candidate._id
            }, jwtSecretOrPrivateKey, { expiresIn: 60 * 60 * 12 })
            res.status(200).json({
                token: `Bearer ${token}`
            })
        } else {
            // Пароли не совпали
            res.status(401).json({
                message: 'Пароли не совпадают.'
            })
        }
    } else {
        // Пользователя нет, ошибка
        res.status(404).json({
            message: 'Пользователь с таким email не найден.'
        })
    }

}

module.exports.registration = async function(req, res) {
    const candidate = await User.findOne({email: req.body.email})
    if(candidate) {
        res.status(409).json('Такой пользователь уже существует в системе')
    } else {

        const salt = bcrypt.genSaltSync(10)
        const password = req.body.password
        const user = new User({
            email: req.body.email,
            password: bcrypt.hashSync(password, salt)
        })
        try {
            await user.save()
            res.status(201).json(user)
        } catch (error) {
            // Обработать ошибку
        }
        
    }
}