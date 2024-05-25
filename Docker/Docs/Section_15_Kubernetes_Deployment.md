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
