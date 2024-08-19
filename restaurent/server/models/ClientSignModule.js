import mongoose from "mongoose";
const schema = mongoose.Schema;

const clientSignSchema = new schema ({
    _id: String,
    name: String,
    surName: String,
    email: String,
    password: String,
    confirmPassword: String

});
export const signClientModel = mongoose.model ('signedClient', clientSignSchema)
export default signClientModel;