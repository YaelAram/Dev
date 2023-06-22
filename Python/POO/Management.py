from Book import Book
from Food import Food


class Management:
    _list_book = []
    _list_food = []
    flag_book = 0
    flag_food = 1

    def __init__(self, list_book=None, list_food=None):
        for index, i in enumerate(list_book):
            if isinstance(i, Book):
                self._list_book.append(i)
            else:
                print("That's not a book, element #{}.".format(index))

        for index, i in enumerate(list_food):
            if isinstance(i, Food):
                self._list_food.append(i)
            else:
                print("That's not food, element#{}.".format(index))

    def add_element(self, element):
        if isinstance(element, Book):
            self._list_book.append(element)
        elif isinstance(element, Food):
            self._list_food.append(element)
        else:
            print("That's not a book or food.")

    def del_element(self, element):
        if isinstance(element, Book):
            for index, i in enumerate(self._list_book):
                if i.get_isbn() == element.get_isbn():
                    self._list_book.pop(index)
        elif isinstance(element, Food):
            for index, i in enumerate(self._list_food):
                if i.get_distributor() == element.get_distributor():
                    self._list_food.pop(index)
        else:
            print("That's not a book or food.")

    def show_list(self, flag):
        if flag == self.flag_book:
            for i in self._list_book:
                print(i)
        elif flag == self.flag_food:
            for i in self._list_food:
                print(i)
        else:
            print("Illegal flag.")
