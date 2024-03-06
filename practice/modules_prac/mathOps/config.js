
// Exercise 5: Environmental Variables Module
// Create a module named config.js that exports configuration data such as port numbers or API keys. Use process.env to access environment variables and provide default values if environment variables are not set.

// console.log(process.env.NODE_ENV) // dev
// console.log(process.env) // dev

module.exports = {
    port: process.env.DISPLAY,
    hst: process.env.HOSTNAME
}
