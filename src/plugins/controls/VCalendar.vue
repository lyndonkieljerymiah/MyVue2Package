<template>
    <div></div>
</template>

<script>
    
    import 'fullcalendar';

    export default {
        name: 'vCalendar',
        props: {
                events: Array,
                config: {
                    type: Object,
                    default: {}
                },
                url: String,
                editable: Boolean,
                header: Object
        },
        data() {
            return {
                cal: null
            }
        },
        mounted() {
            
            let that = this;
            this.cal = $(this.$el);
            let defaultBackground = "#3a87ad";
            let prevClickedEvent;

            let args = {
                lang: 'en',
                header:  {  left:   'title', 
                    center: '',
                    right:  'today prev,next'
                },
                allDaySlot: false,
                slotEventOverlap: false,
                events: this.events,
                eventClick:function(event,jsEvent,view)
                {
                    if(prevClickedEvent) {
                        prevClickedEvent.backgroundColor = defaultBackground;
                    }
                    event.backgroundColor  = "#f4c9a0";
                    prevClickedEvent = event;
                    that.cal.fullCalendar('rerenderEvents');
                    that.$emit('onEventClicked', event);
                }
            }

            //args.height = this.config.height || "300px";

            this.cal.fullCalendar(args);
            console.log(this.cal);
        },
        watch: {
            events(val) {
                return val;
            }
        }
    }
</script>

<style>
    
</style>