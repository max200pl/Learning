# Goole Cloud deployment

## 1. Create a new project in Google Cloud

## 2. Install Google Cloud CLI

<https://cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-nodejs-service>

```powershell
(New-Object Net.WebClient).DownloadFile("https://dl.google.com/dl/cloudsdk/channels/rapid/GoogleCloudSDKInstaller.exe", "$env:Temp\GoogleCloudSDKInstaller.exe")

& $env:Temp\GoogleCloudSDKInstaller.exe
```

```powershell
gcloud --help
```

### 3. Enable access to APIs

<https://console.cloud.google.com/apis/enableflow?apiid=run.googleapis.com,secretmanager.googleapis.com&_ga=2.219610777.1294719238.1717052383-1662939952.1717052383&project=portfolio-react-5b7d3>

- Enable Artifact Registry API
- Enable Cloud Run Admin API

## 4. Added nginx to the Dockerfile

- nginx is a web server that can be used to serve static files

[nginx](https://cloud.google.com/run/docs/internet-proxy-nginx-sidecar)

### 4.1 configured secret Manager

1. Create a secret:
<https://console.cloud.google.com/security/secret-manager/secret/nginx_config/versions?project=portfolio-react-5b7d3>

2. grant the project access to the secret

<https://console.cloud.google.com/iam-admin/iam?_ga=2.205870355.1294719238.1717052383-1662939952.1717052383&project=portfolio-react-5b7d3>

3. Locate the principal service account with name: Compute Engine default service account and **click Edit principal.**

"Default compute service account"  Это автоматически создаваемый аккаунт службы, который используется для выполнения операций в рамках проекта Google Cloud.

Verify that your secret was created by running:

```powershell
gcloud secrets list
```

## 5. Build the Service GooleCloud

### 5.1 Preparing container images

1. created Dockerfile.prod
    - added nginx to the Dockerfile

    ```conf
    server {
        listen 80;
        # Server at localhost
        server_name _;
        # Enables gzip compression to make our app faster
        gzip on;

        location / {
            proxy_pass http://127.0.0.1:3000; # перенаправляет запросы на сервер разработки webpack
        }

        location /api {
            proxy_pass http://127.0.0.1:8000; # перенаправляет запросы на сервер Express
        }
    }
    ```

2. build docker image

    ```powershell
    docker build -t maksymposkannyi/portfolio-react-prod-client -f Dockerfile.prod .
    ```

3. set base url for development and production

    ```JavaScript
    const WORKS_API_BASE_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:8000/api/works' : "/api/works";
    ```

4. define region for the Google Cloud

   - Using Warsaw region (europe-central2)

    ```powershell
    gcloud config set run/region europe-central2
    ```

## 6 Fixed organization policy

<https://cloud.google.com/run/docs/authenticating/public#console-ui>
