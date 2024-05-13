# Kubernetes main concepts

1. help with container Orchestration
2. help with large scaling deployments

## More problems with Manual Deployment

1. Automation managing containers in production (replacing, updating, scaling, etc.)
2. Traffic spice (load balancing) between containers
3. Split incoming traffic between different versions of the application

## Why Kubernetes?

1. Kubernetes configuration
   - declarative configuration
   - easy to read and understand
   - easy to change
   - which containers should deploy
   - hove many instances of each container

2. Kubernetes is like Docker-compose for multiple machines
   - Docker-compose is for one machine
   - Kubernetes is for multiple machines

## Architecture of Kubernetes

### Pod

- smallest unit in Kubernetes
- one or more containers
- shell around the container

### Nodes

- physical or virtual machine that runs the containers
- worker nodes and master nodes
- one or multiple pods can run on the node

### Worker Node

- Managing by the master node
- machine that runs containers
- simple machine run one pod or multiple pods
- proxy to communicate with the master node (control network traffic outside world)
- more worker nodes, more pods can run
- its just your computer or a server (CPU and memory)

Inside the worker node:

1. Pod (one or more containers)
    - have one or more containers
2. Docker need's to be installed on the worker node (container runtime)
3. Kubelet (agent)
    - communicate with the master node
    - start and stop containers
4. Proxy
    - load balancing
    - network traffic

### Master Node

- control center
- another machine that runs the Kubernetes software to manage the worker nodes (machines)
- various components to manage the worker nodes
  - API server
  - Scheduler
  - Controller manager
  - etcd

Inside the master node:

1. API server
    - communicate between master node and worker nodes (Kubelets)
2. Scheduler
    - watching for new pods
    - monitoring the new pods
3. Kube-Controller-Manager
    - monitoring the worker nodes
    - make sure the pods are running (correct number of pods)
4. Cloud-Controller-Manager
    - interact with the cloud provider

### cluster

- send commands to the master node
- master node sends the status of the containers to the cluster
- cluster sends the status of the containers to the user

### services

- A logical set of pods with a unique IP address, Pod and container independent IP address

## What need todo for Kubernetes ?

1. Create a cluster (master node and worker nodes)
2. Install Kubernetes software services on the master node
3. Create load-balancing between worker nodes
