FROM mongo:latest

COPY data.csv ./data.csv
CMD mongoimport --host database -d spotify -c artists --type csv --headerline /data.csv && mongo --host database spotify --eval "db.artists.createIndex({id: 1});"