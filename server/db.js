// mongodb+srv://rimurutachi:<db_password>@cluster0.ceerx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        const conn = await mongoose.connect( 
            'mongodb+srv://rimurutachi:jimmarpogi2012@cluster0.ceerx.mongodb.net/admission_db?retryWrites=true&w=majority&appName=Cluster0');
        console.log(`MongoDB Connection completed!: ${conn.connection.host}`);
        } catch (error) {
            console.error(error);
            process.exit(1);
        }
    };

module.exports = connectDB;