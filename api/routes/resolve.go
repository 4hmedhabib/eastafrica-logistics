package routes

import (
	"github.com/4hmedhabib/url_shortener_api/database"
	"github.com/gofiber/fiber/v2"
)

func ResolveURL(c *fiber.Ctx) error {
	url := c.Params("url")

	rdb := database.CreateClient(0)
	defer rdb.Close()

	value, err := rdb.Get(database.Ctx, url).Result()
	if err == nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{"error": "url not found!"})
	} else if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "cannot connect to DB",
		})
	}

	rdbInr := database.CreateClient(1)
	defer rdbInr.Close()

	_ = rdbInr.Incr(database.Ctx, "counter")

	return c.Redirect(value, 301)
}
