# Fundamentals Node Security + Authentication

1. tls last version of the ssl ![Versions encrypting ](image.png)
2. wrapping request tls encrypting ![wrapping request tls encrypting](image-1.png)
3. If need created  ssl or tls certificate

## Authentication

when need now who this user

## Authorization

checks whether that user has permission
to access a specific resource once they've been authenticated
access control

![status code](image-2.png)
404 permission
401 authenticate

## Api key

It's a string

passing as either a query parameter or as a header in http request
****
![if a lot of requests from one token](image-3.png)

goole maps
![Alt text](image-4.png)

## JSON Web token

two types JWT || Opaque tokes

![Alt text](image-5.png)

JWT encoded information
![Alt text](image-6.png)

split to three part
header -> alg (HS256) and type
payload ->
signature ->

![Alt text](image-7.png)

data that's constantly being passed around from client to the server.

## The OAUTH 2.0 authentication standard

resource owner -> user
client -> my website
resource server -> your backend in your application
Authorization server -> goole service
![Alt text](image-8.png)

1. has difference flows
![flows](image-9.png)
   Server-side (AKA web)

![Alt text](image-10.png)

## White passport

<https://www.passportjs.org/>

<https://www.passportjs.org/packages/passport-google-oauth20/>
![Alt text](image-11.png)
Provide authenticate for node
