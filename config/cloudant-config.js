const cloudantConfig = {
    URL: process.env.CLOUDANT_URL,
    IAM_KEY: process.env.IAM_KEY,
    DB_QUESTIONS: process.env.DB_QUESTIONS,
    DB_USERS: process.env.DB_USERS,
    DB_USER_Q: process.env.DB_USER_Q
}

export default cloudantConfig;