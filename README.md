# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

echo "# OnlineBatteryStore-Frontend" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Arunkrishna94/OnlineBatteryStore-Frontend.gitgit co
git push -u origin main

git remote add origin https://github.com/Arunkrishna94/OnlineBatteryStore-Frontend.git
git branch -M main
git push -u origin main




postgres=# select * from cart;
 id | user_id | product_id | quantity | created_at
----+---------+------------+----------+------------
(0 rows)

postgres=# select * from order_items;
 id | order_id | product_id | quantity | price
----+----------+------------+----------+-------
(0 rows)

postgres=# select * from orders;
 id | user_id | total_price | status | created_at
----+---------+-------------+--------+------------
(0 rows)

postgres=# select * from products;
 id | name | brand | capacity | price | stock | created_at
----+------+-------+----------+-------+-------+------------
(0 rows)

postgres=# select * from users;
 id |     name     |           email           |                           password                           |
created_at         | role
----+--------------+---------------------------+--------------------------------------------------------------+----------------------------+-------
  1 | Arun Krishna | arun@example.com          | hashedpassword123                                            | 2025-02-18 12:56:46.550594 | user
  2 | Arun Krishna | arunkrishna94@outlook.com | $2b$10$GyuNceEnuwTiZsbJiFyAg.TOESKeOxZEcoFEjXrWYndSyQYDddEEC | 2025-02-18 17:09:11.68024  | user
  4 | John Doe     | johndoe@example.com       | $2b$10$ZSdPwecS5TmLQM43qLOZUOUQRW/uCvFS4DYkI8DxI41Nsn6Xin7pe | 2025-02-19 06:56:04.033331 | user
  5 | New User     | newuser@example.com       | $2b$10$6ldxoEVrWn2oXbYIyHqAsOK1TCpTEPLa4Y06/fyTc.RPxuM9mPg.O | 2025-02-19 07:23:35.016154 | user
  6 | Arun         | arunkrishna@outlook.com   | $2b$10$yu98DrFTYpCoWnU/98CeHu76nIkbkUVG0JBkLejROKK14geZYI73a | 2025-02-19 07:43:21.957241 | user
  7 | ArunKrishna  | Krishna@outlook.com       | $2b$10$iRflaZh1mQaE9Khn4ll0LeugUD/evA9Kh96GPww7aMAr5pjPQ8au6 | 2025-02-23 17:15:37.538027 | user
  8 | ArunTurvi    | turvi@outlook.com         | $2b$10$vWr9ckQdPNFqeYbYIb3wqOUzLDHJmmpCnqBHWPBqW1js/sBqchxBK | 2025-02-23 18:36:20.794854 | user
 10 | arunkri      | arunkri@outlook.com       | $2b$10$LuSJz2KuL7uE/pLBZzQWDe7UocWGV7YWpLBTPRNUpfiQ01IwNdptu | 2025-02-23 19:38:48.52585  | admin
  9 | ArunTurvi    | turviaad@outlook.com      | $2b$10$5IWRrbgXrsr1vfhhGP2EKexIDC/4xnMs/FM1Rs8jkO8Ebc2OY5//y | 2025-02-23 18:40:46.344762 | admin
 11 | dhana        | dhana@outlook.com         | $2b$10$Tyw.tnoup5xY.9PsZq3B6eONQ4eaZZJC1PqUHaYluCIAyhyYVo7DC | 2025-03-01 07:58:16.187213 | user
(10 rows)