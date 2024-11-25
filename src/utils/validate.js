export const checkValidData = (email,password)=>{
    const errors = [];
    const isEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if(!isEmail) errors.push("email is not valid");
    if(!isPassword) errors.push("password is not valid");
    return errors.length ? errors : null;

}