const Flight = require('../models/flight');
const Ticket = require('../models/ticket')


module.exports = {
    index,
    show,
    new: newFlight,
    create,

    // delete: deleteFlight
};

function index(req, res, next) {
    Flight.find({}, function(err, flights) {
        if(err) return next(err);
        res.render('flights/index', { flights });
    }).sort({departs:'ascending'});
}

function show(req, res) {
    debugger
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.find({flight: flight._id}, function(err, tickets){
            res.render('flights/show', {
                title: 'Flight Detail',
                flight: flight,
                tickets: tickets
        });
        });
    });
}

function newFlight(req, res) {
    // var newFlight = new Flight();
    // var dt = newFlight.departs;
    // var destDate = `${dt.getFullYear()}-${dt.getMonth() + 1}-${dt.getDate()}T${dt.getHours().toString().padStart(2, '0')}:${dt.getMinutes().toString().padStart(2, '0')}`;
    res.render('flights/new', {
        title: 'Add Flight'
    } /*, {destDate}*/ );
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



// function deleteFlight(req, res){
//     Flight.deleteOne(req.params.id),
//     res.redirect('/flights');
// }
