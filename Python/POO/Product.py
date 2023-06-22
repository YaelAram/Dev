class Product:
    _id = None
    _name = None
    _price = None

    def __init__(self, id=0, name="", price=0):
        self._id = id
        self._name = name
        self._price = price

    def get_id(self):
        return self._id

    def get_name(self):
        return self._name

    def get_price(self):
        return self._price
