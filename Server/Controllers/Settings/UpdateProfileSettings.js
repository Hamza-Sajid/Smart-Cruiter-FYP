const { find } = require("../../Models/Organization_Model");
const OrganizationModal = require("../../Models/Organization_Model");

const UpdateProfileSettings = async (req, res) => {
    console.log("i am running")
    console.log(req.body.org_id)


    const { org_id } = req.body;
    const { inputValue } = req.body;
    // console.log(inputValue)
    const findOrganization = await OrganizationModal.findById(org_id);

    // if (findOrganization) {


    // }

    // else {
    //     res.status(404).json({ message: "Organization is not found" })
    // }


}

module.exports = UpdateProfileSettings;