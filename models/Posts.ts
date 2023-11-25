import { Model,DataTypes } from "sequelize"
import sequelize from "./index"
export interface PostInterface
{
    id : number
    title: string
    description: string
    createdAt?: Date
    updatedAt?: Date
    deletedAt?: Date
}

export class Posts extends Model<PostInterface> implements PostInterface
{
    public id!:number
    public title!: string
    public description!: string
    public readonly createdAt!: Date
    public readonly updatedAt!: Date
    public readonly deletedAt!: Date
    
}

Posts.init({
    id:
    {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title:{
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
   timestamps: true,
   sequelize:sequelize,
   paranoid: true 
})
