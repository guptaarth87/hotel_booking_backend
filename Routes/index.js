const express=require('express');
const router=express.Router()

const userController = require('../Controllers/Users');
const bookingController = require('../Controllers/Bookings');

// const customerController=require('../Controllers/Customers');
// const DnaAnalyseController=require('../Controllers/DnaAnalyse');
// const SpConsultancyDrController=require('../Controllers/SpConsultancyDr')
// const sendmailControlller=require('../Controllers/Sendmail')

  
router.post('/login', userController.login);
router.post('/signup', userController.signup);
router.get('/',userController.test);

router.get('/getbookings', bookingController.getBookings);
router.get('/getbookingsbypage/:page', bookingController.getBookingsByPage);
router.get('/getconfirmbookings/:page',bookingController.getConfirmBookings);
router.post('/addbooking',bookingController.addBooking );
router.post('/checkavailaiblity', bookingController.checkAvailability);
router.get('/pay/:phone_no',bookingController.paymentFetch);
router.post('/updatestatus/:id', bookingController.updatePaymentStatus);


// export the router
module.exports = router; 



