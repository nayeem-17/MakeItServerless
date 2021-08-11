const TABLE_NAME = 'new-user-data'
const AWS = require('aws-sdk')
const short = require('short-uuid');

const dynamoDb = new AWS.DynamoDB.DocumentClient();
module.exports.getUser = async (req, res) => {
    const params = {
        TableName: TABLE_NAME,
        Key: {
            userId: req.params.id,
        },
    }
    dynamoDb.get(params, (error, result) => {
        if (error) {
            return res
                .status(400).
                json({
                    message: 'Error occurred while getting user',
                    error: error
                })
        }
        if (result.Item) {
            res.json({ user: result.Item });
        } else {
            res.status(404).json({ error: "User does not exist!" });
        }
    });
}
module.exports.createUser = async (req, res) => {
    const { name, email, address } = req.body;
    if (!name || !email || !address) {
        return res.status(400).json({ error: 'Please provide all the fields' });
    }
    const userId = short.generate();

    const params = {
        TableName: TABLE_NAME,
        Item: {
            userId,
            name,
            email,
            address,
        },
    }
    dynamoDb.put(params, (error) => {
        if (error) {
            res.status(400).json({ error: 'Could not create user' });
        }
        res.json({ "success": "User created successfully", userId });
    });

}
module.exports.updateUser = async (req, res) => {
    const { email, address } = req.body;
    if (!email || !address) {
        return res.status(400).json({ error: 'Please provide all the fields' });
    }
    const params = {
        TableName: TABLE_NAME,
        Key: {
            userId: req.params.id,
        },
        UpdateExpression: "set address=:a, email=:e",
        ExpressionAttributeValues: {
            ":e": email,
            ":a": address
        },
        ReturnValues: "UPDATED_NEW"
    }
    dynamoDb.update(params, (error) => {
        if (error) {
            console.log(error);
            return res.status(400).json({ error: 'Could not update user' });
        }
        return res.json({ "success": "User updated successfully" });
    });
}
module.exports.deleteUser = async (req, res) => {
    const params = {
        TableName: TABLE_NAME,
        Key: {
            userId: req.params.id,
        }
    }
    dynamoDb.delete(params, (error) => {
        if (error) {
            console.log(error);
            return res.status(400).json({ error: 'Could not delete user' });
        }
        return res.json({ "success": "User deleted successfully" });
    });
}