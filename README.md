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

##MangoDB local setup <br />
  sudo service docker status <br />
  docker pull mongo:4.0.4 <br />
  sudo docker images <br />
  sudo mkdir -p /mongodata <br />
  docker run -d -p 27017-27019:27017-27019 -it -v mongodata:/data/db --name mongodb mongo:4.0.4 <br />
  docker images <br />
  docker run -d -p 27017-27019:27017-27019 --name mongodb mongo:4.0.4 <br />
  docker container ls <br />

  docker ps <br />
  docker ps -a (last state of container)  <br />
  docker rm --force mongodb <br />
  docker stop mongodb <br />
  docker ps <br />
  docker start mongodb <br />
  docker ps <br />
  
  docker exec -it mongodb bash <br />
  docker exec -it flamboyant_elion bash <br />
  > show dbs <br />
  > use sampledb <br />
  > db.items.save({"name":"Pineapple","uid":4.0,"img":"/img/a.png"}) <br />
  > db.people.save({ firstname: "Maria", lastname: "Raboy" }) <br />
  > db.people.find({ firstname: "Nic" }) <br />
  
  docker run -d -p 127.0.0.1:27017:27017 -v ~/Documents/repo/mesj/cmpe282/data:/data/db --name mongodb mongo <br />
  export MONGODB_URI=mongodb://127.0.0.1:27017/sampledb
