module.exports.getAllContractors = function(req, res) {
    res.status(200).json({
        message: 'getAllContractors'
    })
}

module.exports.createContractor = function(req, res) {
    res.status(200).json({
        message: 'createContractor'
    })
}

module.exports.getContractorById = function(req, res) {
    res.status(200).json({
        message: 'getContractorById'
    })
}

module.exports.patchContractorById = function(req, res) {
    res.status(200).json({
        message: 'patchContractorById'
    })
}

module.exports.deleteContractorById = function(req, res) {
    res.status(200).json({
        message: 'deleteContractorById'
    })
}