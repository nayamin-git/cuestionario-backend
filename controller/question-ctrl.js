import cloudant from '../middleware/cloudant.js';
import statusCodes from '../config/status-codes.js';
import cloudantConfig from '../config/cloudant-config.js';
const questionCtrl = {};

questionCtrl.getAllQuestions = async (req, res) => {
    try {
        cloudant.useDB(cloudantConfig.DB_QUESTIONS);
        const object =  await cloudant.get('allquestions');
        res.status(statusCodes.OK).send(object);
    } catch (e) {
        console.error(e);
        res.status(statusCodes.NOT_FOUND).send({});
    }
};

questionCtrl.getAllUser = async (req, res) => {
    try {
        cloudant.useDB(cloudantConfig.DB_USERS);
        const object =  await cloudant.getAll();
        res.status(statusCodes.OK).send(object.rows);
    } catch (e) {
        console.error(e);
        res.status(statusCodes.NOT_FOUND).send({});
    }
};

questionCtrl.getUserInfo = async (req, res) => {
    try {
        const userId = req.params.userId;
        cloudant.useDB(cloudantConfig.DB_USERS);
        const object =  await cloudant.get(userId);
        res.status(statusCodes.OK).send(object);
    } catch (e) {
        console.error(e);
        res.status(statusCodes.NOT_FOUND).send({});
    }
};
questionCtrl.updateQuestions = async (req, res) => {
    
    try {
        const object = { _id: req.params.userId, questions: req.body}
        cloudant.useDB(cloudantConfig.DB_USER_Q);
        await cloudant.update(object);
        res.status(statusCodes.OK).send(object);
    } catch (e) {
        console.error(e);
        res.status(statusCodes.NOT_FOUND).send({});
    }
}

questionCtrl.getUserQuestions = async (req, res) => {
    try {
        const userId = req.params.userId;
        cloudant.useDB(cloudantConfig.DB_USER_Q);
        const object =  await cloudant.get(userId);
        res.status(statusCodes.OK).send(object);
    } catch (e) {
        console.error(e);
        res.status(statusCodes.NOT_FOUND).send({});
    }
};

export default questionCtrl;
