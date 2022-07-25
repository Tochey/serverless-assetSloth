class Asset {
    constructor(user, type, price, model, purchaseDate, deployDate) {
        this.user = user
        this.type = type
        this.price = price
        this.model = model
        this.purchaseDate = purchaseDate
        this.deployDate = deployDate
        this.source = "Zehntek"
       
    }

}

module.exports = Asset