
const arrayusers = [
    {
        nome:"Ana",
        ativo: true
    },
    {
        nome:"Marcia",
        ativo: false
    }
]

const userResolvers = {
    Query: {
        users: () => arrayusers,
        primeiroUser: () => arrayusers[0]
    }
}
module.exports = userResolvers;