import pandas as pd


class MiDataFrame(pd.DataFrame):
    def __init__(self, args):
        super().__init__(args)
        print(args)

    def prom_columnas(self):
        return self.mean()

    def obtener_maximo(self):
        return self.max()
