class Cart:

    def __init__(self):
        self._contents = dict()
        
    def __repr__(self):
        return "[0} {1}".format(Cart, self.__dict__)
    
    def process(self, order):
        if order.add:
            if not order.item in self._contents:
                self._contents[order.item] = 0
            self._contents[order.item] += 1
        elif order.delete:
            if order.item in self._contents:
                self._contents[order.item] -= 1
                if self._contents[order.item] <= 0:
                    del self._contents[order.item]
                    

class Order:

    def _init__(self):
        self.quit = False
        self.add = False
        self.delete = False
        self.item = None

    def get_input(self):
       print("[command] [item] (command is a to add, d to delete, q to quit)")
       line = input()
       command = line[:1]
       self.item = line[2:]

       if command == "a":
           self.add = "True"
       elif command == "d":
            self.delete = "True"
       elif command == "q":
           self.quit = True

def get_order():
    
    
    return command, item

def add_to_cart(item, cart):
    if not item in cart:
        cart[item] = 0
    cart[item] += 1

def delete_from_cart(item, cart):
    if item in cart:
        cart[item] -= 1


def process_order(order, cart):
    command, item = order
    
    if command == "a":
        add_to_cart(item, cart)
    elif command == "d" and item in cart:
        delete_from_cart(item, cart)
    elif command == "q":
            return False
        
    return True

car = Cart()
order = Order()
order.get_input()


while not order.quit:
    car.process(order)
    order = Order()
    order.get_input()

print(cart)
