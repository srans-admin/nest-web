## Deployment through Docker for Nest Server App on AWS EC2 Instance
## Author : Ram
## DevOps: Krishna

##--no-cache 
cd /home/ec2-user/srans/nest-web
git checkout -f $1
git pull 
docker build -f /home/ec2-user/srans/nest-web/Dockerfile -t nest-web .
docker stop nest-web-container
docker rm nest-web-container
docker run -p 80:80 -d -it --name nest-web-container nest-web

## Validation to verify whether docker container loaded successfully
docker ps -a

docker logs nest-web-container --tail 100
