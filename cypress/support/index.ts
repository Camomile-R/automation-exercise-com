import './mainCommands';
import './userCommands';

declare global {
  namespace Cypress {
    interface Chainable {
      checkContactUsFormSubmitted(): Chainable<JQuery<HTMLElement>>
    }
  }
}//checkContactUsFormSubmitted

declare global {
  namespace Cypress {
    interface Chainable {
      checkDetailedViewProductDataIsVisible(): Chainable<JQuery<HTMLElement>>
    }
  }
}//checkDetailedViewProductDataIsVisible

declare global {
  namespace Cypress {
    interface Chainable {
      checkExistingUserValidationAtSignUp(): Chainable<JQuery<HTMLElement>>
    }
  }
}//checkExistingUserValidationAtSignUp

declare global {
  namespace Cypress {
    interface Chainable {
      checkIfProductsListIsVisible(): Chainable<JQuery<HTMLElement>>
    }
  }
}//checkIfProductsListIsVisible

declare global {
  namespace Cypress {
    interface Chainable {
      checkIncorrectUserValidationAtLogin(): Chainable<JQuery<HTMLElement>>
    }
  }
}//checkIncorrectUserValidationAtLogin

declare global {
  namespace Cypress {
    interface Chainable {
      checkLoggedInUser(value: object): Chainable<JQuery<HTMLElement>>
    }
  }
}//checkLoggedInUser

declare global {
namespace Cypress {
  interface Chainable {
    clearCookiesAndCache(): Chainable<JQuery<HTMLElement>>
  }
}
}//clearCookiesAndCache

declare global {
  namespace Cypress {
    interface Chainable {
      clickMainMenuBtn(buttonTitle: string): Chainable<JQuery<HTMLElement>>
    }
  }
}//clickMainMenuBtn

declare global {
  namespace Cypress {
    interface Chainable {
      confirmUserRegistration(): Chainable<JQuery<HTMLElement>>
    }
  }
}//confirmUserRegistration

declare global {
namespace Cypress {
  interface Chainable {
    deleteUser(value: object): Chainable<JQuery<HTMLElement>>
  }
}
}//deleteUser

declare global {
  namespace Cypress {
    interface Chainable {
      fillInRegistrationForm(value: object): Chainable<JQuery<HTMLElement>>
    }
  }
}//fillInRegistrationForm

declare global {
  namespace Cypress {
    interface Chainable {
      fillInSignUpForm(value: object): Chainable<JQuery<HTMLElement>>
    }
  }
}//fillInSignUpForm

declare global {
  namespace Cypress {
    interface Chainable {
      locationShouldBe(pageName: string): Chainable<JQuery<HTMLElement>>
    }
  }
}//locationShouldBe
  
declare global {
  namespace Cypress {
    interface Chainable {
      openHomePage(): Chainable<JQuery<HTMLElement>>
    }
  }
}//openHomePage

declare global {
namespace Cypress {
  interface Chainable {
    loginUser(value: object): Chainable<JQuery<HTMLElement>>
  }
}
}//loginUser

declare global {
  namespace Cypress {
    interface Chainable {
      pickTheTileOfProduct(value: string): Chainable<JQuery<HTMLElement>>
    }
  }
}//pickTheTileOfProduct

declare global {
namespace Cypress {
  interface Chainable {
    registerUser(value: object): Chainable<JQuery<HTMLElement>>
  }
}
}//registerUser

declare global {
namespace Cypress {
  interface Chainable {
    submitContactUsForm(value: object): Chainable<JQuery<HTMLElement>>
  }
}
}//submitContactUsForm

declare global {
  namespace Cypress {
    interface Chainable {
      subscribeViaFooterWith(value: string): Chainable<JQuery<HTMLElement>>
    }
  }
}//subscribeViaFooterWith

declare global {
  namespace Cypress {
    interface Chainable {
      verifyTestCasesPage(): Chainable<JQuery<HTMLElement>>
    }
  }
}//verifyTestCasesPage

declare global {
  namespace Cypress {
    interface Chainable {
      unloginTheUser(): Chainable<JQuery<HTMLElement>>
    }
  }
}//unloginTheUser