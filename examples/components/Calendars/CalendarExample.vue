<template>
  <v-calendar :events="events" :config="config"></v-calendar>
</template>

<script>
export default {
  data() {
    return {
      config: {
          height: "500px"
      },
      events: [
        {
          title: "event1",
          start: "2017-11-01"
        },
        {
          title: "event2",
          start: "2017-11-05",
          end: "2017-11-07"
        },
        {
          title: "event3",
          start: "2017-11-09T12:30:00",
          allDay: false // will make the time show
        }
      ]
    };
  }
};
</script>

