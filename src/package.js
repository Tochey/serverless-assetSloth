const Asset = require('./asset')
const moment = require('moment')
class Package {

    constructor(firstName, lastName, packageNumber, purchaseDate) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.packageNumber = packageNumber;
        const formattedPurchaseDate =   moment(purchaseDate).format('MMM D, YYYY')
        const formattedDeployDate = moment(formattedPurchaseDate).add(1, 'weeks').format('MMM D, YYYY')
        this.purchaseDate = formattedPurchaseDate;
        this.deployDate = formattedDeployDate

        this.assets = null
        switch (packageNumber) {
            case 1:
                this.assets =
                    [
                        new Asset(this.firstName + " " + this.lastName, "Laptop MAC", "$2500", "14\" Macbook Pro, M1 Pro, 16GB Ram, 512GB", this.purchaseDate, this.deployDate),
                        new Asset(this.firstName + " " + this.lastName, "Monitor 24\"", "$255", "24\" LG 24BL650C-B 1080", this.purchaseDate, this.deployDate),
                        new Asset(this.firstName + " " + this.lastName, "Monitor 24\"", "$255", "24\" LG 24BL650C-B 1080", this.purchaseDate, this.deployDate),
                        new Asset(this.firstName + " " + this.lastName, "StarTech Dock", "$321", "StarTech Thunderbolt 3 USB-C Dual 4k", this.purchaseDate, this.deployDate),
                        new Asset(this.firstName + " " + this.lastName, "Apple Keyboard", "$110", "Apple Magic Keyboard Full", this.purchaseDate, this.deployDate),
                        new Asset(this.firstName + " " + this.lastName, "Apple Mouse", "$85", "Apple Magic Mouse", this.purchaseDate, this.deployDate),
                        new Asset(this.firstName + " " + this.lastName, "Adapters", "$75", "Apple USB Type-C Digital AV Multipart Adapter", this.purchaseDate, this.deployDate)
                    ]
                break;
            case 2:
                this.assets =
                    [
                        new Asset(this.firstName + " " + this.lastName, "Laptop MAC", "$2500", "14\" Macbook Pro, M1 Pro, 16GB Ram, 512GB", this.purchaseDate, this.deployDate),
                        new Asset(this.firstName + " " + this.lastName, "Monitor 32\"", "$485", "32\" LG 32BN67U-B 4k", this.purchaseDate, this.deployDate),
                        new Asset(this.firstName + " " + this.lastName, "StarTech Dock", "$321", "StarTech Thunderbolt 3 USB-C Dual 4k", this.purchaseDate, this.deployDate),
                        new Asset(this.firstName + " " + this.lastName, "Apple Keyboard", "$110", "Apple Magic Keyboard Full", this.purchaseDate, this.deployDate),
                        new Asset(this.firstName + " " + this.lastName, "Apple Mouse", "$85", "Apple Magic Mouse", this.purchaseDate, this.deployDate),
                        new Asset(this.firstName + " " + this.lastName, "Adapters", "$75", "Apple USB Type-C Digital AV Multipart Adapter", this.purchaseDate, this.deployDate)
                    ]
                break;
            case 3:
                this.assets =
                    [
                        new Asset(this.firstName + " " + this.lastName, "Laptop PC", "$2500", "14\" X1 Carbon, 16GB RAM, 512GB SSD, GHz i7. (8th gen)", this.purchaseDate, this.deployDate),
                        new Asset(this.firstName + " " + this.lastName, "Monitor 24\"", "$255", "24\" LG 24BL650C-B 1080", this.purchaseDate, this.deployDate),
                        new Asset(this.firstName + " " + this.lastName, "Monitor 24\"", "$255", "24\" LG 24BL650C-B 1080", this.purchaseDate, this.deployDate),
                        new Asset(this.firstName + " " + this.lastName, "StarTech Dock", "$321", "StarTech Thunderbolt 3 USB-C Dual 4k", this.purchaseDate, this.deployDate),
                        new Asset(this.firstName + " " + this.lastName, "Keyboard/Mouse Combo (PC)", "$65", "Logitech MK 540 (combo)", this.purchaseDate, this.deployDate)
                    ]
            case 4:
                this.assets =
                    [
                        new Asset(this.firstName + " " + this.lastName, "Laptop PC", "$2500", "14\" X1 Carbon, 16GB RAM, 512GB SSD, GHz i7. (8th gen)", this.purchaseDate, this.deployDate),
                        new Asset(this.firstName + " " + this.lastName, "Monitor 32\"", "$485", "32\" LG 32BN67U-B 4k", this.purchaseDate, this.deployDate),
                        new Asset(this.firstName + " " + this.lastName, "StarTech Dock", "$321", "StarTech Thunderbolt 3 USB-C Dual 4k", this.purchaseDate, this.deployDate),
                        new Asset(this.firstName + " " + this.lastName, "Keyboard/Mouse Combo (PC)", "$65", "Logitech MK 540 (combo)", this.purchaseDate, this.deployDate)
                    ]

            default:
                break;
        }
    }
}

module.exports = Package