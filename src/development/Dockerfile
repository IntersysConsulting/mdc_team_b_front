# Dockerfile for react container
# This image does not include the project directory
# you should use -v ./src:dst/ options in docker run
# to mount your directory.

# From the base directory mdc_team_b_front/src 
# Use the follow command to create the image
# docker build  -t development -f development/Dockerfile .
# Use the follow command to start the container 
# docker run -d -v e-commerce:/e-commerce --name react-dev -p 3000:3000  development


FROM node:12.9.0

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn

COPY . ./

RUN yarn build

EXPOSE 3000:3000

CMD  npm start
