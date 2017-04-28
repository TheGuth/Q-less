# Q-Less (Queue Less)

Collaborators: James Guthrie & Laura Wolfart

## Background

We built this app drawing from a common problem that we have seen when going out to popular bars and clubs. This problem is that it is very hard to fight through the crows to order your drink in a timely manner.

### This app has two main components:

* 1. allow users to see the bar or clubs drink menu from their phone and place an order.
* 2. allow bars and clubs to have a platform to receive orders from their customers via the website counter part, and be able to customize their menu to display to the users.

## Use Case

Why is this app useful? If your like me then you hate having to wait for the opportunity to place an order, while you could be out dancing or talking with your friends, this app will allow you the ability to place orders without skipping a beat, that way you can enjoy your night with minimal down time. Business will have to decide on their own whether they will have a pick up area for ordered drinks or actually bring them to the customer.

## Initial UX

[Initial WireFrames](https://github.com/TheGuth/Q-Less/tree/master/readme_images/wireframe_images)

## Current UX

[Live Version Images](https://github.com/TheGuth/Q-Less/tree/master/readme_images/live_ux_images)

## Working Prototype
[Q-Less]()

## Functionality
The app's functionality includes:

* A login and Signup Page.
* A landing page with a connect interface for customers to connect to their favorite bar or club to place and order.
* A customer dashboard where they can see the current menu of the bar or club they are at.
* A cart page to adjust their order
* A Checkout page to submit their order, and be redirected back to the current business menu, when they are ready to order again.

## Technical

This app is built using React, Redux, react-native, native-base.io Nodejs, express, mongodb as well as html and css.

## Development Roadmap

This is v1.0 of the app, but future enhancements are expected.

### Immediate Developments

### Improve form validation.
### Add Profile Page
### Include on Profile Page past business connected to, and past drinks ordered.
### Include Search Page, so users can search for business by name, and be presented with a list of business that use the app.
### Add a footer tab navigation for profile page, search page, and dashboard/connect to business page.
### Improve styling
### Add logo

### Future developments:

* Create Customer Profile page.
* Add stripe library so that users and business can handle transactions without having to use cash.
* Add better validation to forms
* Add email service
* Add text update (for drink status)
* Add client ability to have drivers license as part of their Profile
* add when an order is send it also sends the drivers license to help verify the order.
* Add queue structure for orders, to help provide a general time estimate for feedback to the user.
* Add Confirmation message with receipt to email or phone.
* Add Custom Drink order on client side? (description) (maybe)
* Add order denied on business side for custom drink orders. (sends message back) (maybe)
* Add for custom menu design where business can add a banner image, logo, etc...
* Add Search feature on client side to look for current Business participating.
* limit by 10 with next and prev buttons
