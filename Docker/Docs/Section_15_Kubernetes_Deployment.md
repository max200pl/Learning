# Kubernetes deployment

## What is kops

- if need setup anything on your own in AWS, use kops
- kops is a tool to create, destroy, upgrade and maintain production-grade, highly available, Kubernetes clusters from the command line.

## AWS EKS (Elastic Kubernetes Service)

- EKS is a managed Kubernetes service provided by AWS.
- Use standard Kubernetes tooling to deploy and manage applications.
- Now AWS specific syntax or philosophy to require

## AWS ECS (Elastic Container Service)

- ECS is a managed container service provided by AWS.

## IAM (Identity and Access Management)

- IAM is a web service that helps you securely control access to AWS resources.

1. create a role for (EKS service) to create and manage resources
2. give EKS all the premisions it needs to create and manage resources
![alt text](image.png)

## CloudFormation

- CloudFormation is a service that helps you model and set up your Amazon Web Services resources so that you can spend less time managing those resources and more time focusing on your applications that run in AWS.

<https://docs.aws.amazon.com/eks/latest/userguide/creating-a-vpc.html#create-vpc>

1. Create a VPC
2. Provide stack name eksVpc
3.

## Install AWS CLI

<https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html>

## Create access key for AWS CLI

<https://us-east-1.console.aws.amazon.com/iam/home?nc2=h_m_sc#/security_credentials>

## Configure AWS CLI

```bash
aws configure
```

- `--name` is the name of the cluster

```bash
aws eks --region us-east-1 update-kubeconfig --name kub-dep-demo
```

```bash
kubectl get pods
```

## Adding worker nodes to the cluster

- Create a node group

1. create group name:  demo-dep-node

### Create IAM role for worker nodes

- Create a role for worker nodes
- Attach the policy to the role
- Create a node group name: eksNodeGroup

## apply Kubernetes config

```bash
kubectl apply -f auth.yaml -f users.yaml
kubectl get deployments
kubectl get pods
kubectl get services
```

## volumes in Kubernetes deployment

### AWS EFS (Elastic File System) CSI (Container Storage Interface) driver

- EFS is a scalable, elastic, cloud-native file system for Linux-based workloads for use with AWS Cloud services and on-premises resources.
- EFS CSI driver allows you to use EFS with any Kubernetes cluster.

<https://github.com/openshift/aws-efs-csi-driver>

- install CSI driver using kubectl apply

```bash
kubectl apply -k "github.com/kubernetes-sigs/aws-efs-csi-driver/deploy/kubernetes/overlays/stable/?ref=release-1.7"
```

### 253 Create Security Group

- Create a security group for EFS

### Create EFS

- Create a file system

```bash
kubectl get sc # get storage class
```

1. create a storage class

    <https://github.com/openshift/aws-efs-csi-driver/blob/master/examples/kubernetes/static_provisioning/specs/storageclass.yaml>

    ```yaml
    apiVersion: storage.k8s.io/v1
    kind: StorageClass
    metadata:
    name: efs-sc
    provisioner: efs.csi.aws.com
    ```

2. created PersistentVolume

    ```yaml
    apiVersion: v1
    kind: PersistentVolume
    metadata:
    name: efs-pv
    spec:
    capacity:
        storage: 5Gi
    volumeMode: Filesystem # Required for EFS
    accessModes:
        - ReadWriteMany # Required for EFS
    storageClassName: efs-sc # EFS Storage Class
    csi:
        driver: efs.csi.aws.com # EFS CSI Driver
        volumeHandle: fs-0c75b4c8fea6883c7 # EFS File System ID
    ```

3. create a PersistentVolumeClaim

    ```yaml
    apiVersion: v1
    kind: PersistentVolumeClaim
    metadata:
    name: efs-pvc
    spec:
    accessModes:
        - ReadWriteMany
    storageClassName: efs-sc
    resources:
        requests:
        storage: 5Gi
    ```

4. connected all for pod

   ```yaml
      containers:
        - name: users-api
             .....
          volumeMounts:
            - name: efs-vol
              mountPath: /app/users
      volumes:
        - name: efs-volumeHandle
          persistentVolumeClaim:
            claimName: efs-pvc
    ```

### Using the EFS Volume

- created containers

```bash
docker build -t maksymposkannyi/kub-dep-frontend .
docker push maksymposkannyi/kub-dep-frontend
```

- delete deployment

```bash
cd kubernetes
kubectl get deployments
kubectl delete users-deployment
kubectl apply -f users.yaml
kubectl get pods
```
