#How old is the user:
user_age = int (input("Whats your age?: "))

print("As user said, he/she is ", user_age)

#What's user's name and lastname:
user_name = input("Whats your name?: ")

print("As you said you are ", user_name)

user_lastname = input("Whats your lastname?: ")

print("So your name is"+ user_name )

print("Your name is "+ user_name +" your lastname is "+ user_lastname + " your age is ", user_age)

#About user's father:

father_name= input("Whats your father's name?: ")
print("As user said his/her father's name is ", father_name)

father_age = int (input("Whats your father's age?: "))
print("As you said your father's age is", father_age)


#Whats user's Mom's name?
mom_name = input("Whats your mother's name?: ")

print("As user said his/her Mother's name is ", mom_name)

mom_age = int (input("Whats your mother's age?: "))
print("As user said, his/her mothere's age is", mom_age)

#Now lets question the user he/her has a pet

pet_question = input("Do you have a pet?: ")
if "no" in pet_question:
    print("Okay that's fine")
if "yes" in pet_question:
    pet_name = input("Whats your pet's name?: ")
    print("Okay so pet's name is ", pet_name)

    pet_age = int (input("What's your pet's age?: "))
    print("as user said his/her pet's age is", pet_age)



#User's age in 15 years

new_age= user_age + 15 
print ("In 15 years you will be "+ str(new_age))

#User's mom's age in 15 years

mom_new_age= mom_age + 15 
print ("In 15 years your mom will be "+ str(mom_new_age))

#User's father age in 15 years

father_new_age = father_age + 15 
print ("In 15 years your dad will be "+ str(father_new_age))


