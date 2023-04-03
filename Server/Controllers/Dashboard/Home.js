const OrganizationModal = require("../../Models/Organization_Model");

const Home = async (req, res, next) => {
    const { organization_id } = req.body.data;

    const organizaion = await OrganizationModal.findById(organization_id);

    if (organizaion) {
        return res.status(200).json({ organizaion })
    }
    else {
        res.status(404).json({ message: "No organization found , enter valid organization" });
    }
}

module.exports = Home;