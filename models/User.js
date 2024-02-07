import mongoose from 'mongoose';

let User;

try {
  // Try to retrieve the existing User model
  User = mongoose.model('User');
} catch {
  // If the model doesn't exist, define it
  const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      required: true
    },
    empId: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    }
  });

  User = mongoose.model('User', userSchema);
}

export default User;