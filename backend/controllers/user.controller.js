const UserModel = require('../models/user.model')

module.exports.getUsers = async (req, res) => {
    const users = await UserModel.find()
    res.status(200).json(users)
}

module.exports.setUsers = async (req, res) => {
    if (!req.body.username) {
        res.status(400).json({ message: "Merci d'ajouter un username" })
    }
    const user = await UserModel.create({
        username: req.body.username,
        sex: req.body.sex,
        email: req.body.email,
        password: req.body.password
    })
    res.status(200).json(user)
}

module.exports.editUsers = async (req, res) => {
    const user = await UserModel.findById(req.params.id)

    if (!user) {
        res.status(400).json({ message: "Ce post n'existe pas" })
    }

    const updateUser = await UserModel.findByIdAndUpdate(
        user,
        req.body,
        { new: true }
    )
    res.status(200).json(updateUser)
}

module.exports.deleteUser = async (req, res) => {
    try {
        const deletedUser = await UserModel.findByIdAndDelete(req.params.id);

        if (!deletedUser) {
            return res.status(404).json({ message: "Ce user n'existe pas" });
        }

        res.status(200).json({ message: "User supprimé", deletedUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Une erreur s'est produite lors de la suppression du user" });
    }
}
