'use strict';

import Cloudant from '@cloudant/cloudant';
import cloudantConfig from '../config/cloudant-config.js';
//plugin:'promises'
const cloudantDB = new Cloudant({url: cloudantConfig.URL, plugins: ['promises', { iamauth: { iamApiKey:  cloudantConfig.IAM_KEY }}]});

const dbObject = {
    db: {}
};

dbObject.useDB = (dbToUse) => {
    dbObject.db = cloudantDB.db.use(dbToUse);
};

dbObject.save = async (object) => {
    return await dbObject.db.insert(object)
}

dbObject.update = async (object) => {
    const oldObject = await dbObject.db.get(object._id);
    object._rev = oldObject._rev;
    return await dbObject.db.insert(object)
}

dbObject.get = async (id) => {
    return await dbObject.db.get(id)
}

dbObject.getAll = async () => {
    return await dbObject.db.list({include_docs: true});
}

export default dbObject;