<template>
    <div class="card" :class="[type && `card-${type}`]">
        <div class="card-image" v-if="$slots.image">
            <slot name="image"></slot>
        </div>
        <div class="card-header" v-if="$slots.header || title" :class="headerClasses">
            <slot name="header">
                <h4 class="card-title">{{title}}</h4>
                <p class="card-category" v-if="subTitle">{{subTitle}}</p>
            </slot>
        </div>

        <div class="card-icon d-flex align-items-center justify-content-center flex-column" v-if="icon">
            <div :class="iconClass">
                <i :class="icon">{{iconContent}}</i>
            </div>
        </div>

        <div class="card-body" v-if="$slots.default">
            <slot></slot>
        </div>
        <div class="card-image" v-if="$slots['image-bottom']">
            <slot name="image-bottom"></slot>
        </div>
        <slot name="raw-content"></slot>
        <div class="card-footer" :class="footerClasses" v-if="$slots.footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: "card",
        props: {
            title: {
                type: String,
                description: "Card title"
            },
            subTitle: {
                type: String,
                description: "Card subtitle"
            },
            type: {
                type: String,
                description: "Card type (e.g primary/danger etc)"
            },
            headerClasses: {
                type: [String, Object, Array],
                description: "Card header css classes"
            },
            bodyClasses: {
                type: [String, Object, Array],
                description: "Card body css classes"
            },
            footerClasses: {
                type: [String, Object, Array],
                description: "Card footer css classes"
            },
            icon: {
                type: String,
                description: "Icon class"
            },
            iconClass: {
                type: String,
                description: "Icon shape and bg classes"
            },
            iconContent: {
                type: String,
                description: "Icon inner html"
            },
        }
    };
</script>
<style>
</style>
