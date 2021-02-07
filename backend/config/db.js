const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conct = await mongoose.conect(process.env.MONGO_URI, {
            useNewUrlParse: true,
            useCreateIndex: true,
            userUnifiedTopoly: true
        });
        console.log(`MongoDB Connected: ${conct.connection.host}`);
    }
    catch {
        console.log(`Error ${err.message}`);
        process.exit(1);
    }
}

module.exports = connectDB;