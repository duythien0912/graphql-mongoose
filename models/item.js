import mongoose from 'mongoose';

const ItemSchema = new mongoose.Schema({
	name: {type: String},
	const: {type: Number},
	description: {type: String}
});

const Item = mongoose.model('Item', ItemSchema);

export default Item;
