#Hello! Today we are going to make a code about deposit
deposit = 1.2
balance = float(input("How much money do you want to be on your balance with deposit: "))

#User's balance in 1 year
new_balance = balance * deposit
print(input("Your balance in 1 year will be: " + str(new_balance) + "$"))


#User's balance in 2 years
new_new_balance = new_balance * deposit
print(input("You balance in 2 years will be: "+ str(new_new_balance) +"$" ))

