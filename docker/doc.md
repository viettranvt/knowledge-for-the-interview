# Docker

## Command

- **Build docker**: docker build -t **< name>**:**< version>** **<docker_file_path>**
  <br> **VD**: docker build -t demo_docker:1.0.0 .
- **Run docker**: docker run -p **<public_port:internal_port>** --name **<container_name>** **<image_name||image_id>**
- **Run docker with daemon**: docker run -d -p **<public_port>**:**<internal_port>** --name **<container_name>** **<image_name||image_id>**
- **Remove image**: docker image rm -f **<image_name||image_id>**
- **View all image**: docker images
- **View history**: docker history **<image_name||image_id>**
- **View container**: docker ps
- **Stop container**: docker stop **<container_name||container_id>**
- **Remove container**: docker rm -f **<container_name||container_id>**
- **Operations in container**: docker exec -it **<container_name||container_id>** bash
- **View log**: docker logs -f **<container_name||container_id>**
- **View network**: docker network list
- **Create network**: docker network <network_name>
- **Remove network**: docker remove <network_name>

---

## Push image on docker hub

- **Create repository on docker hub**
- **Run command**: docker login
- **Run command**: docker tag **<image_name||image_id>** **<repository_name_on_docker_hub>**:**< version>**
  <br> **VD**: docker tag viettran/demo-docker:1.0.0 viettran040898/test_docker:1.0.0
- **Run command**: docker push **<repository_name_on_docker_hub>**:**< version>**
  <br> **VD**: docker push viettran040898/test_docker:1.0.0

## Go Home [click here](../README.md)
