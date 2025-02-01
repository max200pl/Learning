# Create SSL Certificate

## Step 1: Download OpenSSL

Download and install OpenSSL from [here](https://slproweb.com/products/Win32OpenSSL.html).

## Step 2: Generate Self-Signed SSL Certificate

Open a terminal and run the following commands:

```bash
# Generate a private key
openssl genpkey -algorithm RSA -out key.pem

# Generate a self-signed certificate
openssl req -new -x509 -key key.pem -out cert.pem -days 3650
```

This will create `key.pem` and `cert.pem` files in your current directory. The certificate will be valid for 10 years.
