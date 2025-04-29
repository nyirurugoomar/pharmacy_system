import { connect } from 'mongoose';
import * as dotenv from 'dotenv';
import { User, UserSchema } from './auth/schemas/user.schema';
import { model } from 'mongoose';

dotenv.config();

async function checkAdmin() {
  try {
    await connect(process.env.DB_URI);
    console.log('Connected to database');
    
    const UserModel = model('User', UserSchema);
    const admin = await UserModel.findOne({ username: 'admin' });
    
    if (admin) {
      console.log('Admin user exists:', admin);
    } else {
      console.log('Admin user does not exist');
    }
  } catch (error) {
    console.error('Error:', error);
  } finally {
    process.exit();
  }
}

checkAdmin(); 