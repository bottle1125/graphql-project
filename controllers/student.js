import mongoose from 'mongoose';
const Student = mongoose.model('Student');

export const saveStudent = async (ctx, next) => {
    const opts = ctx.request.body;

    const student = new Student(opts);
    const saveStudent = await student.save();

    if(saveStudent) {
        ctx.body = {
            success: true,
            info: infos
        }
    }
    else {
        ctx.body = {
            success: false
        }
    }
}

export const fetchStudent = async (ctx, next) => {
    const student = await Student.find({});

    if(students.length) {
        ctx.body = {
            success: true,
            student: students
        }
    }
    else {
        ctx.body = {
            success: false
        }
    }
}

export const fetchStudentDetail = async (ctx, next) => {
    const students = await Student.find({}).populate({
        path: 'info',
        select: 'hobby height width'
    }).exec();

    if(students.length) {
        ctx.body = {
            success: true,
            student: students
        }
    }
    else {
        ctx.body = {
            success: false
        }
    }
}