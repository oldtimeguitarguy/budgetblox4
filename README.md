BUDGET BLOX 4
==============

> A new way to do budgeting, using a cash-overflow / coin-separator idea. Spend money directly out your budgets as you get income for those budgets. Budgets are prioritized and use various prioritized banks automatically.

## PRIMARY GOALS
* **Start with Simplicity**
	* Each view will be a separate page that updates the router - _no modals!_
	* No drag-and-drop
* **Mobile-First Responsive**
* Database ideas are similar to BudgetBlox3
* Tidy code - this includes .less files! I might even go so far as to make a separate .less file for each view
* There should be default budgets to choose from with recommended amounts
* The overview screen really needs to focus on the budget. I want to show as much information as possible in one place. I don't want to hide any information if I can help it.
* More to come...
* **REALLY start with simplicity**
	* As much as I want to start making it pretty from the start, I think I really need to focus on the actual software this time around. I'll plan on making it pretty once I get it all functional.

## Technology Used
* node.js
* marionette (backbone.js extension)
* mongoose
* less
* require.js
* bootstrap (_I considered using Foundation, but node.js will automatically compile less for me... it doesn't do anything with sass_)