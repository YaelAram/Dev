class Movie:
    _title = None

    def __init__(self, title=""):
        self._title = title

    def __str__(self):
        return self._title
