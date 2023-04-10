
module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization; //same for firebase and old jwt
  const idToken = req.headers.authorization.split('Bearer ')[1];
  if (!idToken) {
    return res.status(401).
    json({ message: 'Authorization header not found' });
  }
  console.log(idToken);
  try {
    console.log('calling firebase auth');
    const decodedToken = await req.app.locals.admin.auth().verifyIdToken(idToken);
   // const decodedToken = await req.app.locals.admin.auth().verifyIdToken(idToken);
    console.log(decodedToken);
    // The JWT is valid
    // You can access the user's UID, email, etc. from decodedToken
    const uid = decodedToken.uid;
    // const email = decodedToken.email;
    // Do something with the user's data
    req.user  = uid;
    next();
  } catch (error) {
    // The JWT is invalid
    console.log(error);
    res.status(401).send('Unauthorized');
  }
};
