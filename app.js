var express = require('express')
const bodyparser = require('body-parser');
var app = express()

app.use(bodyparser.json())
function verifemail(mail) {
    p = mail.split("@");
    var r1 = /\w+([\.-]?\w+)*/;
    var r2 = /\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if ((r1.test(p[0])) && (r2.test(p[1])))
        return 'email est correct'
    else return 'email est incorrect'

}
function verifpwd1(pwd) {
    var r1 = /[a-z]/
    var r2 = /[A-Z]/
    var r3 = /[0-9]/
    var score = 0;

    if (r1.test(pwd)) {
        score++;
    }
    if (r2.test(pwd)) {
            score++
        }
 if (r3.test(pwd)) {
            score++
        }
    if (pwd.length < 8)
            return "password invalid"

    else if (score == 1)
            return "password is weak"
    else if (score == 2)
            return "password is meduim"
    else if (score == 3)
            return "password is strong"

    }
    app.post('/', (req, res) => {

        console.log(req.body.email);
        console.log(req.body.password);
        res.send({
            mail: req.body.email,
            pwd: req.body.password,
            verifmail: verifemail(req.body.email),
            verifpwd: verifpwd1(req.body.password)
        })
    })

    // app.get('/',(req, res)=> {
    //     console.log(req.body)
    //     res.send({message:'thanks for contacting us'})
    //   })

    app.listen(3000)