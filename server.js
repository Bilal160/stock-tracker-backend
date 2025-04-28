const admin = require("firebase-admin");
const app = require("./app");
require("dotenv").config();

const serviceAccount = require("./services/firebase/serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
