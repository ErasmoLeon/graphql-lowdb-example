import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const SALT_WORK_FACTOR = 10;

const userSchema = new mongoose.Schema({
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
  username: {
    type: String,
    required: true,
    index: {
      unique: true,
    },
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
});

userSchema.pre('save', next => {
  const user = this;

  if (!user.isModified('password')) next();

  bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
    if (err) next(err);
    bcrypt.hash(user.password, salt, null, (bcryptError, hash) => {
      if (bcryptError) next(bcryptError);
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = (candidatePassword, cb) => {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) cb(err);
    cb(null, isMatch);
  });
};

export default mongoose.model('User', userSchema);

/**
 // fetch user and test password verification
 User.findOne({ username: 'jmar777' }, function(err, user) {
 if (err) throw err;

 // test a matching password
 user.comparePassword('Password123', function(err, isMatch) {
 if (err) throw err;
 console.log('Password123:', isMatch); // -&gt; Password123: true
 });

 // test a failing password
 user.comparePassword('123Password', function(err, isMatch) {
 if (err) throw err;
 console.log('123Password:', isMatch); // -&gt; 123Password: false
 });
 });
 * */