const puppeteer = require("puppeteer");
const dotenv = require("dotenv");
const Package = require('./package')


dotenv.config();
//   exports.handler = async (events) => {

// const browser = await puppeteer.launch({
//     args: chromeLambda.args,
//     executablePath: await chromeLambda.executablePath,
//     ignoreDefaultArgs: ['--disable-extensions'],

//   });
// }
(async function () {
    //init
    let browser;
    const package = new Package("Asset", "test", 2, "09/28/01")
    const fullName = package.firstName + " " + package.lastName
    try {
        browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null,
        });
    } catch (err) {
        console.log(err);
    }

    let page = await browser.newPage();

    const login = async () => {
        try {

            await page.goto("https://login.assetpanda.com/users/sign_in");
            await page.waitForSelector("#user_email");
            await page.type("#user_email", process.env.ASSET_PANDA_EMAIL);
            await page.type("#asset-panda-pwfield", process.env.ASSET_PANDA_PASSWORD);
            await page.waitForSelector('[type="submit"]');
            await page.click('[type="submit"]');
        } catch (err) {
            console.log(err);
        }
    };

    const addEmployee = async () => {
        try {
            await page.waitForSelector('#asset-menu [href="/employees"]');
            await page.click('#asset-menu [href="/employees"]');
            await page.waitForSelector('[href="/employees/new"]');
            await page.click('[href="/employees/new"]');

            await page.waitForSelector("#values_field_1");
            await page.type("#values_field_1", fullName);
            await page.waitForSelector("#values_field_2");
            await page.type("#values_field_2", package.firstName.charAt(0).toLowerCase() + package.lastName.toLowerCase() + "@flagshippioneering.com");
            await page.waitForSelector(
                "#entity_object_fields > div:nth-child(7) > div > div > div > div.selectize-input.items.full.has-options.has-items"
            );
            await page.click(
                "#entity_object_fields > div:nth-child(7) > div > div > div > div.selectize-input.items.full.has-options.has-items"
            );
            await page.waitForSelector(
                "#entity_object_fields > div:nth-child(7) > div > div > div > div.selectize-dropdown.single.entity_list_field_id > div > div:nth-child(4)"
            );
            await page.click(
                "#entity_object_fields > div:nth-child(7) > div > div > div > div.selectize-dropdown.single.entity_list_field_id > div > div:nth-child(4)"
            );
            await page.waitForSelector("#create-object-btn");
            await page.click("#create-object-btn");
            await page.waitForSelector('#asset-menu [href="/asset_items"]')
            await page.click('#asset-menu [href="/asset_items"]')
        } catch (err) {
            console.log(err);
        }
    };

    const assignAssets = async () => {
        for (let index = 0; index < package.assets.length; index++) {

            await page.waitForSelector('[href="/asset_items/new"]')
            await page.click('[href="/asset_items/new"]')

            await page.waitForSelector('#value_ids_field_18-selectized')
            await page.type('#value_ids_field_18-selectized', fullName)
            await page.keyboard.press('Enter')
            await page.waitForSelector('#value_ids_field_15-selectized')
            await page.type('#value_ids_field_15-selectized', package.assets[index].type)
            await page.keyboard.press('Enter')
            await page.waitForSelector('#values_field_8')
            await page.click('#values_field_8')
            console.log(package.assets[index].model)
            
            await page.select("select#values_field_8", package.assets[index].model)

            await page.waitForSelector('[name="values[field_41]"]')
            await page.type('[name="values[field_41]"]', package.assets[index].purchaseDate)
            await page.waitForSelector('[name="values[field_130]"]')
            await page.type('[name="values[field_130]"]', package.assets[index].deployDate)
            
            await page.waitForSelector('#values_field_142')
            await page.type('#values_field_142',package.assets[index].price)

            await page.select("#values_field_6", package.assets[index].source)
            await page.waitForSelector('#create-object-btn')
            await page.click('#create-object-btn')

            await page.waitForSelector('#asset-menu [href="/asset_items"]')
            await page.click('#asset-menu [href="/asset_items"]')
            
        }
    }

    await login();
    await addEmployee();
    await assignAssets()
    browser.close()
})();
