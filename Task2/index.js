const app = require("./app/server");
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`we are at localhost:${port}`));
