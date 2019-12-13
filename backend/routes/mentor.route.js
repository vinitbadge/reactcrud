let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// Mentor Model
let mentorSchema = require('../models/Mentor');

// CREATE Mentor
router.route('/create-mentor').post((req, res, next) => {
  mentorSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

// READ Mentors
router.route('/').get((req, res) => {
  mentorSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single Mentor
router.route('/edit-mentor/:id').get((req, res) => {
  mentorSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Mentor
router.route('/update-mentor/:id').put((req, res, next) => {
  mentorSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Mentor updated successfully !')
    }
  })
})

// Delete Mentor
router.route('/delete-mentor/:id').delete((req, res, next) => {
  mentorSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = router;