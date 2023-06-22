from Management import Management
from Food import Food
from Book import Book


def main():
    food = [Food(12345, "Hamburger", 8.0, "BurgerKing"), Food(23456, "Coca-Cola", 2.0, "Coca-Cola")]
    book = [Book(123, "The Lord of the Rings", 4.0, "J.R.R. Tolkien", "12-13-14"), Book(456, "Steve Jobs", 6.0, "Steve Jobs", "14-15-16")]
    management = Management(book, food)
    management.add_element(Book(145, "Bill Gates", 8.0, "Bill Gates", "12-11-10"))
    management.add_element(Food(1234, "Pepsi", 1.5, "Pepsi"))
    management.show_list(management.flag_book)
    management.show_list(management.flag_food)
    management.del_element(Book(145, "Bill Gates", 8.0, "Bill Gates", "12-11-10"))
    management.del_element(Food(1234, "Pepsi", 1.5, "Pepsi"))
    management.show_list(management.flag_book)
    management.show_list(management.flag_food)


if __name__ == '__main__':
    main()

