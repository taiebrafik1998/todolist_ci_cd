FROM node:20


#Echo port
RUN echo " port BACKEND is : 5001"

# repetoir app
WORKDIR /app


#COPY . .
COPY package*.json /app/


# Install all dependencies
RUN npm install

COPY . .

EXPOSE 5001

CMD ["npm", "start"]
