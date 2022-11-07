import express from "express";
const router = express.Router();

router.get('/', (req, res) => res.json({message: 'Allright !'}) );

router.post('/', (req, res) => {
  const { username } = req.body;
  let errors = [];

  console.log(username);

  if (!username) errors.push('Username required');

  if (errors.length > 0) res.status(400).json({errors : errors});

  res.json({message: 'Allright !'});
});

export default router;

