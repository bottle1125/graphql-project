import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    name: String,
    description: String,
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

CourseSchema.pre('save', function(next) {
    if (this.isNew) {
        this.meta.createdAt = this.meta.updateAt = Date.now();
    }
    else {
        this.meta.updateAt = Date.now()
    }

    next();
});

mongoose.model('Course', CourseSchema);