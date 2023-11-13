// import User from "./models/User";


const isDev = true

async function init() {
// await User.sync({ alter: isDev });

}
const dbInit = async() => {
  await init();

};

export default dbInit;
