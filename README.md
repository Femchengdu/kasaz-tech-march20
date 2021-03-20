# Kezas Apartments App

## _Full Stack Developer Technical Interview_

This application is created to fetch and display a list of apartments from a backend server.

## Technology Used

### Front End:

- HTML
- CSS
- ReactJs
- Axios

### Back End:

- Rails API
- PostgresSQL

### Key Features:

- Display all apartments
- Filter apartments by: pric, sqm, number of bedrooms/bathrooms
- Display recomended products based on items in the cart

### Bonus Features:

- Add a left menu to toggle the filter in and out
- TODO: Infinite scrolling of the apartments list

### Screenshots

![filter-list](https://github.com/Femchengdu/kasaz-tech-march20/blob/master/screenshots/apartmentList.png?raw=true)

- Filtered apartment list

![filter-menu](https://github.com/Femchengdu/kasaz-tech-march20/blob/master/screenshots/filterMenu.png?raw=true)

- Filter menu

![filter-bathroom](https://github.com/Femchengdu/kasaz-tech-march20/blob/master/screenshots/ipadView.png?raw=true)

- Ipad home

![filter-bedrooms](https://github.com/Femchengdu/kasaz-tech-march20/blob/master/screenshots/mobileHome.png?raw=true)

- Mobile home

## Installation

### Docker

This project is very easy to run using Docker.
By default,
Docker will expose port 3000 for the React front end and 3030 for the Rails API, so change this within the
Dockerfile if necessary.

Once in the root of the project, build and run the project by running

```sh
docker-compose up --build
```

Verify the deployment by navigating to your server address in
your preferred browser.

```sh
localhost:3000
```

The backend server will be running on

```sh
localhost:3030
```

## License

MIT
