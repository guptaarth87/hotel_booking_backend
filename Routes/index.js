const express=require('express');
const router=express.Router()

const userController = require('../Controllers/Users');
const bookingController = require('../Controllers/Bookings');


  
router.post('/login', userController.login);
router.post('/signup', userController.signup);
router.get('/',userController.test);

router.get('/getbookings', bookingController.getBookings);
router.get('/getbookingsbypage/:page', bookingController.getBookingsByPage);
router.get('/getconfirmbookings/:page',bookingController.getConfirmBookings);
router.post('/addbooking',bookingController.addBooking );
router.delete('/deletebooking/:id',bookingController.deleteBooking);
router.post('/checkavailaiblity', bookingController.checkAvailability);
router.get('/pay/:phone_no',bookingController.paymentFetch);
router.post('/updatestatus/:id', bookingController.updatePaymentStatus);


// export the router
module.exports = router; 



