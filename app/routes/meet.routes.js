const { verifyMeet } =  require('../middleware');
const {Router} = require("express");

const router = Router();
// const { authJwt } = require("../middleware");
const controller = require('../controllers/meet.controller'); // ke controller pengajuan

// authJwt.verifyToken
router.get('/all', controller.getMeetAll);
router.get('/all-by-date/:tanggal', controller.getMeetByDate);
router.get('/process/:user_id', 
            // [
            //     verifyMeet.checkUserData
            // ],
            controller.getMeetProcessById
            );
router.get('/process-receiver/:receiver', controller.getMeetProcessByPosition);
router.get('/process-all', controller.getMeetProcess);
router.get('/process-by-staff/:receiver/:maker', controller.getMeetProcessByStaff);
router.get('/process-and-success', controller.getMeetProcessAndVerified);
router.get('/success', controller.getMeetVerified);
router.get('/success-by-receiver-by-maker/:receiver/:maker', controller.getMeetVerifiedByReceiverByMaker);
router.get('/success-id/:user_id', controller.getMeetVerifiedById);
router.get('/success-users/:participants', controller.getMeetVerifiedByUsername);
router.get('/success-position/:receiver', controller.getMeetVerifiedByPosition);
router.get('/success-id-position/:user_id/:receiver', controller.getMeetVerifiedByIdByPosition);
router.get('/success-date/:tanggal', controller.getMeetVerifiedByDate);
router.get('/success-date-id/:tanggal/:user_id', controller.getMeetVerifiedByDateById);
router.get('/success-date-receiver/:tanggal/:receiver', controller.getMeetVerifiedByDateByReceiver);
router.get('/success-date-invite/:tanggal/:participants', controller.getMeetVerifiedByDateByParticipants);
router.get('/success-date-id-receiver/:tanggal/:user_id/:receiver', controller.getMeetVerifiedByDateByIdByReceiver);
router.get('/finish', controller.getMeetFinished);
router.get('/finish-by-receiver-by-maker/:receiver/:maker', controller.getMeetFinishedByReceiverByMaker);
router.get('/finish-uid-invite/:user_id/:participants', controller.getMeetFinishedByUidByParticipants);
router.get('/finish-receiver-invite/:receiver/:participants', controller.getMeetFinishedByReceiverByParticipants);
router.get('/finish-id-receiver-invite/:user_id/:receiver/:participants', controller.getMeetFinishedByIdByReceiverByParticipants);
router.get('/reject/:user_id', controller.getMeetRejectById);
// router.get('/:id', controller.getMeet); // path URL 
router.post('/submission',
        [
            verifyMeet.checkDuplicateDate
        ],
        controller.addMeet
    );
router.put('/update-process', 
        [
            verifyMeet.checkDuplicateDate
        ],
        controller.updateMeet
    );
router.put('/update-success', 
        controller.updateMeetVerified
    );
router.put('/update-finished', controller.updateMeetFinish);
router.put('/update-reject', controller.updateMeetReject);
router.delete('/:id', controller.deleteMeet);
router.get('/count-meet-process-all', controller.countMeetProcess);
router.get('/count-meet-process-by-receiver-by-maker/:receiver/:maker', controller.countMeetProcessByReceiverByMaker);
router.get('/count-meet-process/:user_id', controller.countMeetProcessById);
router.get('/count-meet-process-receiver/:receiver', controller.countMeetProcessByReceiver);
router.get('/count-meet-success', controller.countMeetSuccess);
router.get('/count-meet-success-by-receiver-by-maker/:receiver/:maker', controller.countMeetSuccessByReceiverByMaker);
router.get('/count-meet-success-id/:user_id', controller.countMeetSuccessById);
router.get('/count-meet-success-receiver/:receiver', controller.countMeetSuccessByReceiver);
router.get('/count-meet-success-username/:participants', controller.countMeetSuccessByUsername);
router.get('/count-meet-success-id-receiver/:user_id/:receiver', controller.countMeetSuccessByIdByReceiver);
router.get('/count-meet-finish', controller.countMeetFinished);
router.get('/count-meet-finish-by-receiver-by-maker/:receiver/:maker', controller.countMeetFinishedByReceiverByMaker);
router.get('/count-meet-finish-uid/:user_id/:participants', controller.countMeetFinishedByUidByParticipants);
router.get('/count-meet-finish-receiver/:receiver/:participants', controller.countMeetFinishedByReceiverByParticipants);
router.get('/count-meet-finish-id-receiver/:user_id/:receiver/:participants', controller.countMeetFinishedByIdByReceiverByParticipants);
router.get('/count-meet-reject/:user_id', controller.countMeetRejectById);

module.exports = router;