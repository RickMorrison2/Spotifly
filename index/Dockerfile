FROM mongo:latest

RUN mongod
RUN use spotify
RUN db.artists.createIndex({id: 1})