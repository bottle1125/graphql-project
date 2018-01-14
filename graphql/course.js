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
const Course = mongoose.model('Course');

// 定义Course的数据类型
let CourseType = new GraphQLObjectType({
    name: 'Course',
    fields: {
        _id: {
            type: GraphQLID
        },
        name: {
            type: GraphQLString
        },
        description: {
            type: GraphQLString
        },
    }
});

export const course = {
    type: new GraphQLList(CourseType),
    args: {},
    resolve(root, params, options) {
        return Course.find({}).exec();
    }
}
