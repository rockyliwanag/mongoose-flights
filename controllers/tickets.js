const Ticket = require('../models/ticket');

module.exports = {
    new: newTicket,
    create,
    addTicket
};

function newTicket(req, res) {
    debugger
    Ticket.find({}, function(err, tickets){
        res.render('tickets/new', {
            title: 'Add Tickets',
            tickets
        });
    });
}

function create(req, res) {
    Ticket.create(req.body, function(err, ticket) {
        res.redirect('tickets/new');
    });
}

function addTicket(req, res) {
    Flight.findById(req.params.id, function (err, flight) {
        flight.tickets.push(req.body.ticketsId);
        flight.save(function (err) {
            res.redirect(`flights/${flight._id}`);
        });
    });
}