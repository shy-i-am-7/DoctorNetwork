FROM node:18.19.1

WORKDIR /frontend

COPY . .

RUN npm install

RUN npm install bootstrap@5.3.3 reactstrap@9.2.2 --legacy-peer-deps

RUN npm install axios@1.7.2

RUN npm install react-router-dom@6.25.1

EXPOSE 3000

CMD ["npm", "start"]