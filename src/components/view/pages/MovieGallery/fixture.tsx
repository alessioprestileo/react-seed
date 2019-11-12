const movieData = [
    {
        "Title": "Captain America: The First Avenger",
        "Year": "2011",
        "imdbID": "tt0458339",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTYzOTc2NzU3N15BMl5BanBnXkFtZTcwNjY3MDE3NQ@@._V1_SX300.jpg"
    },
    {
        "Title": "The Toxic Avenger",
        "Year": "1984",
        "imdbID": "tt0090190",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNzViNmQ5MTYtMmI4Yy00N2Y2LTg4NWUtYWU3MThkMTVjNjk3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    {
        "Title": "The Toxic Avenger Part II",
        "Year": "1989",
        "imdbID": "tt0098503",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BODhiNTljYTctMmIzZC00ZGVkLTk2NmItN2RjMzY3ZTYyNDczXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    {
        "Title": "Citizen Toxie: The Toxic Avenger IV",
        "Year": "2000",
        "imdbID": "tt0212879",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMWI0NWY0ODUtNGY3Yy00ZDU1LTllYjUtMDFkYWEzZGQwY2I1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    {
        "Title": "The Toxic Avenger Part III: The Last Temptation of Toxie",
        "Year": "1989",
        "imdbID": "tt0098502",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNjVlNzFjMGItMTEwYy00OTc0LWFmY2ItM2U0MmQyYWI5Njk3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    {
        "Title": "Avenger",
        "Year": "2006",
        "imdbID": "tt0473445",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTMzMjMwMjcyNl5BMl5BanBnXkFtZTcwNTA1NDgzMQ@@._V1_SX300.jpg"
    },
    {
        "Title": "Knives of the Avenger",
        "Year": "1966",
        "imdbID": "tt0059045",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYmM1NGI1M2QtYWU2Zi00N2RjLWJjODgtYjhkN2ViOWY2YmEzXkEyXkFqcGdeQXVyNTE1MTU0Mzc@._V1_SX300.jpg"
    },
    {
        "Title": "Samurai Avenger: The Blind Wolf",
        "Year": "2009",
        "imdbID": "tt1243972",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTAwNjc4MTkyNjBeQTJeQWpwZ15BbWU3MDg3NTQyMzI@._V1_SX300.jpg"
    },
    {
        "Title": "The Avenger",
        "Year": "1962",
        "imdbID": "tt0056174",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTY0NjM1NjgyNl5BMl5BanBnXkFtZTYwNzAyMjg5._V1_SX300.jpg"
    },
    {
        "Title": "The Avenger",
        "Year": "1960",
        "imdbID": "tt0054257",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNzU5YzM3MmEtNTE2MS00MzVjLWI5Y2EtNGU3M2YwMGYzMGQ0XkEyXkFqcGdeQXVyMDExMzA0Mw@@._V1_SX300.jpg"
    },
    {
        "Title": "The masked avenger: Lagardère",
        "Year": "2003",
        "imdbID": "tt0397508",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BODQ5ZmYzZTktNTYzOS00YTVjLWFkODItZmY1MzI0NGYzYTlhXkEyXkFqcGdeQXVyMjgxMTkzOQ@@._V1_SX300.jpg"
    },
    {
        "Title": "Mask of the Avenger",
        "Year": "1951",
        "imdbID": "tt0043790",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZGQ5NzFmYWItODMwYi00MjA1LTk5YzQtZGQwYzg2ZTBmNDdmXkEyXkFqcGdeQXVyNDcxNDkxMjA@._V1_SX300.jpg"
    },
    {
        "Title": "Alien Space Avenger",
        "Year": "1989",
        "imdbID": "tt0101296",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNDQwMTdmMTUtNjFhYi00Mzc2LThmMDktMjI1MzRhMDUzNGUwXkEyXkFqcGdeQXVyMTQ2MjQyNDc@._V1_SX300.jpg"
    },
    {
        "Title": "Zorro, the Avenger",
        "Year": "1959",
        "imdbID": "tt0052424",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOGMyMGExNzctNTc4OC00MDc2LTk3MTAtNGVmZmZjZjU5NGE1XkEyXkFqcGdeQXVyNTUxODQ0MDk@._V1_SX300.jpg"
    },
    {
        "Title": "The Double-D Avenger",
        "Year": "2001",
        "imdbID": "tt0295216",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTY5NzQ4MjQ2NV5BMl5BanBnXkFtZTcwNDMwMzMyMQ@@._V1_SX300.jpg"
    },
    {
        "Title": "Burka Avenger",
        "Year": "2013–",
        "imdbID": "tt3091810",
        "Type": "series",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOGY0NDY4M2QtYTZlMS00YTRjLTk2NDItYTE5MzQxNjJmN2M0XkEyXkFqcGdeQXVyMzc0NzU5MTc@._V1_SX300.jpg"
    },
    {
        "Title": "Invisible Avenger",
        "Year": "1958",
        "imdbID": "tt0051783",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjA0MjM0OTc1NV5BMl5BanBnXkFtZTcwNDI0NDYyMQ@@._V1_SX300.jpg"
    },
    {
        "Title": "Hercules the Avenger",
        "Year": "1965",
        "imdbID": "tt0275668",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTUzNTQ3MTk4NV5BMl5BanBnXkFtZTcwNjY1MTYzMg@@._V1_SX300.jpg"
    },
    {
        "Title": "Lady Avenger",
        "Year": "1988",
        "imdbID": "tt0097703",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOTkyNjM4MDQ4Ml5BMl5BanBnXkFtZTcwNDE0ODc0MQ@@._V1_SX300.jpg"
    },
    {
        "Title": "Avenger of the Seven Seas",
        "Year": "1962",
        "imdbID": "tt0054932",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYWI1ZDc0ZjktOWYxMi00YjA4LWE0NjYtMzUzN2I5MWNkNGM0L2ltYWdlXkEyXkFqcGdeQXVyNjUzNzQ4NDQ@._V1_SX300.jpg"
    }
];

export { movieData }