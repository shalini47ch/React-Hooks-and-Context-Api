import React from 'react'

const UserContext=React.createContext()
const UserProvider=UserContext.Provider
const UserConsumer=UserContext.Consumer

export {UserProvider,UserConsumer}
/*
The logic that is applied here is that we create a context along with the provider and consumer.The 
provider usually starts from the root page and the consumer is that part where we need to consume the value
*/