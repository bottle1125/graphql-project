import {
    graphql,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLList,
    GraphQLNonNull,
    isOutputType
} from 'graphql';

import mongoose from 'mongoose';
const Info = mongoose.model('Info');

const objType = new GraphQLObjectType({
    name: 'meta',
    fields: {
        createdAt: {
            type: GraphQLString
        },
        updatedAt: {
            type: GraphQLString
        }
    }
});

// 定义Info的数据类型
export let InfoType = new GraphQLObjectType({
    name: 'Info',
    fields: {
        _id: {
            type: GraphQLID
        },
        height: {
            type: GraphQLString
        },
        weight: {
            type: GraphQLString
        },
        hobby: {
            type: new GraphQLList(GraphQLString)
        },
        meta: {
            type: objType
        }
    }
});

export const infos = {
    type: new GraphQLList(InfoType),
    args: {},
    resolve(root, params, options) {
        return Info.find({}).exec();
    }
}

export const info = {
    type: InfoType,
    // 传进来的参数
    args: {
        id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, params, options) {
        return Info.findOne({ _id: params.id }).exec();
    }
}