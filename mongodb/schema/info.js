import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const InfoSchema = new Schema({
    hobby: [String],
    height: String,
    weight: Number,
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

InfoSchema.pre('save', function(next) {
    // console.log(888, InfoSchema.isNew);
    if(this.isNew) {
        this.meta.createdAt = this.meta.updateAt = Date.now();
    }
    else {
        this.meta.updateAt = Date.now();
    }

    next();
});

mongoose.model('Info', InfoSchema);