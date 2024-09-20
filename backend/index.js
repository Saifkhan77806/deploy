const express = require('express')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const cookieSession = require('cookie-session')
const app = express()
const cors = require('cors')
const User = require('./schema/UserSchema')
const cookieParser = require('cookie-parser')
const { sendmail } = require('./sendOtp')
const otpGenerator = require('otp-generator');
const bcrypt = require('bcrypt')
require('./passport')
require("./db")
const { v4: uuidv4 } = require('uuid');
let otp

app.use(cookieParser())



// initialiePassport(passport);
passport.use(new LocalStrategy({
    usernameField: 'email',  // Using 'email' instead of 'username'
    passwordField: 'password'
}, async (email, password, done) => {
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return done(null, false, { message: 'Incorrect email.' });
        }

        const isMatch = await bcrypt.compare(password,user.password)
        console.log(isMatch)
        if(isMatch){
            console.log("check")
            console.log(user)
            return done(null, {type: user, logtype: "login"})
        }else{
            return done(null, false, { message: 'login failed.' });

        }
    } catch (err) {
        console.log("err")
        return done(err);
    }
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});



app.use(cors({
    origin: 'https://frontend-psi-gray.vercel.app',  // Frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],  // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
    credentials: true // Allow credentials (cookies, auth headers, etc.)
}));


app.options('*', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'https://frontend-psi-gray.vercel.app');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.sendStatus(204); // No Content
});




app.use(cookieSession({
    name: "googleauthsession",
    keys: ["key1", "key2"],
    // saveUninitialized: false,
    expires: new Date(Date.now() + (60 * 24 * 3600000)),
    // resave: false,
    cookie: {
        secure: true,  // Set to true in production if using HTTPS
        // httpOnly: true,
        sameSite: 'None'  // Allow cross-origin requests
    }
}))

app.use(function (request, response, next) {
    if (request.session && !request.session.regenerate) {
        request.session.regenerate = (cb) => {
            cb()
        }
    }
    if (request.session && !request.session.save) {
        request.session.save = (cb) => {
            cb()
        }
    }
    next()
})

app.use(passport.initialize())
app.use(passport.session())
app.use(express.urlencoded({ extended: true })); // to parse URL-encoded bodies

app.use(express.json())

// Other middleware and routes...

app.get('/', (req, res) => {
    res.send(
        "<button><a href='/auth'>Login with google</a></button><br/><button><a href='/linkedin'>Login with linkedin</a></button> <br /> <button><a href='/logout'>Logout</a></button><button><a href='/logout'>Logout</a></button><button><a href='/auth'>Login with google</a></button><button><a href='/auth'>Login hello google</a></button>"
    )
})

app.get('/auth', passport.authenticate('google', {
    scope: ["email", "profile"]
}))

app.get('/linkedin', passport.authenticate('linkedin'));




app.get('/auth/callback', passport.authenticate("google", {
    successRedirect: "https://frontend-psi-gray.vercel.app/",
    failureRedirect: "/auth/callback/failure"
}))

app.get('/linkedin/callback', passport.authenticate('linkedin', {
    successRedirect: "https://frontend-psi-gray.vercel.app/",
    failureRedirect: "/linkedin/failure"
}))

app.get('/linkedin/success', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://frontend-psi-gray.vercel.app');
    res.setHeader('Access-Control-Allow-Credentials', '*');
    
    if (!req.user) {
        return res.redirect('/linkedin/failure');
    }
    res.status(200).send(req.user)

})

app.get('/linkedin/failure', (req, res) => {
    res.status(404).send("Error")
})



// success

app.get("/data", (req, res) => {
    // console.log("check",req.user)
    res.status(200).json({data:req.user})
})

app.get("/userid/:id", async (req, res) => {
    const { id } = req.params;

    const userData = await User.findOne({ id })

    if (userData) {
        res.status(200).json({ success: true, msg: "user found", userData })
    }
    else {
        res.status(202).json({ success: false, msg: "user not found !" })
    }
})

