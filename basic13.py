#print 1-255
current_number = 1

while current_number <= 255:
    print(current_number)
    current_number += 1

#print ints and sum 0-255
current_number = 0
sum = 0 
while current_number <= 255:
    print(current_number)
    current_number += 1
    sum += current_number
    print (sum)


#print max of array 
list1 = [2,4,5]
print max(list1)

#print odds 1 to 255
lower=int(1)
upper=int(255)
for i in range(lower,upper+1):
    if(i%2!=0):
        print(i)

#create a list with odd integers
Samlist = []
lower=int(1)
upper=int(255)
for i in range(lower,upper+1):
    if i % 3 == 0:        
      Samlist.append(i)
print (Samlist)

#iterate through list and print 
Brolist= ["sam", "liz","chris"]
for num, name in enumerate(Brolist, start=1):
    print("Brolist {}: {}".format(num, name))

#print average
mylist =  [1,12,2,53,23,6,17]
avg_value = sum(mylist)/len(mylist)
print avg_value

#count and print number greater than y 
lower=int(1)
upper=int(12)
count = 0
for i in range(lower,upper+1):
    if i>6:
        print i
        count +=1
        print count 


#print max,min,avg
Wowlist = [2,3,4,5,6,7] 
max_value = max(Wowlist)
min_value = min(Wowlist)
avg_value = sum(Wowlist)/len(Wowlist)
print max_value
print min_value
print avg_value

#sqarre list values
mylist = [3,4,5,6,7]
sam = [x**2 for x in mylist]
print sam 

#zero out negative values 
Thislist = [1, 2, 3, -4, -5, 56,  6]
Thislist = [0 if i < 0 else i for i in Thislist]
print Thislist

#shift values to the left
mine = [1,2,3,4,5]
mine += [mine.pop(0)]
print mine

mine.append(0)
print mine


#swap string 
Marylist = [1, 2, 3, -4, -5, 56,  6]
Marylist = ["dojo" if i < 0 else i for i in Marylist]
print Marylist








  
















