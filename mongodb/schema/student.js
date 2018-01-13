import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const StudentSchema = new Schema({
    name: String,
    sex: String,
    age: Number,
    info: {
        type: ObjectId, // 主键
        ref: 'Info'
    },
    meta: {
        createdAt: {
            type: Date,
            default: Date.now()
        },
        updateAt: {
            type: Date,
            default: Date.now()
        }
    }
});

StudentSchema.pre('save', (next) => {
    if(this.isNew) {
        this.meta.createdAt = this.meta.updateAt = Date.now();
    }
    else {
        this.meta.updateAt = Date.now()
    }

    next();
});

mongoose.model('Student', StudentSchema);