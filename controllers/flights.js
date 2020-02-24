const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    create
};

function index(req, res, next) {
    Flight.find({}, function(err, flights) {
        if(err) return next(err);
        res.render(flights/index, { flights });
    });
}

function newFlight(req, res) {
    res.render('flights/new');
}

function create(req, res) {
    req.body.international = !!req.body.international;
    const flight = new Flight(req.body);
    flight.save(function(err) {
        if(err) return res.render('flights/new');
        console.log(flight);
        res.redirect('/flights');
    });
}
