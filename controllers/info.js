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
    const id = ctx.request.body.id;
    // Info.findOne({ '_id': id }, function(err, doc) {
    //     console.log(doc);
    //     if(doc) {
    //         doc.remove();
    //     }
    // })
    console.log(ctx.request.body);

    const info = await Info.findOne({'weight': ctx.request.body.weight});
    info.remove();
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