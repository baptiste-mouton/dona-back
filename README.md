# dona-back

* NodeJS (v16.14.0)
* npm (8.5.3)

## Installation

* Install NodeJS, NMP and run the commands below : 

```bash
git clone https://github.com/baptiste-mouton/dona-back.git
cd ./dona-back
npm install 
npm audit fix 
```

* Create a .env file at the root of the project with the following content: 
```
DB_URL=mongodb+srv://dona-admin:<password>@dona-cluster.ycxcq.mongodb.net/?retryWrites=true&w=majority
```

Send an email to baptiste.mouton.1@ens.etsmtl.ca to get the `<password>`

## Usage 
Run this command at the root  of the project 
 ```bash 
 npm start
 ```
