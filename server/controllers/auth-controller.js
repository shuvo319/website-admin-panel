const home = async (req, res) => {

    try {
        res.status(200).send("Successfully connected with Auth Controllers");
    } catch (error) {
        console.log("Error");
    }
}

// const registration = async (req, res) => {
//     console.log(req.body);
//     try {
//         res.status(200).send({msg:req.body});
//     } catch (error) {
//         res.status(500).send({msg:"Internal server error"});
//     }
// }

const registration = async (req, res) => {
    console.log(req.body);
    try {
        res.status(200).json({msg: req.body});
    } catch (error) {
        res.status(500).json({msg:"Internal server error"});
    }
}

module.exports = { home, registration };