
angular.module("myApp").controller('HomeController',HomeController);

HomeController.$inject = ['$http'];
 function HomeController ($http) {

     var vm = this;
     vm.userInformation = true;
     vm.BankInformation = true;
     vm.FamilyInformation = true;
     vm.UserDetails = UserDetails;
     vm.bankDetails = bankDetails;
     vm.FamilyDetails = FamilyDetails;
     function UserDetails(){
         vm.userInformation = true;
         vm.BankInformation = true;
         vm.FamilyInformation = true;
     };
     function bankDetails(){
         vm.BankInformation = false;
         vm.userInformation = false;
         vm.FamilyInformation = true;
     };
     function FamilyDetails(){
         vm.FamilyInformation = false;
         vm.userInformation = false;
         vm.BankInformation = true;
     }

 }