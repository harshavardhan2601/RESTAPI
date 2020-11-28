const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
var Employee = require('../models/employee');


// Defined store route
router.post('/add',  function (req, res, next) {
    try {
      var reqs = req.body;
      console.log(reqs);
      var newemployee = {
        typeofemployee: reqs.typeofemployee,
        ename: reqs.ename,
        email: reqs.email,
        ecellno: reqs.ecellno,
        epassword: reqs.epassword,
      }
        mongoose.model('employee').create(newemployee, function (err, dataObj) {
          if (err) {
            console.log(err);
          } else {
            if (dataObj) {
              console.log(dataObj)
                res.status(200).json({'employee': 'employee in added successfully'});
            }
          }
        });
    }
    catch (e) {
      console.log(e);
    }
  });


// // Defined get data(index or listing) route
router.get('/', function (req, res, next) {
    try {
      mongoose.model('employee').find({}, function (err, employObj) {
        if (err) {
          console.log(err);
        } else {
          if (employObj) {
            res.json(employObj);
          }
        }
      });
    } catch (e) {
      console.log();
    }
  });


// Defined edit route
router.get('/edit/:dataId',  function (req, res, next) {
  dataId = req.params.dataId;
  console.log(dataId)
  mongoose.model('employee').findById({ "_id": dataId }, function (err, employObj) {
    if (err) {
      console.log(err);
    } else {
      if (employObj) {
        res.json(employObj);
      } 
    }
  });
});

//  Defined update route
router.post('/update/:dataId',  function (req, res, next) {
  dataId = req.params.dataId;
  console.log(dataId)
  var reqs = req.body;
  mongoose.model('employee').findOneAndUpdate({ _id:req.params.dataId }, {
    $set: {
      typeofemployee: reqs.typeofemployee,
      ename: reqs.ename,
      email: reqs.email,
      ecellno: reqs.ecellno,
      epassword: reqs.epassword,
    }
  }, function(err, updateEmpObj) {
    if (err) {
      console.log(err);
    } else {
      if (updateEmpObj) {
        console.log(updateEmpObj);
        res.json('Update complete');
      } 
    }
  });
});

// Defined delete | remove | destroy route
router.get('/delete/:id', function(req, res) {
  try {
    var dataId = req.params.id;
    console.log(dataId);
    mongoose.model('employee').remove({ _id: dataId }, (err, dataObj) => {
      if (err) {
        console.log(err);
      } else {
        res.json('deleted');
      }
    });
  }
  catch (e) {
    console.log();
  }
});




  module.exports = router;