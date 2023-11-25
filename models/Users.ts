import { Model, DataTypes, Optional } from "sequelize";
import sequelize from "./index";
import { Posts } from "./Posts";
export interface UserInterface {
  id: number;
  name: string;
  email: string;
  password: string;
  isVerified: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface UserInputs extends Optional<UserInterface,  'id' | 'isVerified'> { }

export class Users extends Model<UserInterface,UserInputs> implements UserInterface {
  public id!: number;
  public name!: string;
  public email!: string;
  public password!: string;
  public isVerified!: boolean;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

Users.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isVerified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    timestamps: true,
    sequelize: sequelize,
    paranoid: true,
  }
);

Users.belongsTo(Posts);
Posts.hasMany(Users, { foreignKey: "userId" });
