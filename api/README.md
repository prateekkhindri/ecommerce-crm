# E-commerce admin CMS API server

This project is build for the admin to create and manage their e-commerce store.

This is only the UI part and the API is available at re `....`

## How to use

1. run `git clone <put your git url here>`
2. run `npm i`
3. run `cd <folder name>`
4. run `npm run dev` for local development. Note that you must have nodemon installed in your system, if not run `npm i nodemon -g`

## APIS

All API's follow the following conventions: `{rootUrl}/api/v1`

### Admin registration and login API

This section shows how to access the api for admin registration and login

Note: TODO: make sure that the admin registration api is protected after first admin is created because only the admin can add another admin user.

All registration and login API's follow the following patterns `{rootUrl}/api/v1/register-login`

| #   | PATH | METHOD | IS PRIVATE | DESCRIPTION                                                      |
| --- | ---- | ------ | ---------- | ---------------------------------------------------------------- |
| 1.  | `/`  | POST   | yes        | send user data fName, lName to create admin user in the database |