app.post("/update-user/:id", async (req, res) => {
    const { id } = req.params

    await User.findOneAndUpdate({ id }, req.body).then(() => {
        res.status(200).send("user updated successfully")
    }).catch((err) => {
        res.status(404).send(err)
    })

})

app.post("/send-otp", async(req,res)=>{
    const {email} = req.body;

    const user = await User.findOne({email});

    if(!user){
        res.status(200).send({msg:"invalid Email"});
    }else{
        otp = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false, lowerCaseAlphabets: false });
        console.log(`otp from mail side :- ${otp}`);
        sendmail(otp, email);
        res.status(200).send({msg: user._id})
    }
})

app.post("/verfiy-otp", async(req,res)=>{
    const {userOtp} = req.body;
    if(userOtp==otp){
          success = true;
          console.log(success);  
       res.status(200).send({success})
    }else{
        console.log("invalid otp");
        res.status(200).send({msg: "invalid otp"});
    }
})

app.get('/auth/callback/success', (req, res) => {
    if (!req.user) {
        res.redirect("/auth/callback/failure")
    }
    // console.log(req.user)
    res.status(200).send(req.user)
})

app.post('/setinfo/:id', async (req, res) => {
    const { id } = req.params
    const { firstName, lastName, password, phone, country } = req.body

    res.setHeader("Access-Control-Allow-Credentials", "*")
    res.setHeader("Access-Control-Allow-Origin", "https://frontend-psi-gray.vercel.app");

    const hashedPss = await bcrypt.hash(password, 10)


    await User.findOneAndUpdate({ id }, { firstName, lastName, password: hashedPss, phone, country }).then((e) => {
        res.status(200).json({ success: true, info: e })
    }).catch((err) => {
        console.log(err)
    })

})

app.get('/logout', (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err)
        }
        res.redirect('https://frontend-psi-gray.vercel.app/login')
    });
})

app.post("/register",async (req,res)=>{
    const {email,profile,country,firstName,lastName,phone, password} = req.body
    const ids = uuidv4();

    

    const userExist = await User.findOne({email});

    if(userExist){
        return res.status(404).send({success: false, msg: "user already exist"})
    }

    const hashedPss = await bcrypt.hash(password, 10)

   const userData =  await User({name: "manualUser",email,profile,id: ids,provider: "manual",country,firstName,lastName,phone, password: hashedPss})

   await userData.save()

   res.status(200).json({success: true, msg: "user saved successfully", logtyp: "register"})

})


app.post('/manual-login', (req, res, next) => {
    try{
        res.setHeader("Access-Control-Allow-Methods", "*")
        console.log('Request received on /manual-login');  // Debug log to see if route is hit
        passport.authenticate('local', function(err, user, info) {
            if (err) {
                console.log('Error during authentication:', err);  // Log errors
                return next(err);
            }
            if (!user) {
                console.log('invalid credentials:', info.message);  // Log failure reason
                return res.redirect('/login/failure');
            }
            req.logIn(user, function(err) {
                if (err) {
                    console.log('Error during login:', err);  // Log login error
                    return next(err);
                }
                console.log('Authentication successful');  // Log success
               return res.status(200).send({msg: "logged"})
            });
        })(req, res, next);
    }catch(err){
        console.log(err)
    }
});


app.post('/verified/:email', async (req,res)=>{
    const {email} = req.params
    await User.findOneAndUpdate({email}, {verified: true}).then(()=>{
        res.status(200).send({msg: "user verified"})
    }).catch((err)=>{
        console.log(err)
    })
});

// Login failure route
app.get('/login/failure', (req, res) => {
    res.status(401).send("Login failed");
});

app.get("/cookie",(req,res)=>{
    res.status(200).json({ regsiteration: "resgister"});
})




app.get('/auth/callback/failure', (req, res) => {
    res.send("Error")
})


app.listen(3000, () => {
    console.log("server is running")
})