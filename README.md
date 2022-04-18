# ez-league

ez-league helps users create their own sports leagues with the ability to add teams and players for stats tracking, along with a round-robin schedule generator. Along with the administrator sides, links are created for each league to be shared with the public for whoever wants to follow along with a bookmark in the browser.

## Tech Stack

For the front end, we went with ReactJS to build our components, and Tailwind CSS to style everything. We used Express on the accompanied [back-end server](https://github.com/jjjjjjonathan/ez-league-api). We are currently testing our application with Jest.

## Getting started

- Fork and clone the repo.
- Go to the [ez-league-api](https://github.com/jjjjjjonathan/ez-league-api) repo to fork and clone the server.
- `cd` into the `ez-league-api` folder, and run `npm install` in your terminal. Then, execute `npm run local` to start the server with Nodemon for easy restarts.
- In another terminal window, `cd` into the `ez-league` folder and run `npm start` to start the React app client.

## Future Plans

- Finish implemention of socket-io to create real-time updates of match and player stats without the need to refresh the app.
- Work on creating a more cohesive styling across the whole app.
- Refactor to DRY up the code with more tests with Jest.
