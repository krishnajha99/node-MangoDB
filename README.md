---
Skill Share API
---
http://localhost:3000/
http://localhost:3000/healthz
http://localhost:3000/api/articles

To build this sample locally, you can either build using Docker, or using NPM.

- Install [Docker](https://www.docker.com/get-started)
- Install [NodeJS](https://nodejs.org/en/download/)

## Setup

- To build using Docker, in the project folder, run `docker build -t skillshare-api .`
- To build using NPM, in the project folder, run `npm install`

## Running the sample

- To run using Docker, run `docker run -it -p 3000:3000 skillshare-api`
- To run using NPM, run `npm start`

##MangoDB local setup
  sudo service docker status
  docker pull mongo:4.0.4
  sudo docker images
  sudo mkdir -p /mongodata
  docker run -d -p 27017-27019:27017-27019 -it -v mongodata:/data/db --name mongodb mongo:4.0.4
  docker images
  docker run -d -p 27017-27019:27017-27019 --name mongodb mongo:4.0.4
  docker container ls

  docker ps
  docker ps -a (last state of container) 
  docker rm --force mongodb
  docker stop mongodb
  docker ps
  docker start mongodb
  docker ps
  
  docker exec -it mongodb bash
  docker exec -it flamboyant_elion bash
  > show dbs
  > use sampledb
  > db.items.save({"name":"Pineapple","uid":4.0,"img":"/img/a.png"})
  > db.people.save({ firstname: "Maria", lastname: "Raboy" })
  > db.people.find({ firstname: "Nic" })
  
  docker run -d -p 127.0.0.1:27017:27017 -v ~/Documents/repo/mesj/cmpe282/data:/data/db --name mongodb mongo
  export MONGODB_URI=mongodb://127.0.0.1:27017/sampledb
