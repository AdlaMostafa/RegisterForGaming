export const AUTH_API_PATHS={
    LOGIN: 'users/login',
    SIGNUP :'users/signup',
    PROFILE:'users/profile',
    USERS:'/users',
}

export const AUTH_ACTIONS ={
    // LOGIN:'LOGIN',
    // SIGNUP:'SIGNUP',
    GETPROFILE:'GETPROFILE',
    AUTHORIZE:'AUTHORIZE',
    LOGOUT:"LOGOUT", 
    SET_LOADING :'SET_LOADING',
    SET_ERROR:'SET_ERROR'    
}

export const LOGIN_INPUTS =[
  {
          id:'username',
          label:'Your Name',
          type:'text',
        
        },
  {
          id:'number',
          label:'Your Phone Number',
          type: 'number'
        },
    { id:'email',
      label:'Your Email',
      type:"email",
      
      },{
        id:'password',
        label:'Your Password ',
        type:"password ",
        
        },
  ]
  
export const SIGNUP_INPUTS =[
        {
          id:'username',
          label:'Username',
          type:"text",
          
        },
        {
          id:'email',
          label:'Email address',
          type:"email"
          },{
            id:'password',
            label:'Password ',
            type:"password ",
            
            },{
              id:'rePassword', 
              label:'Repeate Password',
              type:"password",
             
            }
      ]
      