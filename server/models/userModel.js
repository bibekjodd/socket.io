const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')


const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    pic: { type: String, default: 'https://lh3.googleusercontent.com/a/ALm5wu0zu9MUwP-wUiMFBdrRwvkSnTDY0Oktt-PnwCWiEQ=s360-p-no' },
});


userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}

userSchema.pre('save', async function (next) {
    if (!this.isModified('password'))
        next();

    this.password = await bcrypt.hash(this.password, 10);
})




const User = mongoose.model('User', userSchema);
module.exports = User;