from io import open


def main():
    # "w" mode overrides the content of the file
    # "r" mode reads the file
    # "a" mode appends text at the end of the file
    # "a+" mode appends text at the end of the file and if the file
    # doesn't exist, it creates the file
    # with statement simplify the code, it includes the file.close() and
    # implements a try catch block
    file_name = "file_test.txt"
    text = "Hello World! \nGoodBye"
    file = open(file_name, "w")
    file.write(text)
    file.close()
    # More readable form
    with open(file_name, "w") as file:
        file.write("Hello!")

    file = open(file_name, "r")
    text_from_file = file.read()
    file.seek(0)
    lines_list = file.readlines()
    file.seek(0)
    line = file.readline()
    file.close()
    print(text_from_file)
    print(line)
    for i in lines_list:
        print(i)
    # More readable form
    with open(file_name, "r") as file:
        for i in file:
            print(i)

    file = open(file_name, "a")
    file.write("\nGoodbye")
    file.close()
    # More readable form
    with open(file_name, "a") as file:
        file.write("\nHi")

    with open(file_name, "r") as file:
        file.seek(5)
        print(file.read())
        file.seek(0)
        print(file.read(2))
        file.seek(0)
        file.seek(len(file.readline()))
        print(file.read())

    with open(file_name, "r+") as file:
        line_list = file.readlines()
        line_list[1] = "Say Hi\n"
        file.seek(0)
        file.writelines(line_list)


if __name__ == '__main__':
    main()
