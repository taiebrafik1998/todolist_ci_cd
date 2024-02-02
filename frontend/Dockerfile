FROM node:20


#Echo port
RUN echo " port  is : 3000"

# repetoir app
WORKDIR /app



COPY package*.json /app/


# Install all dependencies
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
