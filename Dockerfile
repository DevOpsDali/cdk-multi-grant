FROM jsii/superchain:1-buster-slim-node16-nightly
WORKDIR /home/superchain
COPY --chown=superchain:superchain . . 
RUN sudo chmod 777 *
RUN npm install 
RUN npm run build
RUN npm run jpack