export default class givenUserData {
    //login
    userEmail: string;
    userPassword: string;
    userFirstName: string;
    //registration
    userLastName: string;
    userAddress: string;
    userState: string;
    userCity: string;
    userZipcode: string;
    userMobile: string;
    //flag
    isValidUser: boolean;

    constructor(userData: object) {
        //verify valid user
        if(this.userEmail == undefined || this.userPassword == undefined || this.userFirstName == undefined){this.isValidUser = false};
        if(this.isValidUser == true){
            this.isValidUser = true;
            this.userEmail = userData['userEmail'];
            this.userPassword = userData['userPassword'];
            this.userFirstName = userData['userFirstName'];
            this.userLastName = userData['userLastName'];
            this.userAddress = userData['userAddress'];
            this.userState = userData['userState'];
            this.userCity = userData['userCity'];
            this.userZipcode = userData['userZipcode'];
            this.userMobile = userData['userMobile'];
      };
    };
};