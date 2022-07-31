var customerName = 'bob';
const leastFavoriteCustomer = 'some initial value'
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
};
function setBestCustomer() {
     var bestCustomer = 'not bob'

     return bestCustomer;
};
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
}
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'bob'
}
