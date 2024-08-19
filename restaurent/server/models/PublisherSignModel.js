import mongoose from "mongoose";

const schema = mongoose.Schema;
const PublisherSignSchema = new schema(
{
    _id: String,
    marketName: String,
    picture: {
           data: Buffer,
        },
    email: String,
    password: String,
    confirmPassword: String,

    // posts: [{
  
    //     marketName: String,
    //     title: String,
    //     price: String,
    //     picture: {
    //         data: Buffer
    //     }}]

  
   

    //notifications:[]


}
);

 export const signPublisherModel = mongoose.model('signedPublisher', PublisherSignSchema);
 export default signPublisherModel;
