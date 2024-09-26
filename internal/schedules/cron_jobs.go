package schedules

import (
    "log"
    "time"
    "github.com/robfig/cron/v3"
)

func StartCronJobs() {
    c := cron.New()
    c.AddFunc("@every 10m", func() {
        UpdateLeaderboard()
    })
    c.Start()
    select {}
}

func UpdateLeaderboard() {
    log.Println("Leaderboard updated at", time.Now())
}
