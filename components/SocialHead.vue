<template>
    <span v-if="false" />
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        image: {
            type: String,
            default: 'https://nuxtjs.org/nuxt-card.png'
        }
    },
    head() {
        return {
        meta: [
            {
            hid: 'twitter:card',
            name: 'twitter:card',
            content: "summary"
            },
            {
            hid: 'twitter:title',
            name: 'twitter:title',
            content: this.title
            },
            {
            hid: 'twitter:description',
            name: 'twitter:description',
            content: this.description
            },
            {
            hid: 'twitter:image',
            name: 'twitter:image',
            content: this.image + "?w=450&ar=1:1&fit=crop&crop=faces,edges&blend-size=inherit&blend-mode=multiply&blend=https://demos.imgix.net/dark-ellipse-gradient.ai?fm=png%20w=450&txt-align=middle,center&txt-size=72&mark64=aHR0cHM6Ly9pbWdpeC5jb3NtaWNqcy5jb20vYmViZDVlZDAtZjcyZS0xMWViLWExNzEtNzFkOWRiMGVlNDk2LWxva2lsb2dvLmdpZj93PTMwMCZoPTEyMCZmaXQ9Y3JvcCZmcmFtZT02&txt-fit=max&txt-pad=20&txt-color=white&txt=" + this.title
            },
            {
            hid: 'twitter:image:alt',
            name: 'twitter:image:alt',
            content: this.title
            },
            {
            hid: 'og:title',
            property: 'og:title',
            content: this.title
            },
            {
            hid: 'og:description',
            property: 'og:description',
            content: this.description
            },
            {
            hid: 'og:image',
            property: 'og:image',
            content: this.image + "?w=1200&h=630&fit=crop&crop=faces,edges&blend-size=inherit&blend-mode=multiply&blend=https://demos.imgix.net/dark-ellipse-gradient.ai%3Ffm=png%20w=1200&txt-align=top,center&txt-size=72&mark64=aHR0cHM6Ly9pbWdpeC5jb3NtaWNqcy5jb20vYmViZDVlZDAtZjcyZS0xMWViLWExNzEtNzFkOWRiMGVlNDk2LWxva2lsb2dvLmdpZj93PTMwMCZoPTEyMCZmaXQ9Y3JvcCZmcmFtZT02&txt-fit=max&txt-pad=20&txt-color=white&txt=" + this.title
            },
            {
            hid: 'og:image:alt',
            property: 'og:image:alt',
            content: this.title
            }
        ]
        }
  }
}
</script>