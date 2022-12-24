module.exports.login = function(req, res) {
    res.status(200).json({
        login: 'login from controller'
    })
}

module.exports.registration = function(req, res) {
    res.status(200).json({
        login: 'registration from controller'
    })
}