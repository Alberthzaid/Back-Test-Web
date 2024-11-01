import { authUser } from "../Repository/User.Repo.js";



export const authenticate = async (req, res) => {
    try {
        const reqUser = req.body;
        const result = await authUser(reqUser);

        if (result.error) {
            return res.status(400).json({ message: result.error });
        }

        res.status(200).json({  result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};


