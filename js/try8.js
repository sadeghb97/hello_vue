Vue.component('my-alert', {
    props: ['title', 'message', 'type'],
    data : function(){
        return {
            classAlert : `alert-${this.type}`,
            isActive : true
        }
    },
    emits: ['close'],
    template: `
        <div :class="['alert', classAlert]" role="alert" v-show="isActive">
        <button type="button" class="close" @click="handleClick()">
            <span aria-hidden="true">×</span>
        </button>
        <strong>{{ title }}!</strong> {{ message }}.
        </div>
    `,
    methods: {
        handleClick: function () {
            this.isActive = false;
            this.$emit("close");
        }
    }
});

Vue.component('color-box', {
    props: ['color'],
    emits: ['choose'],
    template: `
        <div style="margin-top: 20px;" v-on:click="handleClick()" 
        v-bind:style="{textDecoration: color.chosen ? 'line-through' : 'none'}">

        <span>{{color.color}}</span>
        <span v-bind:style="{ color: color.value, backgroundColor: color.bg, fontSize: 30 + 'px' }">{{color.value}}</span>
        </div>
    `,
    methods:{
        handleClick : function(){
            this.$emit("choose");
        }
    }
})

var app = new Vue({
    el : "#app",
    data : {
        alerts : [],
        inputColor: "#F00",
        colors : [
            {
                color: "red",
                value: "#f00",
                bg: "#000",
                chosen: false
            },
            {
                color: "green",
                value: "#0f0",
                bg: "#000",
                chosen: false
            },
            {
                color: "blue",
                value: "#00f",
                bg: "#eee",
                chosen: false
            },
            {
                color: "cyan",
                value: "#0ff",
                bg: "#ddd",
                chosen: false
            },
            {
                color: "magenta",
                value: "#f0f",
                bg: "#000",
                chosen: false
            },
            {
                color: "yellow",
                value: "#ff0",
                bg: "#000",
                chosen: false
            },
            {
                color: "black",
                value: "#000",
                bg: "#bbb",
                chosen: false
            }
        ]
    },
    methods : {
        addColor : function(){
            if(this.inputColor != ""){
                this.colors.push({
                    color : "custom",
                    value : this.inputColor,
                    bg : "#fee",
                    chosen: false
                });

                this.alerts.push({
                    title: "Success",
                    message: "Color added!",
                    type: "success"
                });
            }
            else {
                this.alerts.push({
                    title: "Warning",
                    message: "Empty field!",
                    type: "warning"
                });
            }
        },
        chooseColor : function(index){
            this.colors[index].chosen = !this.colors[index].chosen;
        },
        closeAnAlert : function(){
            console.log("Just Closed An Alert");
        }
    },
    computed : {
        selectedColors : function(){
            return this.colors.filter(function(c){
                return c.chosen;
            });
        },
        existColor : function(){
            return this.selectedColors.length > 0;
        },
        existAlert : function(){
            return this.alerts.length > 0;
        }
    }
});