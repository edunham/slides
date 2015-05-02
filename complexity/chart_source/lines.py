import numpy as np
import matplotlib.pyplot as plt
import math


xs = [10,20,30,40,50,60,70,80,90]


#plt.plot([1,2,3,4], [1,4,9,16], 'ro')
#plt.axis([0, 6, 0, 20])


a = 10
b = 50

linear_ys = [a * n + b for n in xs]
squared_ys = [a * n * n + b for n in xs]
nlogn_ys = [a * n * math.log(n) + b for n in xs]
logn_ys = [a * math.log(n) + b for n in xs]
exponential_ys = [a ** n + b for n in xs]


#plt.plot(xs, exponential_ys, 'r-')
plt.plot(xs, squared_ys, 'k-')
plt.plot(xs, linear_ys, 'c-')
plt.plot(xs, nlogn_ys, 'g-')
plt.plot(xs, logn_ys, 'b-')

#plt.axis
#plt.tight_layout()
plt.show()

