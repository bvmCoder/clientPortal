angular.module("myApp")
.controller('HomeController', HomeController);

HomeController.$inject = ['$http'];

function HomeController($http) {

    var self = this;
    self.userInformation = true;
    self.BankInformation = true;
    self.FamilyInformation = true;
    self.UserDetails = UserDetails;
    self.bankDetails = bankDetails;
    self.FamilyDetails = FamilyDetails;

    function UserDetails() {
        self.userInformation = true;
        self.BankInformation = true;
        self.FamilyInformation = true;
    };

    function bankDetails() {
        self.BankInformation = false;
        self.userInformation = false;
        self.FamilyInformation = true;
    };

    function FamilyDetails() {
        self.FamilyInformation = false;
        self.userInformation = false;
        self.BankInformation = true;
    }

}