# Test Purpose
The purpose of this is to verify that a new user can register successfully, view correct user details, add a product to the shopping cart and validate the corrrect product is displayed in the cart.
This test helps confirm the registration and shopping flow works as expected.

## Preconditions
- Website is accessible.
- Email for registration not already exist.
- User is not logged in.
- Network connection active.

## Step to execute
|step|action                                     |expected result                    |
|----|-------------------------------------------|-----------------------------------|
|1   |open website                               |website open successfully          |
|2   |click on register button                   |register form open                 |
|3   |enter valid details in the required field: |there is no errors                 |
|    |firstName,lastName,email,gender,password,  |                                   |
|    |confirm password                           |                                   |
|4   |click on register button                   |registration completed successfully|
|5   |click on continue button                   |home page open                     |
|6   |validate that the email used for login is  |email is displayed correctly       |
|    |displayed in the header                    |                                   |
|7   |click on digital downloads                 |digital downloads page open        |
|8   |pick random product and click on add to    |the product added to cart          |
|    |cart button                                |                                   |
|9   |click on shopping cart button              |shopping cart page open            |
|10  |validate that the product name displayed   |the products are matching          |
|    | match the one we choosen                  |                                   |

## PostConditions
- Log out the user

## Validation criteria
The test is considered successful if:
- User registration completes without errors.
- User details are displayed correctly.
- Product is added to the cart successfully.
- The shopping cart displayes the correct product with accurate details.