# home-session-oop
the index.js file contains an Object Oriented Programming Implementation.
the file contains a Parent class, bankAccount with attributes ('name' and balance'), and methods, 'details' - to display class attributes, 'withdraw' - to withdraw, and 'deposit' - to deposit. 
- A class savingsAccount with additional attribute, minBalance, inherits from bankAccount, and overrides the withdraw and deposit methods.
- Another class currentAccount with an overridden attribute minBalance set to 500 inherits methods from the savingsAccount class, has additional methods, getCredit and changeName.