import mongoose from 'mongoose';
const Info = mongoose.model('Info');

export const saveInfo = async (ctx, next) => {
    const opts = ctx.request.body;
    const info = new Info(opts);
    const saveInfo = await info.save();  // 保存数据

    if(saveInfo) {
        ctx.body = {
            success: true,
            info: saveInfo
        }
    }
    else {
        ctx.body = {
            success: false
        }
    }
}

export const deleteInfo = async (ctx, next) => {
    const id = ctx.request.body._id;
    const info = await Info.findOne({_id: id});

    if(info) {
        info.remove();
        ctx.body = {
            success: true
        }
    }
    else {
        ctx.body = '该对象不存在';
    }
}

export const fetchInfo = async (ctx, next) => {
    const infos = await Info.find({});

    if(infos.length) {
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