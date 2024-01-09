const express = require('express');
const router = express.Router();
const UserModel = require('../Controllers/Formulaire')
router.post('/formulaire', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  try {
      // Insérer les données dans MongoDB
      const newUser = new UserModel({ firstName, lastName, email, password });
      await newUser.save();

      res.status(200).send('Données enregistrées avec succès');
  } catch (error) {
      res.status(500).send('Erreur lors de l\'enregistrement des données');
  }
});

module.exports = router;
