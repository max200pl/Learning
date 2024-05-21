# Managing data volumes

- hove stored and manage data:
    1. if containers shut down
    2. if pods removed or extended or moved between nodes

- volumes are used to store data
- persistent volumes are used to store data in a way that is independent of the pod lifecycle
- environment variables can be used to store data in a way that is independent of the pod lifecycle

## 209 Managing data volume in Docker

1. if we deleted container using volumes, the data don't lost

```yaml
services:
  stories:
    build: .
    volumes:
      - stories:/app/story
```

```bash
docker-compose up -d --build
docker-compose down
docker container prune
```

## volumes in Kubernetes

- **state** is data created by the application:
    1. Stored in DB or cloud storage
- **intermediate results** are data created by the application that can be lost:
    1. Stored in memory or temporary database tables

- Kubernetes can mount volumes into containers
    1. Volumes types / drivers:
        - local volumes
        - cloud-provider specific volumes
    2. Volume lifetime on the Pod lifetime
        - volumes survive container restarts
        - volumes are deleted when the pod is deleted

## Difference between Docker and Kubernetes volumes

- Kubernetes volumes:
    1. Supports many Difference Drivers and types
    2. volumes are not necessarily persist
    3. volumes survive Container (restarts /  removals)

- Docker volumes:
    1. Supports only local volumes
    2. volumes persist until manually deleted
    3. volumes survive Container (restarts /  removals)

```bash
docker build -t maksymposkannyi/kub-data-demo .
docker push maksymposkannyi/kub-data-demo
minikube status
kubectl apply -f service.yaml -f deployment.yaml
kubectl get deployments
minikube service story-service
```

## 214 "emptyDir" / "hostPath" / "csi" volume

- volumes really attached to the pod
- **emptyDir**  - is an empty directory that is created when the pod is assigned to a node
- **hostPath** - has a path on the node's filesystem and the pod can access it
   1. multiple pods can access the same hostPath
   2. if rune in Difference nodes, the data will be different
   3. shared already exist data
- **csi** - Container Storage Interface
    1. allows the use of storage drivers

This volume is used to store data in a way that is independent of the pod lifecycle

```yaml
spec:
    containers:
        - name: story
            image: maksymposkannyi/kub-data-demo:1
            volumeMounts:
                - mountPath: /app/story
                    name: story-volume
    volumes:
    - name: story-volume
      hostPath:
        path: /data #binde to the host path
        type: DirectoryOrCreate
```

## 217 - 218 Persistent Volumes

- **Persistent Volumes** are used to store data in a way that is independent of the pod lifecycle

- Persistent volumes will be detached from the pod when the pod is deleted

## Storage Classes

- **Storage Classes** are used to define the type of storage that will be used for the Persistent Volume

`kubectl get sc` - get storage classes

```cmd
    kubectl apply -f host-pv.yaml
    kubectl apply -f host-pvc.yaml
    kubectl apply -f deployment.yaml
    kubectl get pv # get persistent volumes
    kubectl get pvc # get persistent volume claims
    kubectl get deployments
    minikube service story-service
```
