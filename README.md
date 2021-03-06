BUDGET BLOX 4
==============

> A new way to do budgeting, using a cash-overflow / coin-separator idea. Spend money directly out your budgets as you get income for those budgets. Budgets are prioritized and use various prioritized banks automatically.

## HOW IT BASICALLY WORKS
* You store your money in various **wallets** _(ie. Cash Box, Checking Account, etc)_
* You set **budgets** that automatically fill from the available funds in your wallets up based on priority
* You actually spend the money out of the budget itself, which will automatically take money from one or more of the wallets, based on the wallet priority
	* In effect, the wallet becomes fairly invisible... the budget itself is what you would pay attention to when spending
	* That being said, you may need to adjust which wallet the money was spent from, so you should be able to see and optionally edit this as you enter the transaction

> I like to imagine this like buckets of water. Your income is water coming in. Your budgets are buckets of various sizes, arranged vertically and tipped a bit. Once you fill up one bucket with water, the additional water will spill over into the next bucket and so-on until you run out of water to pour. You can reorganize the buckets at any time, and then re-pour the water so that it fills them up in the new order. There will also be an ability define budget offsets. This is like having anther bucket of water that you are holding. A negative offset means that you would collect a certain amount of water in your handy bucket first, before filling up the offset bucket. A positive offset would have you pour your handy bucket into the offset bucket before starting the main water pour. This is useful if something important filled and you're out of water (money), but you want to spend money in a different budget... but you don't want to reorganize your budgets because you like that budget's level of importance... so you basically give that budget a head-start.

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
* require.js
* Bootstrap 3 with the [Flatly Theme](http://bootswatch.com/flatly/)
	- using colors from [Bootflat](http://bootflat.github.io/documentation.html)
	- Use [iCheck](http://fronteed.com/iCheck/) for checkboxes
	- Use [Bootstrap Select](http://silviomoreto.github.io/bootstrap-select/) for drop-downs
		- Check out [this dropdown](http://flatuicolors.com/)
	- Extremely subtle rounded corners
	- Possibly very very slight shading under buttons and blocks
	- Try to avoid using modals if possible
	- Possibly use [Bootstrap Growl](http://bootstrap-growl.remabledesigns.com/)

## Other things
I am going to .gitignore all of the node modules and the vendor folder, so _bower install_ will need to be run in the app/dev directory and _npm install_ will need to be run in the server directory

### Additional Notes
I like this [flat calendar idea](http://designshack.net/design/vector-calendar-widget)
I found a [css generator for long shadows](http://sandbox.juan-i.com/longshadows/) I might want to think about using
I also found a [scss mixin](http://codepen.io/awesomephant/pen/mAxHz) for it that I'm sure I can convert to less