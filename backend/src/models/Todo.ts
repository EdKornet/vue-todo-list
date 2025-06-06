import mongoose, { Document, Schema } from "mongoose";
import type {Task} from '../../../types/Task';


const TodoSchema: Schema = new Schema({
    title: { type: String, required: true },
    completed: { type: Boolean, default: false }
});

TodoSchema.set("toJSON", {
    versionKey: false,
    transform: (_doc, ret) => {
        ret.id = ret._id.toString();
        delete ret._id;
    }
});

export default mongoose.model<Task>("Todo", TodoSchema);