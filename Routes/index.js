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
router.post('/addbooking',bookingController.addBooking );
router.post('/checkavailaiblity', bookingController.checkAvailability);
router.get('/pay/:phone_no',bookingController.paymentFetch);
router.post('/updatestatus/:id', bookingController.updatePaymentStatus);

// router.post('/newCustomer',customerController.newCustomer)
// router.post('/DnaAnalyse',DnaAnalyseController.newCustomer)
// router.post('sendmail/:reciever',sendmailControlller.send_mail)

// router.get('/specificDr/:id',SpConsultancyDrController.spDoctorsbyid)
// router.get('/SpConsultancyDr/:speciality',SpConsultancyDrController.spDoctors)
// export the router
module.exports = router; 



