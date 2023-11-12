import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "../config";

interface UserAttributes {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_no: string;
  password: string;
  confirm_password: string;
  default_user_type: number;
  access_token: string;

  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
interface UserAttributes2 {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_no: string;
  password: string;
  confirm_password: string;
  default_user_type: number;
  access_token: string;
  userType: { writer: false; editor: true };

  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface UserInput extends Optional<UserAttributes, "id"> {}
export interface UserInput2 extends Optional<UserAttributes2, "id"> {}

export interface UserOutput extends Required<UserAttributes> {}

class User extends Model<UserAttributes, UserInput> implements UserAttributes {
  public id!: number;
  public username!: string;
  public first_name!: string;
  public last_name!: string;
  public email!: string;
  public phone_no!: string;
  public password!: string;
  public confirm_password!: string;
  public default_user_type!: number;
  public access_token!: string;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      unique: true,
      primaryKey: true,
      autoIncrement: true,
    },

    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    first_name: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone_no: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    confirm_password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    default_user_type: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    access_token: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: true,
    modelName: "User",
    freezeTableName: true,
  }
);
export default User;

