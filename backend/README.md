# To Run this locally, 

### 1.Clone this repo

### 2. cd into both frontend and backend directory, run 

```bash
    yarn install
```
### 3. Bootstrap Database

* Run migrations
```bash
    yarn sequelize-cli db:migrate
```

* Seed database
```bash
    yarn sequelize-cli db:seed:all
```


### 4. Start Server

* Start server in both frontend and backend directory by running;
```bash
    yarn dev
```