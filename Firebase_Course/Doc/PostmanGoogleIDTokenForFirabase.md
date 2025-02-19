# 🚀 How to get GOOGLE_ID_TOKEN for Firebase form Postman ?

1️⃣ Open Postman

2️⃣ Open Authorization tab

3️⃣ Select Type: OAuth 2.0

4️⃣ Click "Get New Access Token"

5️⃣ Fill in the fields:

- Token Name: Google ID Token
- Grant Type: Authorization Code
- Callback URL: <https://oauth.pstmn.io/v1/callback>
- Auth URL: <https://accounts.google.com/o/oauth2/auth>
- Access Token URL: <https://accounts.google.com/o/oauth2/token>
- Client ID: <YOUR_CLIENT_ID> (from Google Cloud Console)
- Client Secret <YOUR_CLIENT_SECRET> (from Google Cloud Console)
- Scope: openid email profile
- Client Authentication: Send as Basic Auth header

6️⃣ Click "Request Token"

7️⃣ Authorization through Google

A Google login window will open.

Choose the account you want to log in with.

Grant access.

8️⃣ Go to Current Token

- Token : <Name_of_the_token>
- Use Token Type: Access Token
- Header Prefix: Bearer

9️⃣ Send a request to Backend with the id-token
