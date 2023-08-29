package main

import (
	"fmt"
	"log"
	"os"

	"github.com/4hmedhabib/url_shortener_api/routes"
	"github.com/Valgard/godotenv"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/logger"
)

func setupRoutes(app *fiber.App) {
	app.Get("/:url", routes.ResolveURL)
	app.Get("/api/v1", routes.ShortenURL)
}

func main() {
	err := godotenv.Load(os.ExpandEnv("../.env"))
	if err != nil {
		fmt.Print(err)
	}

	app := fiber.New()

	app.Use(logger.New())

	setupRoutes(app)

	log.Fatal(app.Listen(os.Getenv("APP_PORT")))

}
