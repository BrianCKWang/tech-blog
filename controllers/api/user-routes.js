const router = require('express').Router();
const { User, Post} = require("../../models");
const withAuth = require('../../utils/auth');

// GET /api/users

router.get('/', (req, res) => {
  // Access our User model and run .findAll() method)
  // SELECT * FROM users;
  User.findAll({
    attributes: { exclude: ['password'] }
  })
  .then(dbUserData => res.json(dbUserData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// GET /api/users/1

router.get('/:id', (req, res) => {
  // SELECT * FROM users WHERE id = 1;
  User.findOne({
    attributes: { exclude: ['password'] },
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Post,
        attributes: ['id', 'title', 'post_content', 'created_at']
      },
      // include the Comment model here:
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'created_at'],
        include: {
          model: Post,
          attributes: ['title']
        }
      }
    ]
  })
  .then(dbUserData => {
    if (!dbUserData) {
      res.status(404).json({ message: 'No user found with this id' });
      return;
    }
    res.json(dbUserData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// POST /api/users

router.post('/', (req, res) => {
  // expects {username: 'Lernantino', password: 'password1234'}
  // INSERT INTO users
  //   (username, password)
  // VALUES
  //   ("Lernantino", "lernantino@gmail.com", "password1234");
  User.create({
    username: req.body.username,
    password: req.body.password
  })
  .then(dbUserData => {
    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;
  
      res.json(dbUserData);
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.post('/login', (req, res) => {
  // expects {username: 'lernantino', password: 'password1234'}
  User.findOne({
    where: {
      username: req.body.username
    }
  }).then(dbUserData => {
    if (!dbUserData) {
      res.status(400).json({ message: 'No user with that username!' });
      return;
    }

    // res.json({ user: dbUserData });

    // Verify user
    const isValidPassword = dbUserData.checkPassword(req.body.password);

    if (!isValidPassword) {
      res.status(400).json({ message: 'Incorrect password!' });
      return;
    }
    
    req.session.save(() => {
      // declare session variables
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;

      res.json({ user: dbUserData, message: 'You are now logged in!' });
    });
  }); 
})

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
  else {
    res.status(404).end();
  }
});

// PUT /api/users/1
router.put('/:id', withAuth, (req, res) => {
  // expects {username: 'Lernantino', password: 'password1234'}
  // if req.body has exact key/value pairs to match the model, you can just use `req.body` instead

  // UPDATE users
  // SET username = "Lernantino", password = "newPassword1234"
  // WHERE id = 1;
  User.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id
    }
  })
  .then(dbUserData => {
    if (!dbUserData[0]) {
      res.status(404).json({ message: 'No user found with this id' });
      return;
    }
    res.json(dbUserData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// DELETE /api/users/1
router.delete('/:id', withAuth, (req, res) => {
  // DELETE users WHERE id = req.params.id
  User.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;