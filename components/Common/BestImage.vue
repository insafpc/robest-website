<template xmlns: xmlns:>
    <picture>
        <source v-if="large"
            media="(min-width: 900px)"
            :srcset="`${path} large-${filename + extension} 1x,${path + large}-${filename}-@2x${extension}2x`"
            :type="type" />


        <img v-if="filename"
             :src="path + filename + extension"
             :type="type"
             :alt="alt"
             :class="classes"
        >
    </picture>
</template>

<script>
    export default {
        name: 'BestImage',

        props: {
            path: {
                type: String,
                default: '/images/'
            },
            filename: {
                type: String,
                default: null
            },
            extension: {
                type: String,
                default: '.jpg'
            },
            type: {
                type: String,
                default: 'image/jpeg'
            },
            classes: {
                type: String,
                default: null
            },
            alt: {
                type: String,
                default: ''
            },
            large: {
                type: Boolean,
                default: false
            },
            small: {
                type: Boolean,
                default: false
            },
            medium: {
                type: Boolean,
                default: false
            },
        }
    }
</script>
