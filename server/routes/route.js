import questionCtrl from '../controller/question-ctrl.js';
//import createVersion from '../controller/create-version.js';

const router = {};

router.route = (app) => {
    app.get('/api/v1/questions', questionCtrl.getAllQuestions);
    app.get('/api/v1/user/:userId/questions', questionCtrl.getUserQuestions);
    app.put('/api/v1/user/:userId/questions', questionCtrl.updateQuestions);
    app.get('/api/v1/user/:userId/info', questionCtrl.getUserInfo);
    app.get('/api/v1/user', questionCtrl.getAllUser);
    app.post('/api/v1/user', questionCtrl.addUser);
    //app.get('/api/v1/versions', createVersion.getVersion);
};

export default router;