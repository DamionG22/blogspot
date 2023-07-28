const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Posts extends Model {}

Posts.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

    
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        
        description: {
            type: DataTypes.STRING,
        },
    },


{
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'post',
}
);
  
  module.exports = BlogPost;
  