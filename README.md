/node_modules
.env
/vscode


#### AuthController

-[]create controller folder
- [] add authController rolefile
-[]export (register login, logout) functions
-[] res.send ('some string value')
-[] setup AuthRotes file
- []import all controllers
-set Up three routes
- [] post('/register').post('/login') ge('/logout')
-[] import authRootes as authRouter in  the a.js
-[] setup app.use('/api/v1/auth',authRouter)




#### Test Routes in Postman

#### Register Controller
- [] create user
- [] send response withEntire user (only while testing)
- [] check if email already in use
- [] ignore 'role'
- [] alternative 'admin' setup
-