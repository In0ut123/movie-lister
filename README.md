# Movie Lister

- data/generator.py generates a tsv file with random data that a movie might have
- a data file is included already to simplify the process
- nginx serves the data file and the VueJS frontend
- Vue frontend consumes that file and lists the movies
- You can sort and filter the data using several parameters

```
docker build . -t movie-lister
docker run -d -p 8080:80 movie-lister
```
Open localhost:8080
