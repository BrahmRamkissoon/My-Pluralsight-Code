import sales

cart = sales.Cart()
order = sales.Order()
order.get_input()


while not order.quit:
    cart.process(order)
    order = sales.Order()
    order.get_input()

print(cart)
