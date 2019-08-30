# Dockerfile for react container

# From the base directory mdc_team_b_front/src 
# Use the follow command to create the image
# docker build  -t deployment -f deployment/Dockerfile .
# Use the follow command to start the container 
# docker run 


FROM node:12.9.0

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN npm install --silent

RUN npm install -g serve

COPY . ./

RUN npm run build

CMD serve -p 6060 -s build
