# GKE

## 1. Create a new cluster

<https://console.cloud.google.com/kubernetes/auto/add?project=portfolio-react-5b7d3>

- connect to the cluster

```powershell
gcloud container clusters get-credentials autopilot-cluster-portfolio-react --region europe-central2 --project portfolio-react-5b7d
```

## 2. setup connection to the cluster

<https://cloud.google.com/kubernetes-engine/docs/how-to/cluster-access-for-kubectl>

### 2.1. install authentication plugin

```powershell
 gcloud components install gke-gcloud-auth-plugin
 gke-gcloud-auth-plugin --version
```

### 2.2  Update the kubectl configuration to use the plugin

```powershell
gcloud container clusters get-credentials autopilot-cluster-portfolio-react --region=europe-central2

Verify the configuration:
```powershell
kubectl get namespaces
```
