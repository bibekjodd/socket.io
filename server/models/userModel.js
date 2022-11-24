const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    pic: { type: String, required: true, default: 'https://lh3.googleusercontent.com/a/ALm5wu0zu9MUwP-wUiMFBdrRwvkSnTDY0Oktt-PnwCWiEQ=s360-p-no' },
})

const User = mongoose.model('User', userSchema);


module.exports = User;