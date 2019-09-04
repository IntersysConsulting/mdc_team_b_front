# Dockerfile for react container

# From the base directory mdc_team_b_front/src 
# Use the follow command to create the image
# docker build  -t deployment -f deployment/Dockerfile .
# Use the follow command to start the container 
# docker run 

# stage: 1
FROM node:12.9.0 as react-build
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . ./
RUN npm run build
RUN npm install -g serve
EXPOSE $PORT
CMD serve -p $PORT -s ./build