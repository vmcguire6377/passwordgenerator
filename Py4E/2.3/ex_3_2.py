hrs = input('Enter hours:')
h = float(hrs)
r = input('Enter rate')
r = float(r)
if h <= 40:
    print(h*r)
elif h > 40:
    print(40*r + (h-40)*1.5*r)
