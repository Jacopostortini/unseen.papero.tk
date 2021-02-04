module.exports = {
    publicPath: "/unseen/",
    css: {
        loaderOptions: {
            sass: {
                additionalData: "@import '@/styles/global.scss';"
            }
        }
    }
}