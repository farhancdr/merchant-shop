## Shop and merchant management 

## PROJECT SETUP

## Local Environment Setup
- Git
- Node.js v14.5.0
- Yarn v1.22.5
- MySql
- PostMan
- Visual Studio Code

## Environment Variables for Local Development

> Create a .env file and adjust the following environment variables. DONOT include the file in the source control.

```bash
DB_NAME=<value>
DB_USER=<value>
DB_PASSWORD=<value>
PORT=<value>
```

> Create a database in mysql of XAMPP, put the name on DB_NAME
> 
## NPM Scripts

```bash
$ yarn install          # install dependencies
$ yarn seed             # generate required database schemas
$ yarn start            # run project with nodemon
```

## API Documentation

## INSERT into both tables using single POST request

`POST /api/shops`

you can create shop by using a merchant id putting merchant details in the request body.
  
  #### using merchant id ( in that case you have to create a merchant first)
    http://localhost:5000/api/merchants
    {
      "merchant": {
          "id" : 2
      },
      "shop_name": "AmarShopno",
      "shop_category": 2,
      "trade_license_number": "12345678ds9",
      "age_of_shop": 2,
      "shop_image": "AmarShopno.jpg"
    }
  #### using merchant details
    http://localhost:5000/api/merchants
    {
      "merchant": {
          "email": "amarshopno@gmail.com",
          "merchant_name": "Sabbir Ahmed",
          "user_name": "sabbir",
          "phone": "01856254156",
          "nid": "199910154875004",
          "subscription_package_id": "1",
          "used_referral_code": "Shadinota"
      },
      "shop_name": "AmarShopno",
      "shop_category": 2,
      "trade_license_number": "12345678ds9",
      "age_of_shop": 2,
      "shop_image": "AmarShopno.jpg"
    }


## Merchants API

### Get all merchants

`GET /api/merchants`

    http://localhost:5000/api/merchants


### Create a new merchant

`POST /api/merchants`

    http://localhost:5000/api/merchants
    {
      "email": "nazmul@gmail.com",
      "merchant_name": "Nazmul Huda",
      "user_name": "nazmul",
      "phone": "01856254156",
      "nid": "19992540500045",
      "subscription_package_id": "1",
      "used_referral_code": "Shadinota"
    }


## Image Upload API

### upload a image file
`POST /api/uploadImage/`
  
`http://localhost:5000/api/uploadImage`

    - go to postman
    - select form data
    - set KEY as 'image_file`
    - select file from dropdown
    - finally select your image from your machine
    - send request
