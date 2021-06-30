const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true, //스페이스 있으면 없애주는 역활
        unique: 1   //똑같은 이메일 쓰지 못하게
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: { //어떤유저가 일반 or 관리자 유저로 나누기 위해
        type: Number, 
        default: 0  //임의로 롤을지정하지 않으면 0으로 주겠다
    },
    image: String,
    token: {    //유효성 관리
        type: String
    },
    tokenExp: { //token사용기간
        type:Number
    }
})

const User = mongoose.model('User', userSchema)
module.exports = {User}