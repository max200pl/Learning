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
2. ```winget install minikube```
3. Install virtual driver (created new virtual machine for minikube)
       ```cmd
        minikube start --driver=docker
        ```
4. ```minikube status```
5. ```winget install Helm.Helm``` - package manager for Kubernetes
6. Add kubernetes-dashboard repository
```helm repo add kubernetes-dashboard https://kubernetes.github.io/dashboard/```
7. ```minikube dashboard```
8. ```kubectl proxy``` - create a proxy to access the dashboard
9. <http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/>

## 186 - kubernetes objects

- objects works with
        - Pods (smallest unit)
        - Services
        - Deployments
        - ConfigMaps
        - Secrets
        - Namespaces
        - PersistentVolumes
        - PersistentVolumeClaims
        - StorageClasses
        - StatefulSets
        - DaemonSets
        - Jobs
        - CronJobs

- objects created two ways
      - Imperative commands
      - Declarative configuration files
