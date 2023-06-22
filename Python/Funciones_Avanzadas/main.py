import re


def main():
    # Concatenate two o more operators
    number = 12
    if 0 <= number <= 100:
        print("Nice number")
    else:
        print("Bad number")

    # Easy way to create a list
    pair = [number for number in [number ** 2 for number in range(0, 11)] if number % 2 == 0]
    for i in pair:
        print(i)

    # Decorated Functions
    print("Result: {}".format(operation(plus, 1.2, 2.5)))

    # Generator Functions, return a iterator
    pair_number = [number for number in pair_number_generator(3)]
    for i in pair_number:
        print("Value: {}".format(i))

    generator = pair_number_generator(6)
    print(next(generator))

    # Iterators
    random_list = [1, 2, 3]
    iterable_list = iter(random_list)
    for i in range(len(random_list)):
        print(next(iterable_list))

    text = "Hello World!"
    iterable_text = iter(text)
    for i in range(len(text)):
        print(next(iterable_text))

    # Lambda Functions
    function = lambda num: num ** 2
    print("Pow: {}".format(function(4)))

    # Sort
    unordered_list = ["Yael", "Juan", "Oscar", "Lorena"]
    unordered_list.sort(key=lambda name: len(name))
    for i in unordered_list:
        print(i)
    unordered_list.sort(key=lambda name: ord(name[0]))
    for i in unordered_list:
        print(i)

    # Filter
    short_name = filter(lambda name: len(name) <= 4, unordered_list)
    for i in short_name:
        print(i)

    # Map, returns a iterator
    first_list = [1, 2, 3, 4, 5]
    second_list = [6, 7, 8, 9, 10]
    result_list = list(map(lambda first_number, second_number: first_number * second_number, first_list, second_list))
    for i in result_list:
        print("Result list: {}".format(i))

    # Regular Expressions
    # * Zero or more repetitions of the characters at the left side
    # + One o more repetitions
    # ? One or zero repetitions
    # {n} n repetitions
    # {n, m} n to m repetitions
    # [^] denial symbol
    # Range [A-Z], [a-z], [A-z], [0-9], [A-z0-9]
    correct_email = "yaelaram14@gmail.com"
    wrong_email = "yaelaram.com"
    pattern = "[A-z0-9]+@[A-z0-9]+.[A-z]+"
    verify_list = search(pattern, correct_email)
    verify_list_2 = search(pattern, wrong_email)
    if len(verify_list) == 0:
        print("Wrong Email")
    else:
        print("Valid Email")
    if len(verify_list_2) == 0:
        print("Wrong Email")
    else:
        print("Valid Email")


def search(pattern, text):
    return re.findall(pattern, text)


def operation(function, a=0.0, b=0.0):
    print("Executing {}".format(function.__name__))
    return function(a, b)


def plus(a=0.0, b=0.0):
    return a.__add__(b)


def pair_number_generator(limit):
    for i in range(limit + 1):
        if i % 2 == 0:
            yield i


if __name__ == '__main__':
    main()
