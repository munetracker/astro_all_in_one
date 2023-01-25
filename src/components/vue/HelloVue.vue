<script>
    export default {
        data() {
            return {
               count: 0
            }
        },
        methods: {
            increment() {
                this.count++
            },
            decrement() {
                this.count--
            }
        },
    }
</script>

<template>
    <div>
        <h1>Test Vue {{ count }}</h1>
        <button @click="increment"> Add </button>
        <button @click="decrement"> Minus </button>
    </div>
</template>