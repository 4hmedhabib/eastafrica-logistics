package routes

import "time"

type request struct {
	URL         string        `json:"url"`
	CustomShort string        `json:"shortURL"`
	Expiry      time.Duration `json:"expiry"`
}

type response struct {
	URL            string        `json:"url"`
	CustomShort    string        `json:"short_url"`
	Expiry         time.Duration `json:"expiry"`
	XRateRemaining int           `json:"rate_limit"`
	XRateLimitRest time.Duration `json:"rate_limit_rest"`
}
