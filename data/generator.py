# Script that replaces the contents of "data.tsv" with a brand new data set
# The data is not guaranteed to be fully unique (poster might repeat, etc.) although it will be rare
import csv
import random
import uuid
import requests

response = requests.get("https://www.mit.edu/~ecprice/wordlist.10000")
WORDS = response.content.splitlines()
HEADER = ["id","title", "genres", "year", "rating", "duration", "posterUrl", "mainPageUrl"]
GENRES = ["Action", "Horror", "Drama", "Western", "Comedy", "Thriller", "Romance", "Crime", "Adventure", "Fantasy"]
DATASET_NUM_ROWS = 500
FILE = "data.tsv"

with open(FILE, 'w', newline="", encoding="utf-8") as f:
   f.truncate()
   writer = csv.writer(f, delimiter="\t")
   writer.writerow(HEADER)
   for i in range(DATASET_NUM_ROWS):
      id = uuid.uuid4()
      writer.writerow([
         id,
         " ".join(random.choice(WORDS).decode("utf-8").capitalize() for _ in range(random.randint(1,3))),
         [random.choice(GENRES) for _ in range(random.randint(1,3))],
         random.randint(1900, 2050),
         random.randint(0, 10),
         random.randint(0,600),
         f"https://picsum.photos/id/{random.randint(0,200)}/200/300",
         f"https://www.youtube.com/results?search_query={id}"
      ])

