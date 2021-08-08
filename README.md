### Protected API with OAuth 2.0 Client Credentuals using Cognito User Pools Authorizer

1. POST with basic auth credentials (app client id and secret) to get access token.
```
POST https://apigateway.restapi.com/stage/token
```
response
```json
{
  "access_token": "jwt access token",
  "expires_in": 7200,
  "token_type": "Bearer"
}
```

2. Call protected endpoint with Bearer auth using JWT access token.
```
GET https://apigateway.restapi.com/stage/hello
```
response
```json
{
  "X-Forwarded-For": "x.x.x.x, x.x.x.x",
  "client_id": "4samh07dmn289m7g94v1itg2pr",
  "resourcePath": "/",
  "httpMethod": "GET",
  "stage": "dev"
}
```
