class Car: 
	wheels = 4

	def __init__(self, color):
		self.color = color
	
	def setColor(self, color): 
		self.color = color
	
	def describe(self):
		print('This car is', self.color)


car1 = Car('red')
car1.describe()
car1.setColor('blue')
car1.describe()