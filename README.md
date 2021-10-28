# Clock Block ⏰

Inspired by [Situation Clock](https://github.com/benbalter/situation-clock)

![Screen Shot 2021-10-28 at 2 58 50 AM](https://user-images.githubusercontent.com/567126/139234070-3d04f738-81da-491a-a895-815fc5e5d572.png)

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
