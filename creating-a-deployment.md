## This guide shows how to create a simple kubernetes deployment from a docker container using Microk8s.

### 1) Build your docker image from the "hello-api" application

The hello-api folder contains a nodejs api with a dockerfile. CD into the hello-api folder & build a docker image by running "docker build . -t hello-api:local"

### 2) Save your image as a compressed file ready to import into Microk8s

At this point, verify microk8s is running via "microk8s start". Linux (Debian) - you may need to add a firewall rule (or disable it temporarily via "sudo ufw disable").

You can import docker images into Microk8s as .tar files.
- Use "docker save hello-api > hello-api.tar" to create the compressed file.
- Use "Microk8s ctr image import hello-api.tar" to import it.

### 3) Verify the image was imported into the Microk8s repository

"Microk8s ctr images ls | grep hello-api"

### 4) Apply the kube deployment config

This file specifies the node setup, which containers should be created from what images, and which ports they should use. 

"microk8s kubectl apply -f deployment.yaml"

### 5) Expose the deployment as a service

"microk8s kubectl expose deployment hello-api-deployment --type=NodePort --port=80 --name=hello-api-service"

### 6) Verify the deployment
"microk8s kubectl get all" will display a status report of your running kubernetes cluster, with any deployments & services listed.

### 7) (Optional) Forward the application ports
You may need to forward ports from your container port to the application port, in this case from 80 to 3000.

"sudo microk8s kubectl port-forward deployment.apps/hello-api-deployment 80:3000"