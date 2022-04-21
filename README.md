!["EZ-LEAGUE MAIN MENU"](https://github.com/jjjjjjonathan/ez-league/blob/main/docs/Screenshot%20by%20Snip%20My%20at%20Apr%2016%2C%202022%20at%2023:14:53.png)

!["Suporter and Manager mode"](https://github.com/jjjjjjonathan/ez-league/blob/main/docs/Screenshot%20by%20Snip%20My%20at%20Apr%2016%2C%202022%20at%2023:15:20.png)

!["Create Your Own League"](https://github.com/jjjjjjonathan/ez-league/blob/main/docs/Screenshot%20by%20Snip%20My%20at%20Apr%2016%2C%202022%20at%2023:19:08.png)

!["admin dashboard"](https://github.com/jjjjjjonathan/ez-league/blob/main/docs/Screenshot%20by%20Snip%20My%20at%20Apr%2016%2C%202022%20at%2023:21:49.png)

!["add teams"](https://github.com/jjjjjjonathan/ez-league/blob/main/docs/Screenshot%20by%20Snip%20My%20at%20Apr%2016%2C%202022%20at%2023:20:41.png)

!["team list that we created](https://github.com/jjjjjjonathan/ez-league/blob/main/docs/Screenshot%20by%20Snip%20My%20at%20Apr%2016%2C%202022%20at%2023:22:19.png)

!["add players to the team"](https://github.com/jjjjjjonathan/ez-league/blob/main/docs/Screenshot%20by%20Snip%20My%20at%20Apr%2016%2C%202022%20at%2023:30:07.png)

!["schedule generator with weekly interval"](https://github.com/jjjjjjonathan/ez-league/blob/main/docs/Screenshot%20by%20Snip%20My%20at%20Apr%2016%2C%202022%20at%2023:23:20.png)

!["list of the league"](https://github.com/jjjjjjonathan/ez-league/blob/main/docs/Screenshot%20by%20Snip%20My%20at%20Apr%2016%2C%202022%20at%2023:24:02.png)

!["list of the team in specific League"](https://github.com/jjjjjjonathan/ez-league/blob/main/docs/Screenshot%20by%20Snip%20My%20at%20Apr%2016%2C%202022%20at%2023:24:44.png)

!["upcoming schedule and list of player for specific team"](https://github.com/jjjjjjonathan/ez-league/blob/main/docs/Screenshot%20by%20Snip%20My%20at%20Apr%2016%2C%202022%20at%2023:25:24.png)

!["all schedule in the league"](https://github.com/jjjjjjonathan/ez-league/blob/main/docs/Screenshot%20by%20Snip%20My%20at%20Apr%2016%2C%202022%20at%2023:26:08.png)

!["league table"](https://github.com/jjjjjjonathan/ez-league/blob/main/docs/Screenshot%20by%20Snip%20My%20at%20Apr%2016%2C%202022%20at%2023:27:30.png)

!["game dashboard"](https://github.com/jjjjjjonathan/ez-league/blob/main/docs/Screenshot%20by%20Snip%20My%20at%20Apr%2016%2C%202022%20at%2023:31:13.png)

!["game event and console"](https://github.com/jjjjjjonathan/ez-league/blob/main/docs/Screenshot%20by%20Snip%20My%20at%20Apr%2016%2C%202022%20at%2023:34:35.png)

!["final result"](https://github.com/jjjjjjonathan/ez-league/blob/main/docs/Screenshot%20by%20Snip%20My%20at%20Apr%2016%2C%202022%20at%2023:35:07.png)

# ez-league

ez-league helps users create their own sports leagues with the ability to add teams and players for stats tracking, along with a round-robin schedule generator. Along with the administrator sides, links are created for each league to be shared with the public for whoever wants to follow along with a bookmark in the browser.

## Tech Stack

For the front end, we went with [ReactJS](https://reactjs.org/) to build our components, and [Tailwind CSS](https://tailwindcss.com/) to style everything. We used [Express](https://expressjs.com/) on the accompanied [back-end server](https://github.com/jjjjjjonathan/ez-league-api). We used [socket-io](https://socket.io/) for our web sockets to create real-time updates. We are currently testing our application with Jest.

## Getting started

- Fork and clone the repo.
- Go to the [ez-league-api](https://github.com/jjjjjjonathan/ez-league-api) repo to fork and clone the server.
- `cd` into the `ez-league-api` folder, and run `npm install` in your terminal. Then, execute `npm run local` to start the server with Nodemon for easy restarts.
- In another terminal window, `cd` into the `ez-league` folder and run `npm start` to start the React app client.

## Future Plans

- (COMPLETED APRIL 19, 2022) ~~Finish implemention of socket-io to create real-time updates of match and player stats without the need to refresh the app.~~
- Work on creating a more cohesive styling across the whole app.
- Refactor to DRY up the code with more tests with Jest.
