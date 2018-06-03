import  { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID }  from "graphql";
import _ from 'lodash';
import { composeWithMongoose } from 'graphql-compose-mongoose';
import { schemaComposer } from 'graphql-compose';

import Item from '../models/item';

const customizationOptions = {}; // left it empty for simplicity, described below
const ItemTC = composeWithMongoose(Item, customizationOptions);

schemaComposer.rootQuery().addFields({
  itemById: ItemTC.getResolver('findById'),
  itemByIds: ItemTC.getResolver('findByIds'),
  itemOne: ItemTC.getResolver('findOne'),
  itemMany: ItemTC.getResolver('findMany'),
  itemCount: ItemTC.getResolver('count'),
  itemConnection: ItemTC.getResolver('connection'),
  itemPagination: ItemTC.getResolver('pagination'),
});

schemaComposer.rootMutation().addFields({
  itemCreate: ItemTC.getResolver('createOne'),
  itemUpdateById: ItemTC.getResolver('updateById'),
  itemUpdateOne: ItemTC.getResolver('updateOne'),
  itemUpdateMany: ItemTC.getResolver('updateMany'),
  itemRemoveById: ItemTC.getResolver('removeById'),
  itemRemoveOne: ItemTC.getResolver('removeOne'),
  itemRemoveMany: ItemTC.getResolver('removeMany'),
});

const graphqlSchema = schemaComposer.buildSchema();

export default graphqlSchema;
