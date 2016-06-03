import mongoose from 'mongoose';

const authorSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
});

export default mongoose.model('Author', authorSchema);
