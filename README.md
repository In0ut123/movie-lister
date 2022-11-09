# Movie Lister

- Generates tsv file with random data that a movie might have
- nginx serves the file
- Vue frontend consumes that file and lists the movies
- You can sort and filter the data using several parameters

data file is included already to simplify

You can find the data generator script in data/generator.py

docker build . -t movie-lister
docker run -d -p 8080:80 movie-lister
Open localhost:8080
