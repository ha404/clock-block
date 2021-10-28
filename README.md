# Clock Block ⏰

Inspired by [Situation Clock](https://github.com/ha404/situation-clock)

# Configuration

Configure your clocks in this [JSON](https://github.com/ha404/clock-block/blob/main/src/data/config.json). Each array in `dateTimes` are parameters spread into [`Intl.DateTimeFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat):

```json
{
  "clocks": [
    {
      "name": "Local🏡",
      "dateTimes": [
        ["en-US"],
        [
          "en-US",
          {
            "timeStyle": "medium"
          }
        ]
      ]
    },
    {
      "name": "New York🗽",
      "dateTimes": [
        [
          "en-US",
          {
            "timeStyle": "short",
            "timeZone": "America/New_York"
          }
        ]
      ]
    }
  ]
}
```
