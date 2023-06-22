from Product import Product


class Food(Product):
    _distributor = None

    def __init__(self, id=0, name="", price=0, distributor=""):
        super().__init__(id, name, price)
        self._distributor = distributor

    def __str__(self):
        return self.get_name() + " " + self._distributor + " $" + str(self.get_price())

    def get_distributor(self):
        return self._distributor
