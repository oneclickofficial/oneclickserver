import Lead from "../models/lead.model.js";

export const CreateLead = async (req, res) => {
    const lead = req.body
    try {
        const createdLead = await Lead.create(lead)
        res.status(200).json({
            success: true,
            message: "form submitted successfully!"
        })
    } catch (error) {
        console.log(error);
    }
}


export const allLeads = async (req, res) => {
    try {
        const allLeads = await Lead.find({});
        res.status(200).json({
            success: true,
            data: allLeads,
            message: "all leads fetched successfully!"
        })
    } catch (error) {
        console.log(error);
    }
}