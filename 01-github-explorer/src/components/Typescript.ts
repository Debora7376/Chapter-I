type User = {
  name: string
  email: string
  address: {
    city: string
    state?: string
  }
}

function showWelcomeMessage(user: User) {
  return `Welcome ${user.name}, your email is ${user.email}, your city is ${user.address.city} and your state is ${user.address.state}`;
}

const user = {
  name: 'John Doe',
  email: 'john@doe.com',
  address: {
    city: 'San Francisco',
    state: 'CA',
  }
}

const message = showWelcomeMessage(user);