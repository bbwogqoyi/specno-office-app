import mongoose from 'mongoose';

const staffMember = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  avatar: { type: String, required: true },
})

const officeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  colour: { type: String, required: true },
  capacity: {
    type: Number,
    required: true,
    validate: (value) => {
      return value >= 1
    }
  },
  members: [staffMember]
})

export default mongoose.model('Office', officeSchema)