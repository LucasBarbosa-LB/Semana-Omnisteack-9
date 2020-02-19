const User = require('../models/User');

module.exports = {
    //cria uma sessão.
   async store( req, res){
       const { email } = req.body;

        let user = await User.findOne({ email });
       
        if(!user){
            
         const user = await User.create({ email });

        }
       return res.json(user);
   }

};