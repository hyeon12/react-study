const express = require("express");
const app = express();
const port = 5000;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { User } = require("./models/User");

app.use(bodyParser.urlencoded({ extended: true }));
//application/x-www-form-urlencoded 이렇게 된 데이터를 분석해서 가져올수 있게
app.use(bodyParser.json());
//application/json 타입으로 된것을 분석해서 가져오게 할수 있게

mongoose
  .connect(
    "mongodb+srv://sohyeon:sohyeon3010@study.juyov.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("시작하고 있다네");
});

app.post("/register", (req, res) => {
  //회원가입을 위한 라우트
  //회원가입할때 필요한 정보들을 client에서 가져오면
  //그것들을 데이터 베이스에 넣어준다.
  const user = new User(req.body);

  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
