Description:
	Verify dropdown menu is shown for "Our Solutions" and all links are valid and working

Test Priority:
	Smoke tests (P0)

Setup:
	navigate to https://kmslh.com using browser

Steps:
	1. Hover mouse over "Our Solutions" from the top menu
	2. Verify that sub-menu appeared with following headline: "I Need Knowledge Management for My"
	3. Verify that sub-menu has 4 following sections (in form of a button):
		- Call Center (with sub-text: "Cut call center holding times by 40%")
		- Self Service (with sub-text: "Empower your customers with 24/7 knowledge")
		- Onboarding & Training (with sub-text: "Cut onboarding and training times by up to 70%")
		- Field Service (with sub-text: "Reduce your field teams time-on-site by 60%")
	4. Verify each button can be clicked.
	5. Verify redirection to correct url after each button is clicked

Note:
	Execute this test on Chrome, Firefox and Safari browsers.