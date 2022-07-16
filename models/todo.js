module.exports=(sequelize,DataTypes)=>{
    const Todo=sequelize.define("Todo",{
        text:{
            type:DataTypes.STRING,
            allowedNull:false
        }
    })
    return Todo;
}
   