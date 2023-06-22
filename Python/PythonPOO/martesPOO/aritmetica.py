import functools


def suma(a=0, b=0):
    return a + b


def resta(*args):
    numbers = list(args)
    return functools.reduce(lambda a, b: a - b, numbers)


def multiplicacion(a=0, b=0, c=0):
    return a * b * c
