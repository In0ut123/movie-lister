# app

data file is included already to simplify

You can find the data generator script in data/generator.py

docker build . -t movie-lister
docker run -d -p 8080:80 movie-lister
Open localhost:8080
