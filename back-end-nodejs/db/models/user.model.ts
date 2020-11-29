import mongoose from 'mongoose';
import collections from '../collections';
import { User } from '../interface/user.interface';

const schema = new mongoose.Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String
    },
    emailId: {
      type: String,
      unique: true
    }
  },
);

schema.set('toJSON', { virtuals: true });

export = mongoose.model<User>(collections.users, schema);