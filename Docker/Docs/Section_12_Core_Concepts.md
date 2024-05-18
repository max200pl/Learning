# Kubernetes Core Concepts

1. I'ts a not a cloud infrastructure creation tool, it's a container orchestration tool.
2. I'ts a framework form managing your deployed applications.
3. Kubernetes does't not abut machines, it's about containers
   - Setup load balancer
   - Setup filesystem
   - Setup network
4. Kubernetes will
   - Created Pods and managing
   - achieve deployed for containers

## Kubermatic

<https://www.kubermatic.com/>

- alaw's creating all the infrastructure for you
- It's not a part of Kubernetes, it's a separate tool

## Amazon Elastic Kubernetes Service (EKS)

<https://aws.amazon.com/eks/>

- Managed Kubernetes service
- AWS will create and manage the Kubernetes control plane for you

## 183 - Required Setup and Installation steps

### kubectl (Kube Control)

- send instructions to Kubernetes (muster node)
- create a new deployment or running deployment
- device for talking to Kubernetes cluster

### Minikube

- Local Kubernetes cluster
- Run Kubernetes on your local machine
- Single node Kubernetes cluster inside a VM on your local machine

#### Installation

- `cd %USERPROFILE%` - go to the user's home directory
- `mkdir .kube` - create a folder in the user's home directory

```cmd
cd %USERPROFILE%
mkdir .kube
.kube -> config // created file
```

<https://kubernetes.io/docs/tasks/tools/install-kubectl-windows/>

1. Installation [virtualbox](https://www.virtualbox.org/)
2. `winget install minikube`
3. Install virtual driver (created new virtual machine for minikube)

   ````cmd
    minikube start --driver=docker
    ```
   ````

4. `minikube status`
5. `winget install Helm.Helm` - package manager for Kubernetes
6. Add kubernetes-dashboard repository
   `helm repo add kubernetes-dashboard https://kubernetes.github.io/dashboard/`
7. `minikube dashboard`
8. `kubectl proxy` - create a proxy to access the dashboard
9. <http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/>

## 186 - kubernetes objects

- objects works with - Pods (smallest unit) - Services - Deployments - ConfigMaps - Secrets - Namespaces - PersistentVolumes - PersistentVolumeClaims - StorageClasses - StatefulSets - DaemonSets - Jobs - CronJobs

- objects created two ways - Imperative commands - Declarative configuration files

### Imperative approach

1. `minikube start --driver=docker` - start minikube
2. `docker build -t kub-first-app .` - build docker image
3. `docker tag kub-first-app maksymposkannyi/kub-first-app` - tag docker image
4. `docker push maksymposkannyi/kub-first-app` - push docker image to docker hub
5. `kubectl create deployment first-app --image=maksymposkannyi/kub-first-app` - create a deployment name first-app with image kub-first-app from docker hub
6. `kubectl get deployments` - get all deployments
7. `kubectl get pods` - get all pods
8. `kubectl delete deployment first-app` - delete deployment
9. `minikube dashboard` - open dashboard

### Exposing a deployment with a service

1. `kubectl expose deployment first-app --type=LoadBalancer --port=8080`
   - expose deployment first-app with type LoadBalancer and port 8080 (app listening on port 8080)
2. `kubectl get services` - get all services
3. `minikube service first-app` - open service in browser (open app in browser) it's only work in minikube (not work in AWS)
4. `kubectl get pods` - get all pods

## 194 - Scaling in Action

1. `kubectl scale deployment/first-app --replicas=3`
   - scale deployment first-app to 3 replicas
   - hove many instances of each container
2. `kubectl get pods` - get all pods
3. It's still work in the same port 8080 (load balancer)
4. `kubectl scale deployment/first-app --replicas=1` - scale deployment first-app to 1 replica (delete 2 pods)

## 195 - Updating a Deployment

1. `docker build -t kub-first-app .` - build docker image
2. `docker tag kub-first-app maksymposkannyi/kub-first-app` - tag docker image
3. `docker push maksymposkannyi/kub-first-app` - push docker image to docker hub
4. `kubectl get deployments` - get all deployments
5. image updated in if has different tags
6. `kubectl set image deployment/first-app kub-first-app=maksymposkannyi/kub-first-app:2`
   - update deployment first-app with image kub-first-app from docker hub
7. `kubectl rollout status deployment/first-app` - check the status of the deployment

## 196 - Rolling Back a Deployment

- if new pod has an error or something wrong
  1. kubernetes does't shot down the old pod

### Rilling back

1. `kubectl rollout undo deployment/first-app` - rolling back deployment first-app
2. `kubectl rollout status deployment/first-app` - check the status of the deployment
3. `kubectl rollout history deployment/first-app` - check the history of the deployment
4. `kubectl rollout undo deployment/first-app --to-revision=1` - rolling back deployment first-app to revision 1

## 197 - Declarative Configuration

`kubectl delete service first-app` - delete service
`kubectl delete deployment first-app` - delete deployment
`kubectl get deployments` - get all deployments
`kubectl get services` - get all services
`kubectl get pods` - get all pods

### Resources definition file

- create a file `first-app.yaml` in the root directory

- `apiVersion` - version of the Kubernetes API
- `kind` - type of object
- `metadata` - data about the object
- `metadata > labels` - labels of the object
- `spec` - specification of the object
- `containers` - list of containers
- `name` - name of the container
- `image` - image of the container

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: second-app-deployment
spec:
  replicas: 1
    selector:
        matchLabels:
            app: second-app
            tier: backend
  template:
    metadata:
      labels:
        app: second-app
        tier: backend
    spec:
        containers:
            - name: second-node
              image: maksymposkannyi/kub-first-app:2
```

1. `kubectl apply -f deployment.yaml` - apply configuration from the file
2. `kubectl get deployments` - get all deployments
3. `kubectl get pods` - get all pods

### Created a service Declarative Configuration

- create a file `service.yaml` in the root directory

- `selector` - select the pods with the labels
- `ports` - ports of the service
- `protocol` - protocol of the port
- `port: 80` - port outside the world
- `targetPort: 8080` - port inside the pod
- `type: LoadBalancer` - type of the service (LoadBalancer, NodePort, ClusterIP)

```yaml
apiVersion: v1
kind: Service
metadata:
  name: backend
spec:
    selector:
        app: second-app
    ports:
        - protocol: TCP
          port: 80
          targetPort: 8080
        # - protocol: TCP
        #   port: 81
        #   targetPort: 8080
```

1. `kubectl apply -f service.yaml` - apply configuration from the file
2. `kubectl get services` - get all services
3. `minikube service backend` - open service in browser (open app in browser) it's only work in minikube (not work in AWS)

### 201 Updating and Deleting Resources

1. update the configuration file
2. `kubectl apply -f deployment.yaml` apply the configuration file
3. `image: maksymposkannyi/kub-first-app:1` - change the image
4. `kubectl apply -f deployment.yaml` - apply the configuration file
5. `kubectl delete -f deployment.yaml` - delete the configuration file (deployment)

### 202 multiple vs single configuration file

- create a file `master-deployment.yaml` in the root directory

- separate configuration files for each object
  `---` - separate objects

1. `kubectl delete -f deployment.yaml -f services.yaml` - delete the configuration file (deployment and service)
2. `kubectl apply -f master-deployment.yaml` - apply the configuration file
3. `minikube service backend` - open service in browser (open app in browser) it's only work in minikube (not work in AWS)
