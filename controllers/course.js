import mongoose from 'mongoose';
const Course = mongoose.model('Course');

export const saveCourse = async (ctx, next) => {
    const opts = ctx.request.body;
    const course = new Course(opts);
    const saveCourse = await course.save();  // 保存数据

    if (saveCourse) {
        ctx.body = {
            success: true,
            info: saveCourse
        }
    }
    else {
        ctx.body = {
            success: false
        }
    }
}

export const deleteCourse = async (ctx, next) => {
    const id = ctx.request.body._id;
    const course = await Course.findOne({ _id: id });

    if (course) {
        course.remove();
        ctx.body = {
            success: true
        }
    }
    else {
        ctx.body = '该对象不存在';
    }
}

export const fetchCourse = async (ctx, next) => {
    const courses = await Course.find({});

    if (courses.length) {
        ctx.body = {
            success: true,
            course: courses
        }
    }
    else {
        ctx.body = {
            success: false
        }
    }
}