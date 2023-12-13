import './commands';

declare global {
  namespace Cypress {
    interface Chainable {
      checkLoggedInUser(value: object): Chainable<JQuery<HTMLElement>>
    }
  }
  }

declare global {
namespace Cypress {
  interface Chainable {
    clearCookiesAndCache(): Chainable<JQuery<HTMLElement>>
  }
}
}

declare global {
namespace Cypress {
  interface Chainable {
    deleteUser(value: object): Chainable<JQuery<HTMLElement>>
  }
}
}

declare global {
  namespace Cypress {
    interface Chainable {
      openHomePage(): Chainable<JQuery<HTMLElement>>
    }
  }
  }

declare global {
namespace Cypress {
  interface Chainable {
    loginUser(value: object): Chainable<JQuery<HTMLElement>>
  }
}
}

declare global {
namespace Cypress {
  interface Chainable {
    registerUser(value: object): Chainable<JQuery<HTMLElement>>
  }
}
}

declare global {
namespace Cypress {
  interface Chainable {
    submitContactUsForm(value: object): Chainable<JQuery<HTMLElement>>
  }
}
}

declare global {
  namespace Cypress {
    interface Chainable {
      subscribeUserViaFooter(value: object): Chainable<JQuery<HTMLElement>>
    }
  }
  }

declare global {
  namespace Cypress {
    interface Chainable {
      unloginTheUser(): Chainable<JQuery<HTMLElement>>
    }
  }
  }