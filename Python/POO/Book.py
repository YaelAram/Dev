from Product import Product


class Book(Product):
    _author = None
    _isbn = None

    def __init__(self, id=0, name="", price=0, author="", isbn="0"):
        super().__init__(id, name, price)
        self._author = author
        self._isbn = isbn

    def __str__(self):
        return self._author + " " + self._isbn + " $" + str(self.get_price())

    def get_isbn(self):
        return self._isbn
