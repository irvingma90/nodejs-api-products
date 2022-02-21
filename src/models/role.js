import {Schema, model} from 'mongoose';

export const ROLES = ["user", "moderator", "admin"];

const roleSchema = new Schema ({
    name: {
        type: String
    }
},{
    timestamps: true,
    versionKey: false
})

export default model('Role', roleSchema);