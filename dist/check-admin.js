"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const dotenv = require("dotenv");
const user_schema_1 = require("./auth/schemas/user.schema");
const mongoose_2 = require("mongoose");
dotenv.config();
async function checkAdmin() {
    try {
        await (0, mongoose_1.connect)(process.env.DB_URI);
        console.log('Connected to database');
        const UserModel = (0, mongoose_2.model)('User', user_schema_1.UserSchema);
        const admin = await UserModel.findOne({ username: 'admin' });
        if (admin) {
            console.log('Admin user exists:', admin);
        }
        else {
            console.log('Admin user does not exist');
        }
    }
    catch (error) {
        console.error('Error:', error);
    }
    finally {
        process.exit();
    }
}
checkAdmin();
//# sourceMappingURL=check-admin.js.map