const OrganizationModal = require("../../Models/Organization_Model");

const GetProfilePicture = async (req, res) => {

    const organization_id = req.body.organization_id

    const organizaion = await OrganizationModal.findById(organization_id);
    if (organizaion) {
        const { logo } = organizaion;
        return res.status(200).json(logo)
    }
    else {
        res.status(404).json({ message: "No organization found , enter valid organization" });
    }
}

module.exports = GetProfilePicture;