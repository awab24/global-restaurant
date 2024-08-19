import {signClientModel} from '../models/ClientSignModule.js';
import {signPublisherModel} from '../models/PublisherSignModel.js';
import multer from 'multer';
// import expressHandler from 'express-async-handler';
// import Image from './schema'


let pic;


export const insertSignUpPublisherDataFromFront = async(req, res) => {
    console.log('publisher signUpdata which will be inserted to the db'+req.body)
    await signPublisherModel.insertMany(req.body)
}
export default insertSignUpPublisherDataFromFront;

export const insertSignUpClientDataFromFront = async(req, res) => {
    console.log(req.body._id)
    await signClientModel.insertMany(req.body)
}

export const fetchSignedPublisherData = async(req, res) => {
    const signedPublisherData = await signPublisherModel.find()
    res.json(signedPublisherData)
    console.log(signedPublisherData)

}

export const logPic = ((req, res) => {
    pic = req.body
    console.log('pic file from logPic controller => => '+ pic)
})

export const checkPic = ((req, res) => {
    res.send('awab hassan')
})

// export const insertPic = async(req, res) => {
//     await signPublisherModel.findOneAndUpdate(
//         {email: req.body.email},
//         {$push: {picture: req.body}},
//        {new: true}
//       )

//       const findUser = await signPublisherModel.findOne({email: req.body.email})
// }

export const insertPic = async (req, res) => {
    try {
        console.log('Request body:', req.body);
        console.log('Request file:', req.file);

        const { email, marketName, password, confirmPassword } = req.body;
        const picture = req.file;

        if (!picture) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        const updatedUser = await signPublisherModel.findOneAndUpdate(
            { email },
            { $set: { picture: picture.filename, marketName, password, confirmPassword } },
            { new: true }
        );

        res.status(200).json({ message: 'picture uploaded successfully', user: updatedUser });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};