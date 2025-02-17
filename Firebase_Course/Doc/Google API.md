# 🚀 How to get GOOGLE_IDTOKEN via OAuth Playground?

OAuth Playground is a tool from Google that allows you to test OAuth 2.0 and get tokens (id_token, access_token).

1️⃣ Open OAuth Playground
Go to the link:
🔗 [OAuth 2.0 Playground](https://developers.google.com/oauthplayground)

2️⃣ Enable Google API
In the left sidebar, find the section "Step 1: Select & authorize APIs".
Enter in the field Google OAuth2 API v2 (or select it).
Check the box for:

<https://www.googleapis.com/auth/userinfo.email>
<https://www.googleapis.com/auth/userinfo.profile>

Click "Authorize APIs".

3️⃣ Authorization through Google
A Google login window will open.
Choose the account you want to log in with.
Grant access.

4️⃣ Get idToken
After successful authorization, you will be in "Step 2: Exchange authorization code for tokens".
Make sure Authorization code is selected → click "Exchange authorization code for tokens".
After successfully exchanging the code for tokens, id_token and access_token will appear.
Copy the id_token value.

5️⃣ Save the token in Postman
Open Postman → Environments.
Add a new variable:

GOOGLE_IDTOKEN = copied id_token

Click "Save".
Now Postman will automatically use this GOOGLE_IDTOKEN for logging in via Google OAuth! 🚀
