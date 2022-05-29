
const development={
    name:'development',
    asset_path:'./assets',
    session_cookie_key:'blahsomething',
    db_name:'codeial_development',
    smtp:{
        service:'gmail',
        host:'smtp.gmail.com',
        port:587,
        secure:false,
        auth:{
            user:'guptarohit23022002@gmail.com',
            pass:'8750028443'        
        }
    },
    google_client_id:"638418656592-r43auhh1ejl6hru5s5rt88jng8k5ji08.apps.googleusercontent.com",
    google_client_secret:"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",
    google_call_back_url:"http://localhost:8000/users/auth/google/callback",
    
    jwt_secret:'rohit@8055'


}

const production={
    name:'prodution'
}

module.exports=development;