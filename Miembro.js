
module.exports = (sequelize, Datatypes) => {
    
    
   const Miembro = sequelize.define('Miembro',{
      
        nombre:{
             type:  Datatypes.STRING(50),
            allowNull: true
        },
        edad:{
             type:  Datatypes.INTEGER,
            allowNull: true
        },
        email:{
             type:  Datatypes.STRING(200),
            allowNull: true
              
        },
        createdAt:{
            type: Datatypes.DATE
        },
        updatedAt:{
            type: Datatypes.DATE
        }
              
    },{
        underscored: true,
        tableName: 'miembros',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    })
    
   return Miembro
}