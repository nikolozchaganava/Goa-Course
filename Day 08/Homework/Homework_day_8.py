#Hello! Today we are going to make a code!
#For every person joins on your name you will get 100$
persons_on_your_name = int(input("How many people did join in GOA on your name?: "))
gift = 100

balance = (persons_on_your_name * gift)
print("Your balance is: " + str(balance) + "$")

#How many $ would user have if they would bring 10, 15, 100-37+13/10*264:
#Let's start with the 10 first

Ten_People = 10

balance = (Ten_People * gift)
print ("If you could bring 10 people to GOA then your balance would be " + str(balance)+ "$")

#Now let's do with  15

Fifteen_People = 15

balance = Fifteen_People * gift
print("If you could bring 15 people to GOA then your balance would be " + str(balance)+ "$")

#Now do the 100-37+13/10*264 thingy

many_people = 100-37+13/10*264

balance = (many_people * gift)
print ("If you could bring 100-37+13/10*264 people to GOA then your balance would be " + str(balance)+ "$")

