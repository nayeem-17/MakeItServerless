# How to test this api
BASE_URL= 'https://87vm3n61gh.execute-api.us-east-2.amazonaws.com/dev'
### GET USER    

GET BASE_URL/user/get/{USER_ID}

`Demo curl example`     
```bash
curl --location --request GET 'https://87vm3n61gh.execute-api.us-east-2.amazonaws.com/dev/user/get/tJzCuoaUxAdRthKFwNaYLj'
```

### CREATE USER    

POST BASE_URL/user/create

Request-body:
```json
{
    "name":"name",
    "email":"email@unknown.com",
    "address":"nowhere"
}
```

`Demo curl example`     
```bash
curl --location --request POST 'https://87vm3n61gh.execute-api.us-east-2.amazonaws.com/dev/user/create/' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name":"name",
    "email":"email@unknown.com",
    "address":"nowhere"
}'
```
### UPDATE USER    

PUT BASE_URL/user/update/{USER_ID}

Request-body:
```json
{
    "email":"newemail@unknown.com",
    "address":"somewhere"
}
```

`Demo curl example`   
```bash
curl --location --request PUT 'https://87vm3n61gh.execute-api.us-east-2.amazonaws.com/dev/user/update/tJzCuoaUxAdRthKFwNaYLj' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email":"newemail@unknown.com",
    "address":"somewhere"
}'
```
### DELETE USER    

DELETE BASE_URL/user/delete/{USER_ID}

`Demo curl example`     
```bash
curl --location --request DELETE 'https://87vm3n61gh.execute-api.us-east-2.amazonaws.com/dev/user/delete/tJzCuoaUxAdRthKFwNaYLj'
```