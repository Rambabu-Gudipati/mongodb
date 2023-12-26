// import User from "./models/User";
import Users from "./models/users";
import UserProfile from "./models/userProfile";
import metaData from "./models/metaData";
import Jobs from "./models/jobs";
import CbrScore from "./models/cbrscore";

const isDev = true


const dbInit = async() => {
  
  await Users.syncIndexes()
  await UserProfile.syncIndexes()
  await metaData.syncIndexes()
  await Jobs.syncIndexes()
  await CbrScore.init()

};

export default dbInit;
