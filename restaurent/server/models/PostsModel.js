import mongoose, { mongo } from "mongoose";

const schema = mongoose.schema()
const postsSchema = new schema({
    _id: String,
    publisherName: String,
    title: String,
    price: String,
    picture: {
        data: Buffer
    },

})

export const postsModel = mongoose.model('post', postsSchema);
export default postsModel;