## This guide shows how to create a simple kubernetes deployment from a docker container using Microk8s.

### 1) Build your docker image from the "hello-api" application

The hello-api folder contains a nodejs api with a dockerfile. CD into the hello-api folder & build a docker image by running "docker build . -t hello-api:local"

### 2) Save your image as a compressed file ready to import into Microk8s

You can import docker images into Microk8s as .tar files.
- Use "docker save hello-api > hello-api.tar" to create the compressed file.
- Use "Microk8s ctr image import hello-api.tar" to import it.

### 3) Verify the image was imported into the Microk8s repository

"Microk8s ctr images ls | grep hello-api"

### 4) Create your kube config file

This file specifies the node setup, which containers should be created from what images, and which ports they should use. 

- "touch config.yaml"
- Paste the content from deployment.yaml in the root project directory.

### 5) Apply the kube config

"microk8s kubectl apply -f config.yaml"

### 6) Expose the deployment as a service

"microk8s kubectl expose deployment hello-api-deployment --type=NodePort --port=80 --name=hello-api-service"


