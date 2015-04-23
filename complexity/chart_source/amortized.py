import numpy as np
import matplotlib.pyplot as plt

points = 10
spikier = (0,0,0,0,5,0,0,0,0,5)
spikes  = (0.1,1.9,0.1,1.9,0.1,1.9,0.1,1.9,0.1,1.9)
flat    = (1,1,1,1,1,1,1,1,1,1)

opacity = 0.5
bar_width = 0.35

index = np.arange(points)

first = plt.bar(index, spikes, bar_width,
                alpha = .8, 
                color = 'b')

second = plt.bar(index + bar_width, flat, bar_width,
                alpha = opacity,
                color = 'g')
#plt.tight_layout()
plt.show()
plt.savefig('spikier.png', bbox_inches='tight')

