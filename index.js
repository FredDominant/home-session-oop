// Creating a Parent class, bankAccount
class bankAccount {
	constructor (name,balance) {
		this.name = name;
		this.balance = balance;

		// This method displays Name and Balance attributes
		this.details = function() {
			console.log(this.name + ' has a balance of ' + this.balance);
		}
		// withdraw method has no implementation, just for inheritance
		this.withdraw = function() {

		}
		// deposit method has no implementation, just for inheritance.
		this.deposit = function() {

		}
	}
}

// Creating a avingsAccount class that inherits from Parent class, bankAccount.
class savingsAccount extends bankAccount {
	constructor (name,balance,minBalance) {
		super(name,balance);
		this.name = name;
		this.balance = 0;
		this.minBalance = 0;
		this.withdraw = function(amount) {
			if (isNaN(amount) === false) {
				if ((this.balance - amount) < this.minBalance) {
					console.log ("You can't withdraw more than your minimun balance");
				} else {
					this.balance = this.balance - amount;
				}
		} else {
			console.log("Please enter a number")
		}
		this.details();
	};
		this.deposit = function(amount) {
			if (isNaN(amount) === false) {
				if (amount > 0){
					this.balance = this.balance + amount;
				} else {
					console.log("You can't deposit a negative amount");
				}
			} else {
				console.log("Please enter a positive deposit amount")
			}
			this.details();
		}
	}
};

// Creating a currentAccount class that inherits from class savingsAccount
class currentAccount extends savingsAccount {
	constructor (name,balance,minBalance,credit) {
		super(name,balance);
		this.name = name;
		//this.balance = 0;
		// Overrides savingsAccount minBalance of 0
		this.minBalance = 500; 
		this.credit = 3000;
		this.getCredit = function(loanAmount) {
			if(isNaN(loanAmount) === false) {
				if(loanAmount > this.credit) {
					console.log("You can't get a loan more than your credit")
				} else {
					this.credit = this.credit - loanAmount;
					console.log("your credit balance is " + this.credit);
				}
			} else {
				console.log('Please enter a positive number');
			}
		};
		this.changeName = function(newName) {
			this.name = newName;
			console.log('Name changed successfully to ' + newName)
		}
	}
}
