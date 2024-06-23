# Testing locally services in GKE

## 1. Install kubectl

- `kubectl` is a command-line tool that allows to run commands against Kubernetes clusters.

<https://kubernetes.io/docs/tasks/tools/install-kubectl-windows/>

## 2. Install Minikube

- Minikube is a tool that makes it easy to run Kubernetes locally.

<https://minikube.sigs.k8s.io/docs/start/?arch=%2Fwindows%2Fx86-64%2Fstable%2F.exe+download>

### 2.1 Start Minikube

```powershell
minikube start --driver=docker # start minikube with docker driver run cluster in docker container
minikube status # check the status of minikube
```

### 3 delete all resources

```powershell
kubectl delete deployments --all
kubectl delete services --all
kubectl delete pods --all
```

### 4 Deploy to a cluster

- Deploy a simple web server to the cluster.

- `kubectl` - command-line tool for interacting with Kubernetes clusters.
- `kubectl create deployment` - create a deployment.

```powershell
kubectl create deployment portfolio-react --image=maksymposkannyi/portfolio-react-prod-server
```

### 5 Exploring the local cluster

- `kubectl get pods` - list the pods.
- `kubectl get deployments` - list the deployments.
- `kubectl get services` - list the services.
- `minikube dashboard` - open the Kubernetes dashboard.

### 6 Creating a service

- `service` - a way to expose an application running in a set of pods as a network service.

- `kubectl expose deployment` - create a service.
- `--type=LoadBalancer` - expose the service outside of the cluster.
- `--port=8080` - port to expose.

```powershell
kubectl expose deployment portfolio-react --type=LoadBalancer --port=8080
kubectl get services
```

### 6.1 Set external IP

- external - IP it alloway's has pending status for a local cluster.

- `minikube service` - mapping a special port to the service.

```powershell
minikube service portfolio-react
```

### 7 Updating a deployment

- `kubectl set image` - update the image of the deployment.
- `deployment/portfolio-react` - deployment name.
- `portfolio-react=maksymposkannyi/portfolio-react-prod-server:latest` - new image.

- Need set teg latest for the image.

```powershell
kubectl set image deployment/portfolio-react portfolio-react-prod-server=maksymposkannyi/portfolio-react-prod-server:latest
```

### 7.1 Rollout status

- `kubectl rollout status` - check the status of the rollout.

```powershell
kubectl rollout status deployment/portfolio-react
```

### 9 USING declarative approach

### 9.1 Create a configuration file

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: portfolio-react #name of the deployment
spec: #configurer the deployment
  replicas: 1 #hove many pods
  template:
    metadata:
      labels:
        app: portfolio-react
    spec:
      containers: #specify the containers
        - name: prod-server
          image: maksymposkannyi/portfolio-react-prod-server:latest
          ports:
            - containerPort: 8000
```

### 9.2 Apply the configuration

- `kubectl apply` - apply a configuration to a resource by filename

```powershell
kubectl apply -f deployment.yaml
kubectl get deployments
```

### 9.3 Create a service Declarative approach

```yaml
apiVersion: v1
kind: Service
metadata:
  name: backend
spec:
  selector:
    app: portfolio-react #label of the pod
  ports:
    - protocol: TCP
      port: 80 #port of the service
      targetPort: 8000 #port of the pod
    type: LoadBalancer #expose the service to the internet
```

### 9.4 Apply the configuration

```powershell
kubectl apply -f service.yaml
kubectl get services
```

### 9.5 Expose backend service

```powershell
minikube service backend
```

### 9.5 Update the deployment

- `kubectl apply` - apply a configuration to a resource by filename

```powershell
kubectl apply -f deployment.yaml
```

### 9.6 Delete the deployment

- `kubectl delete` - delete a resource by filename (deployment.yaml).

```powershell
kubectl delete -f deployment.yaml -f service.yaml
```

### 9.7 Selectors && Labels

- `label` - a key/value pair that is attached to a resource.
- `selector` - a way to select a set of pods.

- set selector for the service for controlled by deployment.

```yaml
spec: #configurer the deployment
  replicas: 1 #hove many pods
  selector: #select the pods to manage by the deployment controller
    matchLabels: #match the labels
      app: portfolio-react #label
```

```yaml #deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: portfolio-react #name of the deployment
  labels:
    group: backend #label
```

```yaml #service.yaml
apiVersion: v1
kind: Service
metadata:
  name: backend
  labels:
    group: backend
```

#### 9.7.1 Apply new labels

```powershell
kubectl delete -f deployment.yaml -f service.yaml
kubectl apply -f deployment.yaml -f service.yaml
kubectl get deployments
kubectl get services
```

#### 9.7.2 Delete by label group

```powershell
kubectl delete deployment,services -l group=backend
```

### 9.8  Liveness Probes key

- `livenessProbe` - a way to check if the application is running correctly.

```yaml #deployment.yaml
    spec:
      containers: #specify the containers
        - name: prod-server
          image: maksymposkannyi/portfolio-react-prod-server:latest
          ports:
            - containerPort: 8000
          livenessProbe: # check the health of the pod
            httpGet:
              path: /api/works
              port: 8000
            initialDelaySeconds: 3 #delay before the probe starts
            periodSeconds: 3 #how often to perform the probe
            timeoutSeconds: 1 #when the probe times out
            successThreshold: 1 #how many times the probe must be successful
            failureThreshold: 3 #how many times the probe must fail
```

### 9.8.1 apply the configuration

```powershell
kubectl apply -f deployment.yaml -f service.yaml
minikube service backend
```

## 3 Creating Networking

### 3.1 Define a container port

- `containerPort` - port that the container listens on.

Set the cluster IP for the service.

```powershell
kubectl get services
```

- `10.99.104.252` - local cluster IP.

### 3.2 automatically generate a IP Service

1. It's a name of the service - `backend`.
   `http://${process.env.BACKEND_SERVICE_SERVICE_HOST}:${process.env.REACT_APP_SERVER_PORT}`
2. Core dns -  automatically create domain names for services .
    `http://${}`
