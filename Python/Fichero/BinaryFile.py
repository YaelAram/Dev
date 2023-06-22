import pickle
from Movie import Movie


def main():
    file_name = "file.pckl"
    number_list = [1, 2, 3, 4, 5]
    with open(file_name, "wb") as file:
        pickle.dump(number_list, file)

    with open(file_name, "rb") as file:
        new_list = pickle.load(file)
    for i in new_list:
        print(i)

    file_name = "movie.pckl"
    movie_name = ["Star Wars", "Lord of the Rings", "Harry Potter"]
    movie_list = []
    for i in movie_name:
        movie = Movie(i)
        movie_list.append(movie)
    with open(file_name, "wb") as file:
        pickle.dump(movie_list, file)
    with open(file_name, "rb") as file:
        movies = pickle.load(file)
    for i in movies:
        print(i)


if __name__ == '__main__':
    main()
