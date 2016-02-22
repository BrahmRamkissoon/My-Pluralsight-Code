import random

print("Hello, what is your favourite number?")
number = input()

print("Your favourite number is " + number)
minNumber = 1
maxNumber = 100
magicNumber = random.randint(minNumber, maxNumber)
print(magicNumber)

message = "The magic number is between {0} and {1}"
print(message.format(minNumber, maxNumber))

found = False

while not found:
    print("Guess what it is")
    guess = int(input())
    if guess == magicNumber:
        found = True
    if guess < magicNumber:
        print("Too Low")
    if guess > magicNumber:
        print("Too High")

print("You got it")   
