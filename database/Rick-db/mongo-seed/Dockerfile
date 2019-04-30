FROM mongo:latest

COPY data.csv ./data.csv
CMD mongoimport --host mongo --port 27017 --db spotify --collection artists --type csv --headerline --file data.csv