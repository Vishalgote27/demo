exports.protected = async (req, res, next) => {
    try {
        if (!req.headers.authorization)
            return res.status(401).json({
                message: "Please provide token"
            })
        console.log(req.headers.authorization);
        next()
    } catch (error) {

    }
}