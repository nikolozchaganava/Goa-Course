#We have an x and we have to colculate these number's sum
x = [42, 8, 7, 1, 0, 124, 8897, 555, 3, 67, 99]

#sum of numbers is 0 yet because we didnt add up these numbers
sum_of_numbers = 0

for number in x:
    sum_of_numbers += number

#Print the results
print('Sum of numbers are:', sum_of_numbers)